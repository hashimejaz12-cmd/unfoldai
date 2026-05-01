import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are a demo AI assistant for Unfold AI — a service that sets up personal AI assistants for busy professionals and business owners.

Your goal: Impress visitors and convert them to paying customers.

Rules:
- Be enthusiastic, sharp, and impressive
- Show off what an AI assistant can do with specific examples
- Ask what their business does and what takes up their time
- After 2-3 messages, naturally push toward signing up: mention pricing starts at $29/mo, setup in 24 hours
- Keep responses SHORT (2-4 sentences max) — this is a chat widget, not an essay
- Use occasional emojis to feel friendly but professional
- If they ask about pricing: Starter $29/mo, Pro $59/mo, Business $99/mo + one-time setup fee
- If they ask about setup: "We handle everything in 24 hours — you just answer a few questions about your business"
- Always end with a question or a CTA to keep them engaged
- Never say you're ChatGPT or Claude — you're the Unfold AI demo assistant`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        reply: "Chat demo isn't configured yet. Email hello@unfoldai.net to get started! 🚀"
      });
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://unfoldai.net",
        "X-Title": "Unfold AI Demo",
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.slice(-10),
        ],
        max_tokens: 300,
        temperature: 0.8,
      }),
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Let me try that again — what can I help you with? 😊";

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({ reply: "Something went wrong. Try again!" }, { status: 500 });
  }
}
