"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function StatementSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imageRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const offset = (rect.top / windowHeight) * 50;
        imageRef.current.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] py-32 sm:py-44 overflow-hidden flex items-center justify-center bg-[#101312] border-b border-[#F4F2EC]/10"
    >
      {/* Background Architectural Construction Photography with Parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 w-full h-[125%] -top-[12%] pointer-events-none will-change-transform z-0"
      >
        <Image
          src="/images/statement-monolith.jpg"
          alt="Architectural structure under construction"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.25] contrast-[1.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#101312] via-transparent to-[#101312]" />
        <div className="absolute inset-0 architectural-grid opacity-25" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-[#F4F2EC]/15 bg-[#101312]/80 backdrop-blur-md mb-8">
            <span className="w-1.5 h-1.5 bg-[#E6532F]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#F4F2EC]">
              Unbroken Engineering Continuity
            </span>
          </div>

          <h2 className="heading-display font-display font-extrabold uppercase text-[#F4F2EC] tracking-tight leading-[0.96]">
            From the first line drawn <br />
            <span className="text-[#E6532F]">to the final structure built.</span>
          </h2>

          <p className="mt-8 text-base sm:text-xl text-[#B8BAB5] max-w-2xl mx-auto font-light leading-relaxed">
            We bridge the gap between speculative design and real-world construction feasibility through disciplined structural engineering and uncompromising site execution.
          </p>

          <div className="mt-10 flex items-center justify-center gap-8 text-xs font-mono text-[#B8BAB5]">
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-[#E6532F]" /> Pre-Construction
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-[#E6532F]" /> 4D Simulation
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 bg-[#E6532F]" /> Commissioning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
