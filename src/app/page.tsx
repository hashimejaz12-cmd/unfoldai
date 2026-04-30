"use client";

import { useState } from "react";

/* ───────── Hero ───────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-[#0d0d2b] to-dark animate-gradient" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-dark-border bg-dark-card/60 text-sm text-gray-400">
          ⚡ Set up in 24 hours — no coding required
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Your Own AI Assistant.{" "}
          <span className="gradient-text">Running 24/7.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          A private AI that knows your business, connects to your WhatsApp &amp;
          email, and works while you sleep. Set up in 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#pricing"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple font-semibold text-lg hover:opacity-90 transition"
          >
            Get Your AI Assistant →
          </a>
          <a
            href="#demo"
            className="px-8 py-4 rounded-xl border border-dark-border font-semibold text-lg hover:bg-dark-card transition"
          >
            Watch Demo
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────── Problem ───────── */
function Problem() {
  const pains = [
    {
      icon: "🔄",
      title: "It forgets you every conversation",
      desc: "Every chat starts from zero. No memory, no context, no continuity.",
    },
    {
      icon: "🚫",
      title: "It can't send emails or check your calendar",
      desc: "ChatGPT lives in a box. It can't act on your behalf in the real world.",
    },
    {
      icon: "👁️",
      title: "Your private data trains their AI",
      desc: "Your business secrets become training data for everyone else.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Still using ChatGPT as your assistant?
        </h2>
        <p className="text-gray-400 mb-16 text-lg">Here&apos;s the problem.</p>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pains.map((p) => (
            <div key={p.title} className="card text-left">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400">{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-2xl font-semibold gradient-text">
          There&apos;s a better way.
        </p>
      </div>
    </section>
  );
}

/* ───────── Demo ───────── */
function Demo() {
  const msgs = [
    { from: "user", text: "Hey, what's on my calendar today?" },
    {
      from: "ai",
      text: "You have 3 meetings today: 10am standup, 1pm client call with Sarah, 4pm team review. Want me to prepare notes for the client call?",
    },
    { from: "user", text: "Yes, and check if Sarah replied to my last email" },
    {
      from: "ai",
      text: "Sarah replied 2 hours ago — she confirmed the new timeline and asked about the budget. I've drafted a reply for you. Want me to send it?",
    },
  ];

  return (
    <section id="demo" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          See It in Action
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          A real conversation with your AI assistant.
        </p>

        <div className="card !p-0 overflow-hidden">
          {/* Chat header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-dark-border bg-dark-card">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center font-bold text-sm">
              AI
            </div>
            <div>
              <div className="font-semibold">Your AI Assistant</div>
              <div className="text-xs text-green-400">Online</div>
            </div>
          </div>

          {/* Messages */}
          <div className="p-5 space-y-4 bg-[#0e0e24]">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    m.from === "user"
                      ? "bg-accent-blue/80 rounded-br-md"
                      : "bg-dark-card border border-dark-border rounded-bl-md"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────── Features ───────── */
function Features() {
  const features = [
    {
      icon: "🧠",
      title: "Remembers Everything",
      desc: "Your AI learns your preferences, clients, projects. It gets smarter every day.",
    },
    {
      icon: "💬",
      title: "WhatsApp & Telegram",
      desc: "Talk to your AI like a friend. Text it anytime, anywhere.",
    },
    {
      icon: "📧",
      title: "Email Management",
      desc: "Reads, summarizes, and drafts replies in your tone. You just approve.",
    },
    {
      icon: "📅",
      title: "Calendar & Scheduling",
      desc: "Never miss a meeting. Your AI manages your schedule.",
    },
    {
      icon: "🔒",
      title: "Your Data, Your Server",
      desc: "Runs on a private server. Your data never trains anyone else's AI.",
    },
    {
      icon: "⚡",
      title: "24/7 Availability",
      desc: "Works while you sleep. No sick days, no vacations, no coffee breaks.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Everything You Need
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          Your AI assistant comes fully loaded.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── How It Works ───────── */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Tell us about your work",
      desc: "We learn your business, tools, and preferences.",
    },
    {
      n: "02",
      title: "We build your AI in 24 hours",
      desc: "Custom setup on your private server.",
    },
    {
      n: "03",
      title: "Connect your channels",
      desc: "WhatsApp, Telegram, email — your choice.",
    },
    {
      n: "04",
      title: "Start delegating",
      desc: "Your AI is ready. Just text it like an assistant.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          How It Works
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="text-center">
              <div className="text-5xl font-extrabold gradient-text mb-4">
                {s.n}
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Comparison ───────── */
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
    if (v === true) return <span className="text-green-400 text-xl">✅</span>;
    if (v === false) return <span className="text-red-400 text-xl">❌</span>;
    if (v === "warn") return <span className="text-yellow-400 text-xl">⚠️</span>;
    if (v === "maybe")
      return <span className="text-yellow-400 text-sm">Maybe</span>;
    return <span className="font-semibold">{v}</span>;
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          How We Compare
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          AI Assistant vs Human VA vs ChatGPT
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-dark-border">
                <th className="py-4 px-4 text-gray-400 font-medium">
                  Feature
                </th>
                <th className="py-4 px-4 text-center">
                  <span className="gradient-text font-bold">Unfold AI</span>
                </th>
                <th className="py-4 px-4 text-center text-gray-400">
                  Human VA
                </th>
                <th className="py-4 px-4 text-center text-gray-400">
                  ChatGPT
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0] as string} className="border-b border-dark-border/50">
                  <td className="py-4 px-4 font-medium">{r[0]}</td>
                  <td className="py-4 px-4 text-center">{cell(r[1])}</td>
                  <td className="py-4 px-4 text-center">{cell(r[2])}</td>
                  <td className="py-4 px-4 text-center">{cell(r[3])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ───────── Testimonials ───────── */
function Testimonials() {
  const items = [
    {
      quote:
        "I save 15 hours a week. My AI handles emails, scheduling, and even research. Best $59 I spend.",
      name: "Sarah K.",
      role: "Consultant",
    },
    {
      quote:
        "It's like having a clone of myself. It writes emails in my exact tone.",
      name: "James M.",
      role: "Agency Owner",
    },
    {
      quote:
        "I was skeptical, but after the first week I couldn't imagine going back.",
      name: "Priya R.",
      role: "Startup Founder",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          What Our Users Say
        </h2>
        <p className="text-gray-400 text-center mb-12 text-sm">
          From our beta users
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="card">
              <div className="text-accent-blue text-2xl mb-4">&ldquo;</div>
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

/* ───────── Pricing ───────── */
function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      setup: "$99 one-time setup",
      features: ["Web chat access", "Basic memory", "Email summaries"],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$59",
      setup: "$149 one-time setup",
      features: [
        "WhatsApp + Telegram + Web",
        "Full memory & context",
        "Email management",
        "Calendar integration",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Business",
      price: "$99",
      setup: "$249 one-time setup",
      features: [
        "Everything in Professional",
        "Multiple team members",
        "Custom integrations",
        "Priority support",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          No hidden fees. Cancel anytime.
        </p>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 border transition-all ${
                p.popular
                  ? "bg-gradient-to-b from-accent-blue/10 to-accent-purple/10 border-accent-blue/40 scale-105"
                  : "bg-dark-card border-dark-border"
              }`}
            >
              {p.popular && (
                <div className="text-xs font-semibold uppercase tracking-wider gradient-text mb-4">
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
                    <span className="text-green-400">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="mailto:hello@unfoldai.net"
                className={`block text-center py-3 rounded-xl font-semibold transition ${
                  p.popular
                    ? "bg-gradient-to-r from-accent-blue to-accent-purple hover:opacity-90"
                    : "border border-dark-border hover:bg-dark-card"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── FAQ ───────── */
function FAQ() {
  const faqs = [
    {
      q: "How is this different from ChatGPT?",
      a: "ChatGPT is a general-purpose chatbot that forgets you after every conversation. Your Unfold AI assistant remembers everything, connects to your real tools (email, calendar, WhatsApp), and acts on your behalf. It's your personal assistant, not a public chatbot.",
    },
    {
      q: "Is my data private?",
      a: "100%. Your AI runs on a dedicated private server. Your data is never shared, never used for training, and never accessible to anyone but you. You own everything.",
    },
    {
      q: "What can the AI actually do?",
      a: "Read and draft emails, manage your calendar, answer questions about your business, research topics, summarize documents, and communicate via WhatsApp or Telegram. It learns your style and preferences over time.",
    },
    {
      q: "How long does setup take?",
      a: "24 hours or less. We handle everything — server setup, AI configuration, channel connections. You just tell us about your work and preferences.",
    },
    {
      q: "Can I try it first?",
      a: "Yes! We offer a free demo call where we show you exactly how your AI assistant would work for your specific use case. No commitment required.",
    },
    {
      q: "What if I want to cancel?",
      a: "Cancel anytime with no questions asked. We'll export your data and shut down your server. No lock-in, no penalties.",
    },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="border border-dark-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-dark-card/50 transition"
              >
                <span className="font-semibold pr-4">{f.q}</span>
                <span className="text-2xl text-gray-400 shrink-0">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────── Final CTA ───────── */
function FinalCTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to Get Your Own{" "}
          <span className="gradient-text">AI Assistant?</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10">
          Join 50+ professionals who&apos;ve automated their work with Unfold
          AI.
        </p>
        <a
          href="mailto:hello@unfoldai.net"
          className="inline-block px-10 py-4 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple font-semibold text-lg hover:opacity-90 transition"
        >
          Get Started Today →
        </a>
        <p className="text-gray-500 mt-6 text-sm">
          Questions? Email{" "}
          <a
            href="mailto:hello@unfoldai.net"
            className="text-accent-blue hover:underline"
          >
            hello@unfoldai.net
          </a>
        </p>
      </div>
    </section>
  );
}

/* ───────── Footer ───────── */
function Footer() {
  return (
    <footer className="border-t border-dark-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-bold text-lg gradient-text">Unfold AI</div>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms
          </a>
          <a
            href="mailto:hello@unfoldai.net"
            className="hover:text-white transition"
          >
            Contact
          </a>
        </div>
        <div className="text-sm text-gray-500">© 2026 Unfold AI</div>
      </div>
    </footer>
  );
}

/* ───────── Page ───────── */
export default function Home() {
  return (
    <main>
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
    </main>
  );
}
