"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const carRef = useRef<HTMLDivElement>(null);

  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // 1. Load Animation
      tl.fromTo(
        headlineRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
      );

      // 2. Stats Animation
      tl.fromTo(
        statsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
        "-=0.5",
      );

      // 3. Scroll Animation
      gsap.to(carRef.current, {
        x: "120vw",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1200",
          scrub: 1,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-slate-900"
    >
      {/* Main Headline */}
      <h1
        ref={headlineRef}
        className="text-4xl md:text-6xl font-extrabold tracking-[0.4em] md:tracking-[0.6em] uppercase mb-16 opacity-0"
      >
        Welcome <span className="text-blue-500">Itzfizz</span>
      </h1>

      {/* Metrics / Statistics */}
      <div className="flex flex-wrap justify-center gap-12 md:gap-24 z-20">
        {[
          {
            value: "98%",
            label: "Client Satisfaction",
            color: "text-blue-500",
          },
          {
            value: "150+",
            label: "Projects Delivered",
            color: "text-purple-500",
          },
          { value: "24/7", label: "Support Active", color: "text-pink-500" },
        ].map((stat, index) => (
          <div
            key={index}
            ref={(el) => {
              statsRef.current[index] = el;
            }}
            className="opacity-0"
          >
            <h2 className={`text-4xl md:text-5xl font-extrabold ${stat.color}`}>
              {stat.value}
            </h2>
            <p className="text-xs md:text-sm text-gray-400 mt-3 tracking-widest uppercase font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Scroll Object (Car SVG) */}
      <div
        ref={carRef}
        className="absolute bottom-16 left-[-300px] w-48 md:w-64 z-10 will-change-transform"
      >
        <svg
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#3b82f6"
            d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.83 64 319.99 64h-160c-37.56 0-71.18 21.43-89.25 54.55L42.85 176H12.01C5.38 176 0 181.38 0 188v40c0 6.62 5.38 12 12.01 12h25.92l-9.11 38.65c-9.15 38.93 20.31 77.35 60.59 77.35h7.24c6.33 25.43 29.41 44 57.34 44s51.01-18.57 57.34-44h289.33c6.33 25.43 29.41 44 57.34 44s51.01-18.57 57.34-44h12.65c6.63 0 12-5.38 12-12v-156c0-6.62-5.37-12-12-12zM153.99 368c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.36 32-32 32zm313.34 0c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.36 32-32 32zm-58.82-160H80.59l20.48-81.92C106.66 103.71 126.96 88 149.33 88h170.66c16.32 0 31.62 9.07 39.57 23.4l24.96 44.6H408.51z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
