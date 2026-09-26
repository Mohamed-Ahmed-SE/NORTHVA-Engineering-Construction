"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/data/services";

export function ExpertiseSection() {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <section className="relative bg-[#0C0F0E] text-[#F4F2EC] py-28 sm:py-36 border-b border-[#F4F2EC]/10">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-[#F4F2EC]/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#E6532F]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F]">
                Core Competencies
              </span>
            </div>
            <h2 className="heading-section font-display font-extrabold uppercase text-[#F4F2EC] tracking-tight">
              Our Expertise
            </h2>
          </div>
          <p className="font-mono text-xs text-[#B8BAB5] max-w-md">
            Integrated engineering and execution capabilities governed by in-house structural, civil, and systems specialists.
          </p>
        </div>

        {/* Interactive Split-Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
          {/* Left Column: Interactive Oversized Numbered Service List */}
          <div className="lg:col-span-7 divide-y divide-[#F4F2EC]/10">
            {SERVICES.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`py-8 cursor-pointer transition-all duration-300 group ${
                    isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-baseline gap-6 sm:gap-10">
                      <span
                        className={`font-mono text-sm sm:text-base font-bold transition-colors ${
                          isActive ? "text-[#E6532F]" : "text-[#B8BAB5] group-hover:text-[#F4F2EC]"
                        }`}
                      >
                        {service.number}
                      </span>
                      <div>
                        <h3
                          className={`font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight transition-colors ${
                            isActive ? "text-[#E6532F]" : "text-[#F4F2EC] group-hover:text-white"
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p className="mt-2 text-sm text-[#B8BAB5] max-w-xl line-clamp-2 font-normal leading-relaxed">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 pt-2">
                      <div
                        className={`w-9 h-9 border flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-[#E6532F] border-[#E6532F] text-white"
                            : "border-[#F4F2EC]/20 text-[#B8BAB5] group-hover:border-[#F4F2EC] group-hover:text-[#F4F2EC]"
                        }`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Preview Image (visible only on mobile when expanded) */}
                  <div className="lg:hidden mt-6 overflow-hidden aspect-[16/10] relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="100vw"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Hover Preview Box (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <div className="border border-[#F4F2EC]/15 bg-[#141816] p-6 relative">
              {/* Dynamic Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#101312] mb-6">
                <Image
                  key={activeService.id}
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  unoptimized={true}
                  sizes="40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 bg-[#0B0E0D]/90 backdrop-blur-sm text-[#E6532F] border border-[#F4F2EC]/15">
                  DISCIPLINE {activeService.number}
                </div>
              </div>

              {/* Service Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#F4F2EC]/10">
                  <span className="font-mono text-xs text-[#B8BAB5]">Key Deliverable</span>
                  <span className="font-mono text-xs font-bold text-[#E6532F]">
                    {activeService.keyMetric} {activeService.metricLabel}
                  </span>
                </div>

                <p className="text-xs text-[#B8BAB5] leading-relaxed">
                  {activeService.fullDesc}
                </p>

                <div className="pt-2">
                  <span className="font-mono text-[10px] uppercase text-[#E6532F] tracking-widest block mb-2">
                    Scope & Sub-Disciplines
                  </span>
                  <ul className="grid grid-cols-1 gap-1.5 text-xs font-mono text-[#F4F2EC]">
                    {activeService.capabilities.slice(0, 4).map((cap, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-[#E6532F]" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#F4F2EC]/10">
                  <Link
                    href={`/expertise#${activeService.id}`}
                    className="w-full flex items-center justify-between px-4 py-3 bg-[#101312] hover:bg-[#E6532F] border border-[#F4F2EC]/15 hover:border-[#E6532F] text-xs font-mono uppercase tracking-wider text-[#F4F2EC] hover:text-white transition-all group"
                  >
                    <span>View Technical Specifications</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
