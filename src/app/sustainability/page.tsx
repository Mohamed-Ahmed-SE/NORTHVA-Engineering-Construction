import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Leaf, Shield, Recycle, SunMedium, Droplets, Wind } from "lucide-react";
import { SUSTAINABILITY_INFO } from "@/data/sustainability";
import { Counter } from "@/components/ui/Counter";

export const metadata: Metadata = {
  title: "Sustainability & ESG | NORTHVA Engineering & Construction",
  description:
    "Explore NORTHVA's commitment to building responsibly, targeting a 35% operational carbon emissions reduction by 2030 through circular construction and sustainable engineering.",
};

export default function SustainabilityPage() {
  const iconList = [
    <SunMedium key="sun" className="w-5 h-5 text-[#E6532F]" />,
    <Recycle key="rec" className="w-5 h-5 text-[#E6532F]" />,
    <Shield key="shi" className="w-5 h-5 text-[#E6532F]" />,
    <Droplets key="drop" className="w-5 h-5 text-[#E6532F]" />,
    <Leaf key="leaf" className="w-5 h-5 text-[#E6532F]" />,
    <Wind key="wind" className="w-5 h-5 text-[#E6532F]" />,
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-32 bg-[#101312] text-[#F4F2EC]">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Hero */}
        <div className="pb-16 border-b border-[#F4F2EC]/10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#E6532F]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F]">
              ESG & Decarbonization Framework
            </span>
          </div>

          <h1 className="heading-display font-display font-extrabold uppercase text-[#F4F2EC] tracking-tight">
            Building Responsibly.
          </h1>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-[#F4F2EC]/10">
            <div className="lg:col-span-8">
              <p className="text-xl sm:text-2xl text-[#F4F2EC] font-light leading-relaxed">
                {SUSTAINABILITY_INFO.statement}
              </p>
            </div>
            <div className="lg:col-span-4">
              <p className="text-sm text-[#B8BAB5] leading-relaxed">
                By integrating life-cycle carbon calculations, circular recycling, and low-embodied carbon concrete formulas into standard site operations, we build enduring structures that respect the natural environment.
              </p>
            </div>
          </div>
        </div>

        {/* 2030 Decarbonization Target Banner */}
        <div className="my-16 bg-[#141816] border border-[#F4F2EC]/15 p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#E6532F] block mb-2">
                2030 Climate Commitment
              </span>
              <div className="heading-stat font-display font-extrabold text-[#E6532F]">
                <Counter value={35} suffix="%" />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-3">
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#F4F2EC]">
                {SUSTAINABILITY_INFO.targetHighlight.label}
              </h2>
              <p className="text-sm text-[#B8BAB5] font-light">
                {SUSTAINABILITY_INFO.targetHighlight.baseline} Verified through third-party life-cycle environmental assessments (LCA) and ISO 14001 environmental management audits across all ongoing sites in Egypt, Saudi Arabia, and UAE.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Core Pillars Breakdown */}
        <div className="py-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-6 h-[1px] bg-[#E6532F]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F]">
              Action Pillars
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F4F2EC]/10 border border-[#F4F2EC]/10">
            {SUSTAINABILITY_INFO.focusAreas.map((area, idx) => (
              <div
                key={area.number}
                className="bg-[#101312] p-8 sm:p-10 flex flex-col justify-between hover:bg-[#141816] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-[#E6532F] font-bold">
                      PILLAR {area.number}
                    </span>
                    <div className="p-2 border border-[#F4F2EC]/10 bg-[#141816]">
                      {iconList[idx]}
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold uppercase text-[#F4F2EC] mb-3">
                    {area.title}
                  </h3>

                  <p className="text-sm text-[#B8BAB5] leading-relaxed font-light">
                    {area.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#F4F2EC]/10 font-mono text-xs flex items-center justify-between">
                  <span className="text-[#B8BAB5]/60 uppercase text-[10px]">Benchmark</span>
                  <span className="text-[#E6532F] font-semibold">{area.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Green Certifications Grid */}
        <div className="mt-20 p-10 bg-[#121614] border border-[#F4F2EC]/15">
          <h3 className="font-display text-2xl font-bold uppercase text-[#F4F2EC] mb-4">
            Green Building Certification Delivery
          </h3>
          <p className="text-sm text-[#B8BAB5] max-w-3xl leading-relaxed mb-8">
            NORTHVA provides turnkey certification management, ensuring projects meet and exceed regional and international sustainability standards.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs">
            <div className="p-5 border border-[#F4F2EC]/10 bg-[#101312]">
              <span className="text-[#E6532F] font-bold block mb-1">LEED AP TEAM</span>
              <p className="text-[#B8BAB5]">
                Platinum and Gold credentialed engineers steering credit verification from concept to handover.
              </p>
            </div>
            <div className="p-5 border border-[#F4F2EC]/10 bg-[#101312]">
              <span className="text-[#E6532F] font-bold block mb-1">MOSTADAM KSA</span>
              <p className="text-[#B8BAB5]">
                Full alignment with Saudi Vision 2030 green building guidelines and local materials mandates.
              </p>
            </div>
            <div className="p-5 border border-[#F4F2EC]/10 bg-[#101312]">
              <span className="text-[#E6532F] font-bold block mb-1">ESTIDAMA PEARL</span>
              <p className="text-[#B8BAB5]">
                Strict adherence to regional thermal insulation, water conservation, and envelope air-tightness benchmarks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
