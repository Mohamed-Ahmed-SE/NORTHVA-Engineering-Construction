"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SUSTAINABILITY_INFO } from "@/data/sustainability";
import { Counter } from "@/components/ui/Counter";

export function SustainabilitySection() {
  return (
    <section className="relative bg-[#101312] text-[#F4F2EC] py-28 sm:py-36 border-b border-[#F4F2EC]/10">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#F4F2EC]/10 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#E6532F]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F]">
                Environmental Stewardship
              </span>
            </div>
            <h2 className="heading-display font-display font-extrabold uppercase text-[#F4F2EC] tracking-tight">
              {SUSTAINABILITY_INFO.heading}
            </h2>
            <p className="mt-6 text-xl sm:text-2xl text-[#B8BAB5] font-light leading-relaxed max-w-3xl">
              {SUSTAINABILITY_INFO.statement}
            </p>
          </div>

          {/* Highlight Target Card: 35% */}
          <div className="lg:col-span-4 bg-[#161B19] border border-[#F4F2EC]/15 p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#E6532F]/10 blur-2xl pointer-events-none" />

            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#E6532F] block mb-2">
                2030 Decarbonization Roadmap
              </span>
              <div className="heading-stat font-display font-extrabold text-[#E6532F]">
                <Counter value={35} suffix="%" />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#F4F2EC]/10">
              <p className="font-sans text-xs text-[#F4F2EC] font-medium leading-relaxed">
                {SUSTAINABILITY_INFO.targetHighlight.label}
              </p>
              <p className="mt-1 font-mono text-[10px] text-[#B8BAB5]/60">
                {SUSTAINABILITY_INFO.targetHighlight.baseline}
              </p>
            </div>
          </div>
        </div>

        {/* Environmental Architectural Imagery + 6 Focus Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-16 items-start">
          {/* Architectural Image */}
          <div className="lg:col-span-5 relative aspect-[4/5] overflow-hidden bg-[#161B19] border border-[#F4F2EC]/10">
            <Image
              src={SUSTAINABILITY_INFO.image}
              alt="Sustainable architectural facade engineering and biophilic shading"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover brightness-90 contrast-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101312] via-transparent to-transparent opacity-60" />

            <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#101312]/90 backdrop-blur-md border border-[#F4F2EC]/15">
              <span className="font-mono text-[10px] uppercase text-[#E6532F] tracking-widest block mb-1">
                Material & Energy Benchmark
              </span>
              <p className="font-mono text-xs text-[#F4F2EC]">
                LEED Gold & Mostadam compliant engineering delivered across 840,000+ m² of built environment.
              </p>
            </div>
          </div>

          {/* 6 Focus Areas Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#F4F2EC]/10 border border-[#F4F2EC]/10">
            {SUSTAINABILITY_INFO.focusAreas.map((area) => (
              <div
                key={area.number}
                className="bg-[#101312] p-8 flex flex-col justify-between hover:bg-[#141816] transition-colors group"
              >
                <div>
                  <span className="font-mono text-xs text-[#E6532F] font-bold block mb-4">
                    {area.number}
                  </span>
                  <h3 className="font-display text-lg font-bold uppercase text-[#F4F2EC] group-hover:text-[#E6532F] transition-colors">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#B8BAB5] leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#F4F2EC]/10 font-mono text-[11px] text-[#F4F2EC]">
                  <span className="text-[#B8BAB5]/60 text-[10px] block uppercase">Impact Target</span>
                  <span className="text-[#E6532F] font-semibold">{area.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Link */}
        <div className="mt-12 text-right">
          <Link
            href="/sustainability"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[#E6532F] hover:text-white transition-colors"
          >
            <span>Explore Complete ESG & Decarbonization Framework</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
