import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, source, businessType, message } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
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

    // Send email notification via Resend
    if (process.env.RESEND_API_KEY) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Unfold AI <hello@unfoldai.net>",
          to: process.env.ADMIN_EMAIL || "hello@unfoldai.net",
          subject: `🔥 New Lead: ${lead.name || lead.email}`,
          html: `
            <h2>New Lead from unfoldai.net!</h2>
            <p><strong>Name:</strong> ${lead.name || "Not provided"}</p>
            <p><strong>Email:</strong> ${lead.email}</p>
            <p><strong>Source:</strong> ${lead.source}</p>
            <p><strong>Business Type:</strong> ${lead.businessType || "Not specified"}</p>
            <p><strong>Message:</strong> ${lead.message || "None"}</p>
            <p><strong>Time:</strong> ${lead.timestamp}</p>
            <hr/>
            <p><a href="mailto:${lead.email}">Reply to this lead →</a></p>
          `,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json({ error: "Failed to process lead" }, { status: 500 });
  }
}
