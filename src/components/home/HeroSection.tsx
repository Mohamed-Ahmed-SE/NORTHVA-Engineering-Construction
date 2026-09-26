"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  const heroImageRef = useRef<HTMLDivElement>(null);
  const [timeCairo, setTimeCairo] = useState("20:00");
  const [timeRiyadh, setTimeRiyadh] = useState("21:00");
  const [timeDubai, setTimeDubai] = useState("22:00");

  useEffect(() => {
    // Parallax on scroll
    const handleScroll = () => {
      if (!heroImageRef.current) return;
      const scrollY = window.scrollY;
      if (scrollY <= window.innerHeight) {
        heroImageRef.current.style.transform = `translate3d(0, ${scrollY * 0.22}px, 0) scale(${1 + scrollY * 0.0002})`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Live clock calculation for regional hubs
    const updateTimes = () => {
      const now = new Date();
      const formatTime = (offsetHours: number) => {
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const target = new Date(utc + 3600000 * offsetHours);
        return target.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false });
      };
      // Cairo (UTC+2 standard / UTC+3 DST)
      setTimeCairo(formatTime(3));
      // Riyadh (UTC+3)
      setTimeRiyadh(formatTime(3));
      // Dubai (UTC+4)
      setTimeDubai(formatTime(4));
    };

    updateTimes();
    const interval = setInterval(updateTimes, 30000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const scrollToNext = () => {
    const introSection = document.getElementById("intro-section");
    if (introSection) {
      introSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[100svh] min-h-[740px] w-full overflow-hidden flex flex-col justify-between pt-28 pb-8 sm:pb-10 bg-[#0B0E0D] border-b border-[#F4F2EC]/10">
      {/* Background Architectural Monolith Photography */}
      <div
        ref={heroImageRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0 will-change-transform pointer-events-none"
      >
        <Image
          src="/images/hero-monolith.jpg"
          alt="NORTHVA monumental mega-tower under construction at twilight with illuminated cranes"
          fill
          priority
          unoptimized={true}
          sizes="100vw"
          className="object-cover object-[center_35%] brightness-[0.88] contrast-[1.06]"
        />
        {/* Balanced directional scrims - preserves photo clarity while keeping typography crystal readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D100F]/92 via-[#0D100F]/60 lg:via-[#0D100F]/45 to-transparent w-full" />
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#0D100F]/85 via-[#0D100F]/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0D100F] via-[#0D100F]/70 to-transparent" />
        <div className="absolute inset-0 architectural-grid opacity-10" />
      </div>

      {/* Blueprint Corner Registration Marks */}
      <span className="absolute top-24 left-8 text-xs font-mono text-[#F4F2EC]/20 select-none hidden lg:block">+ // 00.00</span>
      <span className="absolute top-24 right-8 text-xs font-mono text-[#F4F2EC]/20 select-none hidden lg:block">+ // 100.00</span>
      <span className="absolute bottom-16 left-8 text-xs font-mono text-[#F4F2EC]/20 select-none hidden lg:block">+ // 00.100</span>
      <span className="absolute bottom-16 right-8 text-xs font-mono text-[#F4F2EC]/20 select-none hidden lg:block">+ // 100.100</span>

      {/* Top Editorial Telemetry Bar */}
      <div className="relative z-10 max-w-[1520px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#B8BAB5]">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-[#E6532F] animate-pulse" />
          <span className="tracking-[0.2em] uppercase text-[#F4F2EC] font-medium">
            NORTHVA Engineering & Construction
          </span>
          <span className="text-[#B8BAB5]/40 hidden md:inline">|</span>
          <span className="text-[#B8BAB5]/60 hidden md:inline">EST. 2008</span>
        </div>

        {/* Live Regional Hub Clocks */}
        <div className="flex items-center gap-4 sm:gap-6 text-[11px] text-[#B8BAB5]">
          <div className="flex items-center gap-1.5">
            <span className="text-[#F4F2EC]">CAI</span>
            <span className="text-[#E6532F]">{timeCairo}</span>
          </div>
          <span className="text-[#B8BAB5]/30">·</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[#F4F2EC]">RUH</span>
            <span className="text-[#E6532F]">{timeRiyadh}</span>
          </div>
          <span className="text-[#B8BAB5]/30">·</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[#F4F2EC]">DXB</span>
            <span className="text-[#E6532F]">{timeDubai}</span>
          </div>
          <span className="hidden lg:inline text-[#B8BAB5]/30">|</span>
          <span className="hidden lg:inline text-[#B8BAB5]/60 tracking-wider">
            DATUM WGS84 // 30°01&apos;31&quot;N
          </span>
        </div>
      </div>

      {/* Main Dramatic Headline */}
      <div className="relative z-10 max-w-[1520px] w-full mx-auto px-6 sm:px-8 lg:px-12 my-auto">
        <div className="max-w-5xl">
          {/* Architectural Dossier Callout */}
          <div className="inline-flex items-center gap-3 px-3 py-1 bg-[#121614]/90 border border-[#F4F2EC]/15 mb-6">
            <span className="w-1.5 h-1.5 bg-[#E6532F]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#F4F2EC]">
              Integrated Regional Contractor · MENA
            </span>
          </div>

          <h1 className="heading-hero font-display font-extrabold uppercase text-[#F4F2EC] tracking-tight">
            <span className="block text-[#F4F2EC]">Engineering</span>
            <span className="block text-[#F4F2EC]">What Comes</span>
            <span className="block text-[#E6532F]">Next.</span>
          </h1>

          <div className="mt-8 pt-6 border-t border-[#F4F2EC]/15 flex flex-col md:flex-row md:items-end justify-between gap-8 max-w-4xl">
            <p className="text-base sm:text-lg text-[#B8BAB5] font-light max-w-xl leading-relaxed">
              Delivering complex commercial towers, major civil infrastructure, healthcare complexes, and master-planned communities across Egypt, Saudi Arabia, and the UAE with disciplined structural precision.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="btn-arch-primary group cursor-pointer"
              >
                <span>Explore Projects [92+]</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/expertise"
                className="btn-arch-secondary group cursor-pointer"
              >
                <span className="w-1.5 h-1.5 bg-[#E04E26]" />
                <span>Our Capabilities</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Telemetry Rail */}
      <div className="relative z-10 max-w-[1520px] w-full mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#F4F2EC]/10 text-xs font-mono text-[#B8BAB5]">
        <div className="flex flex-wrap items-center gap-6 sm:gap-10">
          <div className="flex items-center gap-2">
            <span className="text-[#E6532F] font-bold">18+</span>
            <span className="text-[#F4F2EC]">Years Experience</span>
          </div>
          <span className="text-[#B8BAB5]/30 hidden sm:inline">|</span>
          <div className="flex items-center gap-2">
            <span className="text-[#E6532F] font-bold">6.8M+</span>
            <span className="text-[#F4F2EC]">m² Delivered</span>
          </div>
          <span className="text-[#B8BAB5]/30 hidden sm:inline">|</span>
          <div className="flex items-center gap-2">
            <span className="text-[#E6532F] font-bold">11.2M</span>
            <span className="text-[#F4F2EC]">Safe Working Hours</span>
          </div>
        </div>

        <button
          onClick={scrollToNext}
          className="flex items-center gap-3 text-[#F4F2EC] hover:text-[#E6532F] transition-colors group cursor-pointer ml-auto"
          aria-label="Scroll down to intro section"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] font-mono">Scroll to Dossier</span>
          <div className="w-6 h-6 border border-[#F4F2EC]/20 flex items-center justify-center group-hover:border-[#E6532F] transition-colors">
            <ArrowDown className="w-3 h-3 text-[#E6532F] animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}
