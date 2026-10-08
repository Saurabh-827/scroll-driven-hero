import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen w-full font-sans">
      <Hero />

      <section className="w-full h-[150vh] bg-[#fff355] flex flex-col items-center pt-32 px-6 border-t-[3px] border-gray-900">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-wide">
          Keep Scrolling
        </h2>
        <p className="text-gray-800 font-medium max-w-2xl text-center text-lg leading-relaxed">
          The vehicle animation above is powered by{" "}
          <strong className="font-black">GSAP ScrollTrigger</strong>. As you
          scroll down, the car scrubs perfectly in sync with your scroll
          position, using hardware-accelerated CSS transforms.
        </p>
      </section>
    </main>
  );
}
