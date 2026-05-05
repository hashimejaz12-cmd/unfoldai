import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://aicalc.tools'),
  title: {
    default: "AICalc.tools — Free AI Tools, Token Calculator & Directory",
    template: "%s | AICalc.tools"
  },
  description:
    "Free AI tools including a token calculator for GPT-4, Claude, and Gemini, plus a directory of 1,500+ AI tools. Calculate costs, compare pricing, and discover AI software.",
  keywords: [
    'ai tools',
    'ai token calculator',
    'gpt-4 calculator',
    'ai directory',
    'openai pricing',
    'claude pricing',
    'ai cost calculator',
    'free ai tools',
    'ai software directory'
  ],
  authors: [{ name: 'AICalc' }],
  creator: 'AICalc',
  publisher: 'AICalc',
  openGraph: {
    title: "AICalc.tools — Free AI Tools & Directory",
    description:
      "Free AI token calculator and directory of 1,500+ AI tools. Calculate costs for GPT-4, Claude, and Gemini.",
    type: "website",
    url: "https://aicalc.tools",
    siteName: "AICalc.tools",
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    title: "AICalc.tools — Free AI Tools & Directory",
    description:
      "Free AI token calculator and directory of 1,500+ AI tools.",
  },
  alternates: {
    canonical: 'https://aicalc.tools'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'AICalc.tools',
              url: 'https://aicalc.tools',
              description: 'Free AI tools including token calculator and directory of 1,500+ AI tools',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://aicalc.tools/directory?search={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
      </head>
      <body className="bg-dark text-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
