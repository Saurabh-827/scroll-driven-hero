import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen w-full font-sans">
      {/* Hero Component */}
      <Hero />

      {/* 2. Extra Space for Scroll */}
      <section className="w-full h-[150vh] bg-slate-800 flex flex-col items-center pt-32 px-6 border-t border-slate-700/50">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-200 mb-6 tracking-wide">
          Keep Scrolling
        </h2>
        <p className="text-gray-400 max-w-2xl text-center text-lg leading-relaxed">
          The vehicle animation above is powered by{" "}
          <strong className="text-blue-400">GSAP ScrollTrigger</strong>. As you
          scroll down, the car scrubs perfectly in sync with your scroll
          position, using hardware-accelerated CSS transforms.
        </p>
      </section>
    </main>
  );
}
