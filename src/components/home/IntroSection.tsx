"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function IntroSection() {
  return (
    <section
      id="intro-section"
      className="relative bg-[#101312] text-[#F4F2EC] py-24 sm:py-32 lg:py-40 border-b border-[#F4F2EC]/10 overflow-hidden"
    >
      {/* Subtle blueprint grid accents */}
      <div className="absolute right-0 top-0 w-1/3 h-full architectural-grid opacity-20 pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Label */}
        <div className="flex items-center gap-4 mb-8 sm:mb-12">
          <span className="w-8 h-[1px] bg-[#E6532F]" />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F] font-medium">
            Who We Are
          </span>
          <span className="text-xs font-mono text-[#B8BAB5]/40">/ Integrated EPC Delivery</span>
        </div>

        {/* Large Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <h2 className="heading-display font-display font-bold uppercase text-[#F4F2EC] tracking-tight">
              We build the structures, infrastructure and environments that move cities forward.
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between pt-2 space-y-6">
            <p className="text-lg sm:text-xl text-[#B8BAB5] leading-relaxed font-light">
              NORTHVA is an integrated engineering and construction company delivering technically demanding projects across Egypt and the Gulf.
            </p>
            <p className="text-sm text-[#B8BAB5]/80 leading-relaxed font-normal">
              From initial planning and 4D BIM coordination to heavy structural execution and MEP commissioning, we unify complex disciplines under strict quality governance and zero-compromise safety standards.
            </p>

            <div className="pt-4 border-t border-[#F4F2EC]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
              <div className="space-y-1">
                <span className="text-[#B8BAB5]/60 block uppercase text-[10px]">Headquarters</span>
                <span className="text-[#F4F2EC] font-medium">New Cairo, Egypt</span>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#E6532F] hover:text-white transition-colors group font-mono uppercase tracking-wider text-xs"
              >
                <span>Read Full Company Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
