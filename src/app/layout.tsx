import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Susurrus — Speech to Structured Thought",
  description: "The most productive voice experience in the world. 100% offline, zero cloud latency voice dictation and contextual AI rewriting engine.",
  keywords: ["Susurrus", "voice dictation", "whisper.cpp", "offline AI", "Gemma 2B", "voice productivity"],
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
