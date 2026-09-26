"use client";

import { KEY_STATISTICS } from "@/data/company";
import { Counter } from "@/components/ui/Counter";

export function StatisticsSection() {
  return (
    <section className="relative bg-[#0C0F0E] text-[#F4F2EC] py-24 sm:py-32 border-b border-[#F4F2EC]/10">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header with Architectural Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#F4F2EC]/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F] block mb-2">
              Performance In Numbers
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-[#F4F2EC]">
              Disciplined Scale. Verifiable Outcomes.
            </h2>
          </div>
          <p className="font-mono text-xs text-[#B8BAB5] max-w-sm">
            Proven track record delivering mega-scale engineering across Egypt, Saudi Arabia, and the United Arab Emirates.
          </p>
        </div>

        {/* Architectural Grid Statistics Layout - NOT rounded cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#F4F2EC]/10 border-b border-[#F4F2EC]/10">
          {KEY_STATISTICS.slice(0, 4).map((stat, idx) => (
            <div
              key={stat.id}
              className={`py-10 sm:py-14 ${
                idx === 0 ? "sm:pr-6 lg:pr-8" : "sm:px-6 lg:px-8"
              } flex flex-col justify-between group hover:bg-[#101312]/60 transition-colors duration-300 relative`}
            >
              {/* Subtle architectural corner crosshair */}
              <span className="absolute top-4 right-4 text-[10px] font-mono text-[#B8BAB5]/40 group-hover:text-[#E6532F] transition-colors">
                [0{idx + 1}]
              </span>

              {/* Massive Number */}
              <div className="heading-stat font-display font-extrabold text-[#F4F2EC] group-hover:text-[#E6532F] transition-colors tracking-tight">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.id === "delivered_area" ? 1 : 0}
                />
              </div>

              {/* Label & Context */}
              <div className="mt-8 pt-4 border-t border-[#F4F2EC]/10">
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-[#F4F2EC]">
                  {stat.label}
                </h3>
                {stat.sublabel && (
                  <p className="mt-2 text-xs font-mono text-[#B8BAB5] leading-relaxed">
                    {stat.sublabel}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Sub-Stats Architectural Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#F4F2EC]/10 pt-8 text-xs font-mono text-[#B8BAB5]">
          <div className="py-4 md:pr-8 flex items-center justify-between">
            <span className="uppercase tracking-wider">Zero-Harm Occupational Standard:</span>
            <span className="text-[#F4F2EC] font-bold text-sm">
              <Counter value={11.2} suffix="M" decimals={1} /> Safe Working Hours
            </span>
          </div>
          <div className="py-4 md:pl-8 flex items-center justify-between">
            <span className="uppercase tracking-wider">Direct Regional Delivery Operations:</span>
            <span className="text-[#F4F2EC] font-bold text-sm">Egypt · Saudi Arabia · UAE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
