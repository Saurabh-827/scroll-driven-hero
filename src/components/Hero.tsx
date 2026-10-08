"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "150+", label: "Projects Delivered" },
  { value: "24/7", label: "Support Active" },
];

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReduced) {
        gsap.set(
          [headlineRef.current, ...statsRef.current, scrollIndicatorRef.current],
          { opacity: 1, y: 0 }
        );
        return;
      }

      const tl = gsap.timeline();

      tl.fromTo(
        headlineRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      );

      tl.fromTo(
        statsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
        "-=0.5"
      );

      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.2"
      );

      gsap.to(scrollIndicatorRef.current, {
        y: 8,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: "power1.inOut",
        delay: 1.5,
      });

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
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      aria-label="Hero section"
      className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      <h1
        ref={headlineRef}
        aria-label="Welcome Itzfizz"
        className="opacity-0 mb-16 leading-none"
      >
        <span className="block text-3xl md:text-5xl font-extrabold tracking-[0.35em] uppercase text-gray-400 mb-3">
          W E L C O M E
        </span>
        <span className="relative inline-block text-6xl md:text-8xl font-black tracking-[0.2em] uppercase text-gray-900">
          <span className="relative z-10 px-4">I T Z F I Z Z</span>
          <span
            aria-hidden="true"
            className="absolute inset-0 top-[15%] bottom-[15%] bg-[#fff355] -z-10 rounded-sm -rotate-1"
          />
        </span>
      </h1>

      <dl
        aria-label="Company statistics"
        className="flex flex-wrap justify-center gap-10 md:gap-20 z-20 mb-16"
      >
        {STATS.map((stat, index) => (
          <div
            key={index}
            ref={(el) => {
              statsRef.current[index] = el;
            }}
            className="opacity-0 flex flex-col items-center border-b-[3px] border-gray-900 pb-3 min-w-[100px]"
          >
            <dt className="text-5xl md:text-6xl font-black text-gray-900 leading-none">
              {stat.value}
            </dt>
            <dd className="text-xs md:text-sm text-gray-500 mt-2 tracking-widest uppercase font-bold">
              {stat.label}
            </dd>
          </div>
        ))}
      </dl>

      {/* Scroll indicator — sits just above the ground line */}
      <div
        ref={scrollIndicatorRef}
        aria-hidden="true"
        className="absolute bottom-[4.5rem] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-0 z-30"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-bold">
          Scroll
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M10 3v14M10 17l-5-5M10 17l5-5"
            stroke="#9ca3af"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Ground line */}
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-0 w-full h-[3px] bg-gray-900 z-20"
      />

      {/* Car — viewBox is 0 0 512 400 (trimmed bottom padding) so wheels sit flush on ground line */}
      <div
        ref={carRef}
        aria-hidden="true"
        className="absolute bottom-[2.6rem] left-[-220px] w-48 md:w-72 z-50 will-change-transform"
      >
        <svg
          viewBox="0 0 512 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            fill="#111827"
            d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.83 64 319.99 64h-160c-37.56 0-71.18 21.43-89.25 54.55L42.85 176H12.01C5.38 176 0 181.38 0 188v40c0 6.62 5.38 12 12.01 12h25.92l-9.11 38.65c-9.15 38.93 20.31 77.35 60.59 77.35h7.24c6.33 25.43 29.41 44 57.34 44s51.01-18.57 57.34-44h289.33c6.33 25.43 29.41 44 57.34 44s51.01-18.57 57.34-44h12.65c6.63 0 12-5.38 12-12v-156c0-6.62-5.37-12-12-12zM153.99 368c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.36 32-32 32zm313.34 0c-17.64 0-32-14.36-32-32s14.36-32 32-32 32 14.36 32 32-14.36 32-32 32zm-58.82-160H80.59l20.48-81.92C106.66 103.71 126.96 88 149.33 88h170.66c16.32 0 31.62 9.07 39.57 23.4l24.96 44.6H408.51z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
