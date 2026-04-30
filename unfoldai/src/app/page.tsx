"use client";

import { useState, useRef, useEffect } from "react";

/* ═══════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      {/* Grid */}
      <div className="absolute inset-0 grid-bg" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Live demo badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 rounded-full glass-card pulse-badge text-sm text-gray-300">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Live Demo Available
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold leading-[1.05] tracking-tight mb-8">
          <span className="gradient-text glow-text">The AI Revolution</span>
          <br />
          <span className="text-white">Is Here. Are You Ready?</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Get your own private AI assistant — trained on your business, connected
          to your tools, running 24/7.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              const evt = new CustomEvent("open-chat-widget");
              window.dispatchEvent(evt);
            }}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple font-semibold text-lg hover:opacity-90 transition neon-border"
          >
            Try It Free →
          </button>
          <a
            href="#pricing"
            className="px-8 py-4 rounded-xl glass-card font-semibold text-lg hover:border-accent-blue/40 transition text-center"
          >
            Get Your AI →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PROBLEM
   ═══════════════════════════════════════════ */
function Problem() {
  const pains = [
    { icon: "🔄", title: "It forgets you every conversation", desc: "Every chat starts from zero. No memory, no context, no continuity." },
    { icon: "🚫", title: "It can't send emails or check your calendar", desc: "ChatGPT lives in a box. It can't act on your behalf in the real world." },
    { icon: "👁️", title: "Your private data trains their AI", desc: "Your business secrets become training data for everyone else." },
  ];

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="orb" style={{ width: 300, height: 300, background: "radial-gradient(circle, rgba(239,68,68,0.3), transparent 70%)", top: "20%", right: "-5%", position: "absolute", filter: "blur(80px)" }} />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 glow-text">
          Still using ChatGPT as your assistant?
        </h2>
        <p className="text-gray-400 mb-16 text-lg">The old way is broken. Here&apos;s why.</p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pains.map((p) => (
            <div key={p.title} className="pain-card p-6 text-left">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass-card inline-block px-8 py-4 neon-border">
          <p className="text-2xl font-bold gradient-text">
            The Unfold AI way → Your AI. Your data. Your rules.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   DEMO — Terminal Style
   ═══════════════════════════════════════════ */
function Demo() {
  const msgs = [
    { from: "user", text: "Hey, what's on my calendar today?" },
    { from: "ai", text: "You have 3 meetings today: 10am standup, 1pm client call with Sarah, 4pm team review. Want me to prepare notes for the client call?" },
    { from: "user", text: "Yes, and check if Sarah replied to my last email" },
    { from: "ai", text: "Sarah replied 2 hours ago — she confirmed the new timeline and asked about the budget. I've drafted a reply for you. Want me to send it?" },
  ];

  return (
    <section id="demo" className="py-28 px-6 relative">
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 glow-text">See It in Action</h2>
        <p className="text-gray-400 text-center mb-12 text-lg">A real conversation with your AI assistant.</p>

        <div className="terminal">
          <div className="terminal-header">
            <div className="terminal-dot bg-red-500" />
            <div className="terminal-dot bg-yellow-500" />
            <div className="terminal-dot bg-green-500" />
            <span className="ml-3 text-sm text-gray-400 font-mono">unfold-ai-assistant — session</span>
            <span className="ml-auto text-xs text-green-400 font-mono">● connected</span>
          </div>

          <div className="p-6 space-y-4 font-mono text-sm">
            {msgs.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.from === "user" ? "" : ""}`}>
                <span className={`shrink-0 font-bold ${m.from === "user" ? "text-gray-400" : "text-cyan-400"}`}>
                  {m.from === "user" ? "you >" : " ai >"}
                </span>
                <span className={m.from === "user" ? "text-white" : "text-cyan-300"}>
                  {m.text}
                  {i === msgs.length - 1 && m.from === "ai" && <span className="typing-cursor" />}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FEATURES
   ═══════════════════════════════════════════ */
function Features() {
  const features = [
    { icon: "🧠", title: "Remembers Everything", desc: "Your AI learns your preferences, clients, projects. It gets smarter every day.", cls: "feature-blue" },
    { icon: "💬", title: "WhatsApp & Telegram", desc: "Talk to your AI like a friend. Text it anytime, anywhere.", cls: "feature-purple" },
    { icon: "📧", title: "Email Management", desc: "Reads, summarizes, and drafts replies in your tone. You just approve.", cls: "feature-cyan" },
    { icon: "📅", title: "Calendar & Scheduling", desc: "Never miss a meeting. Your AI manages your schedule.", cls: "feature-green" },
    { icon: "🔒", title: "Your Data, Your Server", desc: "Runs on a private server. Your data never trains anyone else's AI.", cls: "feature-orange" },
    { icon: "⚡", title: "24/7 Availability", desc: "Works while you sleep. No sick days, no vacations, no coffee breaks.", cls: "feature-pink" },
  ];

  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="orb" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(14,165,233,0.2), transparent 70%)", bottom: "10%", left: "-5%", position: "absolute", filter: "blur(80px)" }} />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 glow-text">Everything You Need</h2>
        <p className="text-gray-400 text-center mb-16 text-lg">Your AI assistant comes fully loaded.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className={`glass-card p-6 feature-card ${f.cls}`}>
              <div className="feature-icon w-14 h-14 rounded-xl glass-card flex items-center justify-center text-3xl mb-4 transition-all duration-300">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   HOW IT WORKS
   ═══════════════════════════════════════════ */
function HowItWorks() {
  const steps = [
    { n: "01", title: "Tell us about your work", desc: "We learn your business, tools, and preferences." },
    { n: "02", title: "We build your AI in 24 hours", desc: "Custom setup on your private server." },
    { n: "03", title: "Connect your channels", desc: "WhatsApp, Telegram, email — your choice." },
    { n: "04", title: "Start delegating", desc: "Your AI is ready. Just text it like an assistant." },
  ];

  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 glow-text">How It Works</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.n} className="text-center relative">
              {/* Glowing circle */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl font-extrabold gradient-text neon-border bg-[rgba(15,15,40,0.6)]">
                {s.n}
              </div>
              {/* Connector line for non-last */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+50px)] w-[calc(100%-60px)] h-[2px] bg-gradient-to-r from-accent-blue/30 to-accent-purple/30" />
              )}
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   COMPARISON
   ═══════════════════════════════════════════ */
function Comparison() {
  const rows = [
    ["Available 24/7", true, false, true],
    ["Remembers you", true, true, false],
    ["Sends emails", true, true, false],
    ["WhatsApp access", true, "maybe", false],
    ["Calendar mgmt", true, true, false],
    ["Private data", true, "warn", false],
    ["Monthly cost", "$59", "$2,000+", "$20"],
  ] as const;

  const cell = (v: boolean | string) => {
    if (v === true) return <span className="glow-check text-xl">✅</span>;
    if (v === false) return <span className="glow-x text-xl">❌</span>;
    if (v === "warn") return <span className="text-yellow-400 text-xl">⚠️</span>;
    if (v === "maybe") return <span className="text-yellow-400 text-sm">Maybe</span>;
    return <span className="font-semibold">{v}</span>;
  };

  return (
    <section className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 glow-text">How We Compare</h2>
        <p className="text-gray-400 text-center mb-12 text-lg">AI Assistant vs Human VA vs ChatGPT</p>
        <div className="overflow-x-auto glass-card !p-0">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-4 px-6 text-gray-400 font-medium">Feature</th>
                <th className="py-4 px-6 text-center"><span className="gradient-text font-bold glow-text">Unfold AI</span></th>
                <th className="py-4 px-6 text-center text-gray-400">Human VA</th>
                <th className="py-4 px-6 text-center text-gray-400">ChatGPT</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0] as string} className="border-b border-white/5">
                  <td className="py-4 px-6 font-medium">{r[0]}</td>
                  <td className="py-4 px-6 text-center">{cell(r[1])}</td>
                  <td className="py-4 px-6 text-center">{cell(r[2])}</td>
                  <td className="py-4 px-6 text-center">{cell(r[3])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   TESTIMONIALS
   ═══════════════════════════════════════════ */
function Testimonials() {
  const items = [
    { quote: "I save 15 hours a week. My AI handles emails, scheduling, and even research. Best $59 I spend.", name: "Sarah K.", role: "Consultant" },
    { quote: "It's like having a clone of myself. It writes emails in my exact tone.", name: "James M.", role: "Agency Owner" },
    { quote: "I was skeptical, but after the first week I couldn't imagine going back.", name: "Priya R.", role: "Startup Founder" },
  ];

  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 glow-text">What Our Users Say</h2>
        <p className="text-gray-400 text-center mb-12 text-sm">From our beta users</p>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="glass-card p-6">
              <div className="gradient-text text-3xl mb-4">&ldquo;</div>
              <p className="text-gray-300 mb-6 leading-relaxed">{t.quote}</p>
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-gray-400">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   PRICING
   ═══════════════════════════════════════════ */
function Pricing() {
  const plans = [
    { name: "Starter", price: "$29", setup: "$99 one-time setup", features: ["Web chat access", "Basic memory", "Email summaries"], popular: false },
    { name: "Professional", price: "$59", setup: "$149 one-time setup", features: ["WhatsApp + Telegram + Web", "Full memory & context", "Email management", "Calendar integration"], popular: true },
    { name: "Business", price: "$99", setup: "$249 one-time setup", features: ["Everything in Professional", "Multiple team members", "Custom integrations", "Priority support"], popular: false },
  ];

  return (
    <section id="pricing" className="py-28 px-6 relative overflow-hidden">
      <div className="orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(139,92,246,0.15), transparent 70%)", top: "20%", left: "50%", transform: "translateX(-50%)", position: "absolute", filter: "blur(80px)" }} />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 glow-text">Simple, Transparent Pricing</h2>
        <p className="text-gray-400 text-center mb-16 text-lg">No hidden fees. Cancel anytime.</p>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 transition-all ${
                p.popular ? "popular-card scale-105" : "glass-card"
              }`}
            >
              {p.popular && (
                <div className="inline-block text-xs font-semibold uppercase tracking-wider gradient-text mb-4 pulse-badge px-3 py-1 rounded-full neon-border">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-1">{p.name}</h3>
              <div className="text-sm text-gray-400 mb-4">{p.setup}</div>
              <div className="flex items-end gap-1 mb-6">
                <span className="text-5xl font-extrabold">{p.price}</span>
                <span className="text-gray-400 mb-1">/mo</span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-300">
                    <span className="glow-check">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:hello@unfoldai.net"
                className={`block text-center py-3 rounded-xl font-semibold transition ${
                  p.popular
                    ? "bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-90 neon-border"
                    : "glass-card hover:border-accent-blue/40"
                }`}
              >
                {p.popular ? "Get Started" : p.name === "Business" ? "Contact Us" : "Get Started"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FAQ
   ═══════════════════════════════════════════ */
function FAQ() {
  const faqs = [
    { q: "How is this different from ChatGPT?", a: "ChatGPT is a general-purpose chatbot that forgets you after every conversation. Your Unfold AI assistant remembers everything, connects to your real tools (email, calendar, WhatsApp), and acts on your behalf. It's your personal assistant, not a public chatbot." },
    { q: "Is my data private?", a: "100%. Your AI runs on a dedicated private server. Your data is never shared, never used for training, and never accessible to anyone but you." },
    { q: "What can the AI actually do?", a: "Read and draft emails, manage your calendar, answer questions about your business, research topics, summarize documents, and communicate via WhatsApp or Telegram." },
    { q: "How long does setup take?", a: "24 hours or less. We handle everything — server setup, AI configuration, channel connections." },
    { q: "Can I try it first?", a: "Yes! Click the chat button in the corner for a live demo, or email us for a personalized walkthrough." },
    { q: "What if I want to cancel?", a: "Cancel anytime with no questions asked. We'll export your data and shut down your server." },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 glow-text">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="glass-card overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/5 transition"
              >
                <span className="font-semibold pr-4">{f.q}</span>
                <span className="text-2xl text-gray-400 shrink-0">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-400 leading-relaxed">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   CTA
   ═══════════════════════════════════════════ */
function FinalCTA() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="orb" style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(14,165,233,0.2), transparent 70%)", top: "0%", left: "50%", transform: "translateX(-50%)", position: "absolute", filter: "blur(100px)" }} />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to Get Your Own <span className="gradient-text glow-text">AI Assistant?</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10">Join 50+ professionals who&apos;ve automated their work with Unfold AI.</p>
        <a
          href="mailto:hello@unfoldai.net"
          className="inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple font-semibold text-lg hover:opacity-90 transition neon-border"
        >
          Get Started Today →
        </a>
        <p className="text-gray-500 mt-6 text-sm">
          Questions?{" "}
          <a href="mailto:hello@unfoldai.net" className="text-accent-blue hover:underline">hello@unfoldai.net</a>
        </p>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-bold text-lg gradient-text">Unfold AI</div>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Terms</a>
          <a href="mailto:hello@unfoldai.net" className="hover:text-white transition">Contact</a>
        </div>
        <div className="text-sm text-gray-500">© 2026 Unfold AI</div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   CHAT WIDGET
   ═══════════════════════════════════════════ */
function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "assistant", content: "Hey! 👋 I'm a demo of your potential AI assistant. Ask me what I can do for your business — or just say 'hi'!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("open-chat-widget", handler);
    return () => window.removeEventListener("open-chat-widget", handler);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    const newMsgs = [...messages, { role: "user", content: userMsg }];
    setMessages(newMsgs);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMsgs }),
      });
      const data = await res.json();
      setMessages([...newMsgs, { role: "assistant", content: data.reply || "Sorry, something went wrong. Try again!" }]);
    } catch {
      setMessages([...newMsgs, { role: "assistant", content: "Hmm, I'm having trouble connecting. Try again in a moment! 🔧" }]);
    }
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat window */}
      {isOpen && (
        <div className="mb-4 w-[340px] sm:w-[380px] h-[500px] flex flex-col rounded-2xl overflow-hidden neon-border" style={{ background: "rgba(5,5,16,0.95)", backdropFilter: "blur(20px)" }}>
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10" style={{ background: "rgba(15,15,40,0.8)" }}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center text-sm font-bold">AI</div>
              <div>
                <div className="font-semibold text-sm">Unfold AI Demo</div>
                <div className="text-xs text-green-400 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" /> Live</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white text-xl transition">✕</button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-gradient-to-r from-accent-blue/80 to-accent-purple/80 rounded-br-md"
                    : "glass-card rounded-bl-md"
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="glass-card rounded-2xl rounded-bl-md px-4 py-2.5 text-sm text-gray-400">
                  <span className="animate-pulse">Thinking...</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10">
            <form onSubmit={(e) => { e.preventDefault(); send(); }} className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-accent-blue/50 transition placeholder-gray-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-sm font-semibold hover:opacity-90 transition disabled:opacity-50"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating button */}
      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="chat-widget-btn">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
        </button>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */
export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <Problem />
      <Demo />
      <Features />
      <HowItWorks />
      <Comparison />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <ChatWidget />
    </main>
  );
}
