"use client";

import { useState } from "react";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";

export default function Home() {
  const [showLeadModal, setShowLeadModal] = useState(false);

  return (
    <>
      <main className="relative overflow-hidden min-h-screen">
        {/* Background effects */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="absolute inset-0 grid-bg" />

        {/* Content */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="max-w-6xl mx-auto px-6 py-20 md:py-32 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Turn Your Business Into an{" "}
              <span className="gradient-text glow-text">AI-Powered Operation</span>
              <br />
              <span className="text-3xl md:text-5xl">Without Hiring More Staff</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-10">
              We design and deploy custom AI tools and intelligent agents that automate workflows, cut costs, and scale your operations—fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowLeadModal(true)}
                className="px-10 py-5 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple font-bold text-lg hover:opacity-90 transition neon-border"
              >
                Book a Free Strategy Call
              </button>
              <a
                href="#services"
                className="px-10 py-5 rounded-xl border-2 border-white/20 font-bold text-lg hover:bg-white/10 transition"
              >
                See How It Works
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Or explore our{" "}
              <a href="/tools/token-calculator" className="text-accent-blue hover:underline">
                Free AI Token Calculator
              </a>
              {" "}or{" "}
              <a href="/directory" className="text-accent-blue hover:underline">
                AI Tools Directory
              </a>
            </p>
          </section>

          {/* Quick Tools Section */}
          <section className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-2 gap-6">
              <a href="/tools/token-calculator" className="group glass-card p-8 hover:border-accent-blue/50 transition">
                <div className="text-5xl mb-4">🧮</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-blue transition">Free AI Token Calculator</h3>
                <p className="text-gray-400">Calculate costs for GPT-4, Claude, Gemini. Budget planner, token counter, and ROI calculator in one tool.</p>
              </a>
              <a href="/directory" className="group glass-card p-8 hover:border-accent-purple/50 transition">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-purple transition">AI Tools Directory</h3>
                <p className="text-gray-400">Discover 1,500+ AI tools across 11 categories. Search, filter, and find the perfect AI software for your needs.</p>
              </a>
            </div>
          </section>

          {/* Problem Section */}
          <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="glass-card p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
                You're Losing Time and Money on Work That Should Be Automated
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Most businesses are stuck doing repetitive, manual tasks—customer support, data entry, follow-ups, reporting—things AI can handle instantly.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: "⏰", label: "Wasted hours every week" },
                  { icon: "💸", label: "Higher labor costs" },
                  { icon: "🐌", label: "Slower response times" },
                  { icon: "📉", label: "Missed opportunities" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <p className="text-gray-300 font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-400 mt-10">
                Meanwhile, your competitors are starting to automate.
              </p>
            </div>
          </section>

          {/* Solution Section */}
          <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                We Build <span className="gradient-text glow-text">AI Systems</span> That Actually Work in Your Business
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We don't sell generic tools. We build custom AI solutions tailored to your workflows.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                { icon: "💬", title: "Automate customer support with AI agents", desc: "24/7 intelligent responses" },
                { icon: "🎯", title: "Handle lead qualification and follow-ups", desc: "Never miss an opportunity" },
                { icon: "⚙️", title: "Streamline operations and reporting", desc: "Real-time insights, zero manual work" },
                { icon: "🔗", title: "Integrate with your existing tools", desc: "CRM, email, Slack—whatever you use" },
              ].map((item) => (
                <div key={item.title} className="glass-card p-8 hover:border-accent-blue/50 transition">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="glass-card p-10 neon-border">
              <h3 className="text-2xl font-bold mb-8 text-center gradient-text">Simple Process</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { num: "01", label: "We analyze your business" },
                  { num: "02", label: "Identify high-impact automation opportunities" },
                  { num: "03", label: "Build and deploy your AI system" },
                  { num: "04", label: "Optimize and scale" },
                ].map((step) => (
                  <div key={step.num} className="text-center">
                    <div className="text-5xl font-extrabold gradient-text mb-3">{step.num}</div>
                    <p className="text-gray-300">{step.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="max-w-6xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What We Can <span className="gradient-text glow-text">Build For You</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "AI Chatbots & Customer Support Agents",
                  desc: "24/7 intelligent responses that reduce workload and improve customer experience",
                  icon: "🤖",
                },
                {
                  title: "AI Workflow Automation",
                  desc: "Automate repetitive tasks across your business—from data entry to reporting",
                  icon: "⚡",
                },
                {
                  title: "Custom AI Tools",
                  desc: "Tailored solutions built specifically for your operations and industry",
                  icon: "🛠️",
                },
                {
                  title: "AI Agent Development",
                  desc: "Autonomous agents that perform tasks, make decisions, and execute workflows",
                  icon: "🧠",
                },
              ].map((service) => (
                <div key={service.title} className="popular-card neon-border p-8">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Results Section */}
          <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="glass-card p-10 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Real Business Impact
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Our clients typically see:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {[
                  { metric: "30–70%", label: "Reduction in manual work" },
                  { metric: "Instant", label: "Response times (vs hours)" },
                  { metric: "Higher", label: "Lead conversion rates" },
                  { metric: "Lower", label: "Operational costs" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-5xl font-extrabold gradient-text glow-text mb-2">{item.metric}</div>
                    <p className="text-gray-300">{item.label}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-400">
                This isn't theory—it's practical AI that delivers ROI in weeks, not months.
              </p>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Work <span className="gradient-text glow-text">With Us?</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🎯", label: "Focus on business outcomes, not just technology" },
                { icon: "⚡", label: "Fast deployment (weeks, not months)" },
                { icon: "🔧", label: "Custom-built solutions—not one-size-fits-all" },
                { icon: "🤝", label: "Ongoing support and optimization" },
              ].map((item) => (
                <div key={item.label} className="glass-card p-8 text-center hover:border-accent-blue/50 transition">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <p className="text-gray-300 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Social Proof */}
          <section className="max-w-6xl mx-auto px-6 py-16">
            <div className="glass-card p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built With <span className="gradient-text">Proven AI Technologies</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage the latest advancements in AI—Claude, GPT-4, custom agents—to build reliable, scalable systems tailored to modern businesses.
              </p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="max-w-4xl mx-auto px-6 py-20 text-center">
            <div className="popular-card neon-border p-12 md:p-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text glow-text">
                Ready to Automate and Scale Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Let's identify exactly where AI can save you time and increase your revenue.
              </p>
              <button
                onClick={() => setShowLeadModal(true)}
                className="px-12 py-6 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple font-bold text-xl hover:opacity-90 transition neon-border"
              >
                Book Your Free AI Strategy Call
              </button>
              <p className="text-sm text-gray-500 mt-6">
                No obligation. Just a straightforward conversation about your business.
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-white/10 text-center text-gray-500">
            <p>&copy; 2026 UnfoldAI. All rights reserved.</p>
            <div className="mt-4 flex gap-6 justify-center">
              <a href="/tools/token-calculator" className="hover:text-accent-blue transition">
                Token Calculator
              </a>
              <a href="/directory" className="hover:text-accent-blue transition">
                AI Tools Directory
              </a>
            </div>
          </footer>
        </div>
      </main>

      {/* Lead Capture Modal */}
      <LeadCaptureModal 
        isOpen={showLeadModal} 
        onClose={() => setShowLeadModal(false)} 
        source="cta_button"
      />
    </>
  );
}
