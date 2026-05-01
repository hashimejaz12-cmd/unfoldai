import { NextRequest, NextResponse } from "next/server";
import { appendFileSync, existsSync, mkdirSync, readFileSync } from "fs";
import { join } from "path";

const DATA_DIR = join(process.cwd(), "data");
const LEADS_FILE = join(DATA_DIR, "leads.json");

// Ensure data directory exists
if (!existsSync(DATA_DIR)) {
  mkdirSync(DATA_DIR, { recursive: true });
}

// Ensure leads file exists
if (!existsSync(LEADS_FILE)) {
  appendFileSync(LEADS_FILE, "[]");
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, source, businessType, message } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const lead = {
      id: Date.now().toString(),
      name: name || "",
      email,
      source,
      businessType: businessType || "",
      message: message || "",
      timestamp: new Date().toISOString(),
    };

    // Read existing leads
    const leadsData = JSON.parse(readFileSync(LEADS_FILE, "utf-8"));
    leadsData.push(lead);

    // Write back to file
    appendFileSync(LEADS_FILE, "");
    const fs = require("fs");
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leadsData, null, 2));

    // Send email notification if Resend API is available
    if (process.env.RESEND_API_KEY) {
      try {
        await sendNotificationEmail(lead);
      } catch (error) {
        console.error("Failed to send notification email:", error);
        // Don't fail the request if email fails
      }
    }

    return NextResponse.json({ success: true, lead });
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Failed to process lead" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const adminKey = req.headers.get("x-admin-key");

    if (adminKey !== process.env.ADMIN_KEY) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const leadsData = JSON.parse(readFileSync(LEADS_FILE, "utf-8"));
    return NextResponse.json({ leads: leadsData, total: leadsData.length });
  } catch (error) {
    console.error("Error reading leads:", error);
    return NextResponse.json(
      { error: "Failed to read leads" },
      { status: 500 }
    );
  }
}

async function sendNotificationEmail(lead: any) {
  const emailBody = `
New Lead Captured!

Name: ${lead.name || "Not provided"}
Email: ${lead.email}
Source: ${lead.source}
Business Type: ${lead.businessType || "Not specified"}
Message: ${lead.message || "None"}
Time: ${lead.timestamp}
  `.trim();

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "noreply@unfoldai.net",
      to: "hello@unfoldai.net",
      subject: `New Lead: ${lead.name || lead.email}`,
      html: `
        <h2>New Lead Captured!</h2>
        <p><strong>Name:</strong> ${lead.name || "Not provided"}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Source:</strong> ${lead.source}</p>
        <p><strong>Business Type:</strong> ${lead.businessType || "Not specified"}</p>
        <p><strong>Message:</strong> ${lead.message || "None"}</p>
        <p><strong>Time:</strong> ${lead.timestamp}</p>
      `,
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend API error: ${response.statusText}`);
  }
}
