import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unfold AI — Your Own Personal AI Assistant. Set Up in 24 Hours.",
  description:
    "A private AI assistant that knows your business, connects to your WhatsApp & email, and works while you sleep. Set up in 24 hours.",
  openGraph: {
    title: "Unfold AI — Your Own Personal AI Assistant",
    description:
      "A private AI assistant that connects to your WhatsApp & email. Set up in 24 hours.",
    type: "website",
    url: "https://unfoldai.net",
    siteName: "Unfold AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unfold AI — Your Own Personal AI Assistant",
    description:
      "A private AI assistant that connects to your WhatsApp & email. Set up in 24 hours.",
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
      <body className="bg-dark text-white antialiased">{children}</body>
    </html>
  );
}
