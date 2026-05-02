import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "UnfoldAI — AI Systems & Automation Solutions",
  description:
    "We design and deploy custom AI tools and intelligent agents that automate workflows, cut costs, and scale your operations—fast.",
  openGraph: {
    title: "UnfoldAI — AI Systems & Automation Solutions",
    description:
      "Custom AI tools and intelligent agents that automate workflows, cut costs, and scale operations.",
    type: "website",
    url: "https://unfoldai.net",
    siteName: "UnfoldAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "UnfoldAI — AI Systems & Automation Solutions",
    description:
      "Custom AI tools and intelligent agents that automate workflows, cut costs, and scale operations.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark text-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
