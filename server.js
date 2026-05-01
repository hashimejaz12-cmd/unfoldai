const { createServer } = require("http");
const { readFileSync, existsSync } = require("fs");
const { join, extname } = require("path");
const https = require("https");

const PORT = process.env.PORT || 3000;
const OUT_DIR = join(__dirname, "out");

const MIME_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain",
};

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

function handleChatAPI(req, res) {
  let body = "";
  req.on("data", (chunk) => (body += chunk));
  req.on("end", () => {
    try {
      const { messages } = JSON.parse(body);
      const apiKey = process.env.OPENROUTER_API_KEY;

      if (!apiKey) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ reply: "Chat API is not configured yet. Contact us at hello@unfoldai.net to get started! 🚀" }));
        return;
      }

      const payload = JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages.slice(-10), // last 10 messages for context
        ],
        max_tokens: 300,
        temperature: 0.8,
      });

      const options = {
        hostname: "openrouter.ai",
        path: "/api/v1/chat/completions",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          "HTTP-Referer": "https://unfoldai.net",
          "X-Title": "Unfold AI Demo",
        },
      };

      const apiReq = https.request(options, (apiRes) => {
        let data = "";
        apiRes.on("data", (chunk) => (data += chunk));
        apiRes.on("end", () => {
          try {
            const result = JSON.parse(data);
            const reply = result.choices?.[0]?.message?.content || "I'm having a moment — try again! 😅";
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ reply }));
          } catch {
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ reply: "Something went wrong. Try again!" }));
          }
        });
      });

      apiReq.on("error", () => {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ reply: "Connection error. Try again!" }));
      });

      apiReq.write(payload);
      apiReq.end();
    } catch {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ reply: "Invalid request." }));
    }
  });
}

const server = createServer((req, res) => {
  const pathname = req.url.split("?")[0];

  // API routes
  if (req.method === "POST" && pathname === "/api/chat") {
    return handleChatAPI(req, res);
  }

  // Static file serving
  let filePath = pathname;
  if (filePath === "/") filePath = "/index.html";
  if (!extname(filePath)) filePath += ".html";

  const fullPath = join(OUT_DIR, filePath);

  if (existsSync(fullPath)) {
    const ext = extname(fullPath);
    const mime = MIME_TYPES[ext] || "application/octet-stream";
    const content = readFileSync(fullPath);
    res.writeHead(200, { "Content-Type": mime });
    res.end(content);
  } else {
    const notFound = join(OUT_DIR, "404.html");
    if (existsSync(notFound)) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(readFileSync(notFound));
    } else {
      res.writeHead(404);
      res.end("Not Found");
    }
  }
});

server.listen(PORT, () => {
  console.log(`Unfold AI running on port ${PORT}`);
});
