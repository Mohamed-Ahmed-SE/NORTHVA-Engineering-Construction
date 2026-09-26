"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroImageRef.current) return;
      const scrollY = window.scrollY;
      if (scrollY <= window.innerHeight) {
        // Restrained parallax: subtle slow translation & scale
        heroImageRef.current.style.transform = `translate3d(0, ${scrollY * 0.28}px, 0) scale(${1 + scrollY * 0.0003})`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNext = () => {
    const introSection = document.getElementById("intro-section");
    if (introSection) {
      introSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[100svh] min-h-[700px] w-full overflow-hidden flex flex-col justify-between pt-28 pb-10 sm:pb-12 bg-[#101312]">
      {/* Background Architectural Photography with Parallax */}
      <div
        ref={heroImageRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0 will-change-transform pointer-events-none"
      >
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2600&q=90"
          alt="Monumental modern architecture and structural engineering under construction"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.42] contrast-[1.12]"
        />
        {/* Subtle architectural gradient scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101312] via-[#101312]/40 to-[#101312]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101312]/80 via-transparent to-[#101312]/50" />
        {/* Architectural subtle grid overlay */}
        <div className="absolute inset-0 architectural-grid opacity-30" />
      </div>

      {/* Top Editorial Details */}
      <div className="relative z-10 max-w-[1520px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#B8BAB5]">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 bg-[#E6532F] animate-pulse" />
          <span className="tracking-[0.2em] uppercase text-[#F4F2EC]">
            NORTHVA Engineering & Construction
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="tracking-[0.16em] uppercase">
            Egypt · Saudi Arabia · UAE
          </span>
          <span className="hidden md:inline text-[#B8BAB5]/50">|</span>
          <span className="hidden md:inline tracking-wider">
            30.0131° N, 31.4913° E
          </span>
        </div>
      </div>

      {/* Main Dramatic Headline */}
      <div className="relative z-10 max-w-[1520px] w-full mx-auto px-6 sm:px-8 lg:px-12 my-auto">
        <div className="max-w-6xl">
          <h1 className="heading-hero font-display font-extrabold uppercase text-[#F4F2EC] tracking-tight">
            <span className="block overflow-hidden">
              <span>Engineering</span>
            </span>
            <span className="block overflow-hidden text-[#F4F2EC]">
              <span>What Comes</span>
            </span>
            <span className="block overflow-hidden text-[#E6532F]">
              <span>Next.</span>
            </span>
          </h1>

          <div className="mt-8 sm:mt-10 pt-6 border-t border-[#F4F2EC]/20 flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-4xl">
            <p className="text-base sm:text-lg lg:text-xl text-[#B8BAB5] font-light max-w-xl leading-relaxed">
              Delivering landmark commercial towers, heavy infrastructure, and complex clinical facilities across Egypt and the Gulf with technical precision.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 px-7 py-4 bg-[#E6532F] text-white font-mono text-xs uppercase tracking-[0.16em] hover:bg-[#d04623] transition-all duration-300 group shadow-lg shadow-[#E6532F]/20"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/expertise"
                className="inline-flex items-center gap-3 px-6 py-4 bg-[#161B19]/80 backdrop-blur-sm border border-[#F4F2EC]/20 text-[#F4F2EC] font-mono text-xs uppercase tracking-[0.16em] hover:border-[#E6532F] hover:text-white transition-all duration-300"
              >
                <span>Our Capabilities</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar & Scroll Indicator */}
      <div className="relative z-10 max-w-[1520px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between pt-4 border-t border-[#F4F2EC]/10 text-xs font-mono text-[#B8BAB5]">
        <div className="hidden sm:flex items-center gap-8">
          <div>
            <span className="text-[#E6532F] mr-2">01</span>
            <span className="text-[#F4F2EC]">Commercial</span>
          </div>
          <div>
            <span className="text-[#E6532F] mr-2">02</span>
            <span className="text-[#F4F2EC]">Infrastructure</span>
          </div>
          <div>
            <span className="text-[#E6532F] mr-2">03</span>
            <span className="text-[#F4F2EC]">Hospitality</span>
          </div>
          <div>
            <span className="text-[#E6532F] mr-2">04</span>
            <span className="text-[#F4F2EC]">Industrial</span>
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="flex items-center gap-3 text-[#F4F2EC] hover:text-[#E6532F] transition-colors group cursor-pointer ml-auto"
          aria-label="Scroll down to intro section"
        >
          <span className="text-xs uppercase tracking-[0.2em] font-mono">Scroll to explore</span>
          <div className="w-7 h-7 rounded-none border border-[#F4F2EC]/20 flex items-center justify-center group-hover:border-[#E6532F] transition-colors">
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#E6532F]" />
          </div>
        </button>
      </div>
    </section>
  );
}
