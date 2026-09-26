"use client";

import { KEY_STATISTICS } from "@/data/company";
import { Counter } from "@/components/ui/Counter";

export function StatisticsSection() {
  const statSymbols = ["▲", "■", "◆", "●"];

  return (
    <section className="relative bg-[#090C0B] text-[#F4F2EC] py-28 sm:py-36 border-b border-[#F4F2EC]/10">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-[#F4F2EC]/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1.5px] bg-[#E6532F]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F] font-bold">
                02 // Institutional Scale
              </span>
            </div>
            <h2 className="heading-section font-display font-bold uppercase text-[#F4F2EC] tracking-tight">
              Disciplined Scale. Verifiable Outcomes.
            </h2>
          </div>
          <p className="font-mono text-xs text-[#B8BAB5] max-w-sm leading-relaxed">
            Every metric backed by independent audit certifications and municipal building completion approvals across 3 sovereign jurisdictions.
          </p>
        </div>

        {/* Architectural Structural Measurement Array */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#F4F2EC]/10 border-b border-[#F4F2EC]/10">
          {KEY_STATISTICS.slice(0, 4).map((stat, idx) => (
            <div
              key={stat.id}
              className="py-12 sm:py-16 px-6 sm:px-8 lg:px-10 flex flex-col justify-between group hover:bg-[#121614]/70 transition-colors duration-300 relative overflow-hidden"
            >
              {/* Corner Architectural Coordinate Tag */}
              <div className="flex items-center justify-between font-mono text-[10px] text-[#B8BAB5]/50 group-hover:text-[#F4F2EC] transition-colors mb-6">
                <span>INDEX // 0{idx + 1}</span>
                <span className="text-[#E6532F]">{statSymbols[idx]}</span>
              </div>

              {/* Massive Number Counter */}
              <div className="heading-stat font-display font-bold text-[#F4F2EC] group-hover:text-[#E6532F] transition-colors tracking-tight">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.id === "delivered_area" ? 1 : 0}
                />
              </div>

              {/* Label & Detailed Context */}
              <div className="mt-8 pt-4 border-t border-[#F4F2EC]/10">
                <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-[#F4F2EC]">
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

        {/* Verified Structural Credentials Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#F4F2EC]/10 pt-8 text-xs font-mono text-[#B8BAB5]">
          <div className="py-4 md:pr-8 flex items-center justify-between">
            <span className="uppercase text-[11px] text-[#B8BAB5]/70">Occupational Safety Record:</span>
            <span className="text-[#F4F2EC] font-bold text-xs">
              11.2M Safe Hours Without LTI
            </span>
          </div>
          <div className="py-4 md:px-8 flex items-center justify-between">
            <span className="uppercase text-[11px] text-[#B8BAB5]/70">Regional Presence:</span>
            <span className="text-[#F4F2EC] font-bold text-xs">
              Egypt · Saudi Arabia · UAE
            </span>
          </div>
          <div className="py-4 md:pl-8 flex items-center justify-between">
            <span className="uppercase text-[11px] text-[#B8BAB5]/70">Digital Delivery:</span>
            <span className="text-[#E6532F] font-bold text-xs">
              100% 4D BIM Model Federation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
