import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative bg-[#0a0d14] h-[400px] flex items-center justify-center overflow-hidden">
      <Image
        src="/public/images/hero-background.png"
        alt="Abstract background with glowing orb"
        fill
        priority
        className="object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] to-transparent opacity-70"></div>
      <h1 className="relative z-10 text-[#ffffff] text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        About Get Jobs
      </h1>
    </section>
  );
}
