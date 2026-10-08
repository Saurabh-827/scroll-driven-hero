# Scroll-Driven Hero Section Animation

A high-performance, scroll-linked hero section built as part of the Itzfizz Web Development Internship Assignment. This project demonstrates smooth UI interactions, scroll-based motion logic, and modern React component architecture.

## 🚀 Live Preview

[_(Vercel link)_](https://scroll-driven-hero-zeta.vercel.app/)

## 🛠 Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4
- **Animation Engine:** GSAP & ScrollTrigger (`@gsap/react`)
- **Language:** TypeScript

## ✨ Key Features Implemented

1. **Initial Load State:** Clean, staggered reveal of typography and impact statistics using `gsap.timeline()`.
2. **Scroll Interpolation:** The main visual element strictly follows the user's scroll position (`scrub: 1`).
3. **Performance First:** Animations use hardware-accelerated CSS transforms avoiding expensive layout reflows.
4. **Modular Architecture:** Built using industry-standard React practices with clean component separation.

## 💻 Running Locally

```bash
git clone [https://github.com/Saurabh-827/scroll-driven-hero.git](https://github.com/Saurabh-827/scroll-driven-hero.git)
cd scroll-driven-hero
npm install
npm run dev
```
