# Scroll-Driven Hero Section Animation

A high-performance, scroll-linked hero section built as part of the Itzfizz Web Development Internship Assignment. This project demonstrates smooth UI interactions, scroll-based motion logic, and modern React component architecture.

## 🚀 Live Preview

[scroll-driven-hero-zeta.vercel.app](https://scroll-driven-hero-zeta.vercel.app/)

https://github.com/user-attachments/assets/5075ba1c-b174-4924-a6a1-b250cabdda0c

## 🛠 Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4
- **Animation Engine:** GSAP & ScrollTrigger (`@gsap/react`)
- **Language:** TypeScript

## ✨ Key Features

1. **Initial Load Animation:** Staggered reveal of typography and impact statistics using `gsap.timeline()`.
2. **Scroll Interpolation:** The main visual element strictly follows the user's scroll position (`scrub: 1`).
3. **Performance First:** Animations use hardware-accelerated CSS transforms, avoiding layout reflows.
4. **Accessibility:** WCAG 2.1 AA compliant — semantic HTML, ARIA labels, `prefers-reduced-motion` support, and screen reader friendly.
5. **Modular Architecture:** Clean component separation following industry-standard React practices.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    └── Hero.tsx
```

## 💻 Running Locally

```bash
git clone https://github.com/Saurabh-827/scroll-driven-hero.git
cd scroll-driven-hero
npm install
npm run dev
```
