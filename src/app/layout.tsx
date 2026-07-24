import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Susurrus — Speech to Structured Thought",
  description: "Dictation, Context, and AI that works in every app and tab. 100% on-device, zero cloud latency voice dictation and contextual AI rewriting engine.",
  keywords: [
    "Susurrus",
    "voice dictation",
    "whisper.cpp",
    "offline AI",
    "Gemma 2B",
    "voice productivity",
    "context commands",
    "speech to text",
  ],
  authors: [{ name: "Parth Varekar", url: "https://github.com/ParthVarekar" }],
  creator: "Parth Varekar",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Susurrus — Speech to Structured Thought",
    description: "Dictation, Context, and AI that works in every app and tab. 100% on-device, sub-200ms latency.",
    url: "https://github.com/ParthVarekar/whisper-landing-page",
    siteName: "Susurrus",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Susurrus — Speech to Structured Thought",
    description: "Dictation, Context, and AI that works in every app and tab. 100% on-device, sub-200ms latency.",
    creator: "@ParthVarekar",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#121929",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@1,6..72,400;1,6..72,600&family=Outfit:wght@300;400;460;500;540;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-[#F9F8F6] text-[#292827]">
        {children}
      </body>
    </html>
  );
}
