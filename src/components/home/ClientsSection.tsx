"use client";

import { CLIENT_PARTNERS } from "@/data/company";

export function ClientsSection() {
  return (
    <section className="relative bg-[#0C0F0E] text-[#F4F2EC] py-24 sm:py-32 border-b border-[#F4F2EC]/10">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-[#F4F2EC]/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F] block mb-2">
              Strategic Partnerships
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#F4F2EC]">
              Trusted By Major Developers & Institutional Owners
            </h2>
          </div>
          <span className="font-mono text-xs text-[#B8BAB5]">
            Repeat engagements across commercial, public, and private sector clients.
          </span>
        </div>

        {/* Minimal Typographic Monochrome Logo Wall */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#F4F2EC]/10 border border-[#F4F2EC]/10">
          {CLIENT_PARTNERS.map((client) => (
            <div
              key={client.id}
              className="bg-[#101312] p-8 sm:p-12 flex flex-col justify-between items-center text-center group hover:bg-[#151917] transition-all duration-300 min-h-[160px]"
            >
              <div className="my-auto">
                <span className="font-display font-extrabold text-lg sm:text-xl uppercase tracking-wider text-[#B8BAB5] group-hover:text-[#F4F2EC] transition-colors">
                  {client.name}
                </span>
                <span className="block font-mono text-[10px] text-[#B8BAB5]/40 mt-1 uppercase tracking-wider">
                  {client.sector}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
