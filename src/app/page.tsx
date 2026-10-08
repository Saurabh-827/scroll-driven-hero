import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen w-full font-sans">
      <Hero />

      <section className="w-full h-[150vh] bg-[#fff355] border-t-[3px] border-gray-900">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center px-6">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-600 font-bold mb-4">Powered by GSAP ScrollTrigger</p>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tight mb-8 leading-none">
            Scroll-Driven<br />Motion
          </h2>
          <div className="w-16 h-[3px] bg-gray-900 mb-8" />
          <p className="text-gray-700 max-w-lg text-center text-base md:text-lg leading-relaxed font-medium">
            The vehicle above scrubs perfectly in sync with your scroll position using hardware-accelerated CSS transforms — zero layout reflows, silky smooth.
          </p>
        </div>
      </section>
    </main>
  );
}
