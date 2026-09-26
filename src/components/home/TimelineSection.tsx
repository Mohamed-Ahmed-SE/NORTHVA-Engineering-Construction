"use client";

import { TIMELINE_MILESTONES } from "@/data/company";

export function TimelineSection() {
  return (
    <section className="relative bg-[#101312] text-[#F4F2EC] py-28 sm:py-36 border-b border-[#F4F2EC]/10">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-[#F4F2EC]/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#E6532F]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F]">
                Institutional Evolution
              </span>
            </div>
            <h2 className="heading-section font-display font-extrabold uppercase text-[#F4F2EC] tracking-tight">
              Trajectory & Milestones
            </h2>
          </div>
          <p className="font-mono text-xs text-[#B8BAB5] max-w-sm">
            18 continuous years of disciplined regional growth from Cairo to Riyadh and Dubai.
          </p>
        </div>

        {/* Timeline Grid Layout */}
        <div className="pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F4F2EC]/10 border border-[#F4F2EC]/10">
          {TIMELINE_MILESTONES.map((item, index) => (
            <div
              key={item.year}
              className="bg-[#101312] p-8 sm:p-10 flex flex-col justify-between group hover:bg-[#151917] transition-colors relative"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs mb-6">
                  <span className="text-[#E6532F] font-bold text-2xl tracking-tighter">
                    {item.year}
                  </span>
                  <span className="text-[#B8BAB5]/40 text-[10px]">
                    PHASE 0{index + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold uppercase text-[#F4F2EC] group-hover:text-[#E6532F] transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-[#B8BAB5] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#F4F2EC]/10 flex items-center justify-between text-[11px] font-mono text-[#B8BAB5]/60">
                <span>VERIFIED</span>
                <span className="w-1.5 h-1.5 bg-[#E6532F]/50 group-hover:bg-[#E6532F] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
