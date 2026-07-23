# 🎙️ Susurrus — Speech to Structured Thought

> **Dictation, Context, and AI that works in every app and tab.**  
> *100% On-Device • Zero Cloud • Sub-200ms Latency • Dual Engine (`whisper.cpp` + `Gemma 2B`)*

---

## 🌟 Overview

**Susurrus** is a modern, high-performance desktop voice dictation and context command suite designed for radical productivity. Powered by a local dual-engine architecture (`whisper.cpp` for acoustic speech recognition and `llama.cpp` / Gemma 2B for LLM text normalization), Susurrus transforms raw spoken thoughts into polished, structured text directly at your cursor in any application.

This repository contains the landing page for Susurrus, built using **Next.js 15 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS**, and **GSAP**.

---

## ✨ Key Features & Highlights

- ⚡ **Real-Time Dictation Studio**: Speech-to-text engine that automatically strips verbal fillers ("um", "uh"), interprets spoken punctuation, and formats bulleted lists in real time.
- 🎯 **Context Commands (`Ctrl+Shift+T`)**: Highlight text in VS Code, Slack, Notion, or Outlook, speak an instruction (e.g., *"Make this executive and concise"* or *"Translate to Spanish"*), and watch text rewrite in place.
- 🔒 **100% On-Device & Private**: Zero cloud telemetry, zero clipboard pollution. Powered entirely by local CUDA, Metal, and Vulkan GPU acceleration.
- 🎨 **Superhuman-Inspired Visual Layering**:
  - **Cascading 3D Floating Hero Deck**: Multi-layered workspace UI mockups underlapping and overlapping an editorial portrait.
  - **Sticky Suite Tab Selector**: Pinned tab bar (`Dictation`, `Context Commands`, `Dual Engine`) with solid `#EFECE6` Warm Parchment background and flat top-edge masking (`z-40`) so feature cards slide cleanly underneath.
  - **Dynamic Navbar Transition**: Transparent header on dark hero gradient smoothly animating to a Warm Cream (`#F3F0EB`) pill on scroll with high-contrast text state management.
- ⏱️ **ROI & Time Savings Calculator**: Interactive tool estimating annual hours saved by dictating at 160 WPM vs typing at 40 WPM.

---

## 🛠️ Technology Stack

| Component | Technology |
| :--- | :--- |
| **Framework** | Next.js 15 (App Router, Turbopack) |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS v4 |
| **Animations** | GSAP (ScrollTrigger & Timeline animations) |
| **Icons & Vectors** | Inline SVG Stroke System (Zero Emojis) |
| **Deployment** | Vercel / Static Next Export |

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js 18.x** or higher installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ParthVarekar/whisper-landing-page.git
   cd whisper-landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📁 Repository Architecture

```
whisper-landing-page/
├── public/
│   └── assets/             # Editorial portrait photography & card assets
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root metadata & Susurrus branding font imports
│   │   ├── page.tsx        # Main landing page composition
│   │   └── globals.css     # Design tokens & Tailwind imports
│   └── components/
│       ├── Navbar.tsx            # Floating pill navbar with scroll state
│       ├── HeroSection.tsx       # Twilight gradient hero & 3D overlapping card deck
│       ├── BentoGrid.tsx         # Sticky Suite Tab Bar & under-sliding feature cards
│       ├── CalculatorSection.tsx # Interactive Time & Cost Savings ROI calculator
│       ├── ManifestoSection.tsx  # Vision & philosophy section
│       ├── WaitlistSection.tsx   # Early Access waitlist capture form
│       └── Footer.tsx            # Footer with watermark & copyright
├── README.md
├── package.json
└── tsconfig.json
```

---

## 🔒 Privacy & Architecture Vision

Susurrus operates with a zero-trust local philosophy:

1. **Local Audio VAD**: Audio chunks are processed locally with Voice Activity Detection.
2. **Local Acoustic Decoding**: Audio is transcribed by `whisper.cpp` via native C++ bindings.
3. **Local LLM Normalization**: Text is normalized by `llama.cpp` executing Gemma 2B locally.
4. **Direct OS Injection**: Clean text is typed into the focused window using native accessibility APIs.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Crafted with ❤️ for ultimate flow & speed.
</p>
