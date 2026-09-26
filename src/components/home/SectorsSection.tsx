"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SECTORS } from "@/data/sectors";

export function SectorsSection() {
  return (
    <section className="relative bg-[#0C0F0E] text-[#F4F2EC] py-28 sm:py-36 border-b border-[#F4F2EC]/10">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-[#F4F2EC]/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#E6532F]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F]">
                Market Sectors
              </span>
            </div>
            <h2 className="heading-section font-display font-extrabold uppercase text-[#F4F2EC] tracking-tight">
              Sectors Delivered
            </h2>
          </div>
          <p className="font-mono text-xs text-[#B8BAB5] max-w-md">
            Specialized engineering knowledge applied to the unique regulatory, functional, and structural requirements of each sector.
          </p>
        </div>

        {/* Editorial Sector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 gap-px bg-[#F4F2EC]/10 border-b border-[#F4F2EC]/10">
          {SECTORS.map((sector, idx) => (
            <div
              key={sector.id}
              className="bg-[#101312] p-8 sm:p-10 flex flex-col justify-between group hover:bg-[#141816] transition-all duration-300 relative overflow-hidden"
            >
              <div>
                {/* Sector Header */}
                <div className="flex items-center justify-between font-mono text-xs text-[#B8BAB5] mb-6">
                  <span className="group-hover:text-[#E6532F] transition-colors">
                    [0{idx + 1}]
                  </span>
                  <span>{sector.completedProjects} Projects Delivered</span>
                </div>

                {/* Photography - always visible on mobile, hover reveal / scale on desktop */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#161B19] mb-6">
                  <Image
                    src={sector.image}
                    alt={sector.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101312]/80 via-transparent to-transparent opacity-50" />
                </div>

                <h3 className="font-display text-2xl font-bold uppercase text-[#F4F2EC] group-hover:text-[#E6532F] transition-colors">
                  {sector.name}
                </h3>

                <p className="mt-3 text-sm text-[#B8BAB5] leading-relaxed line-clamp-3 font-normal">
                  {sector.description}
                </p>
              </div>

              {/* Footer specs */}
              <div className="mt-8 pt-5 border-t border-[#F4F2EC]/10 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-[10px] text-[#B8BAB5]/60 uppercase block">Area Delivered</span>
                  <span className="text-[#F4F2EC] font-semibold">{sector.deliveredArea}</span>
                </div>
                <Link
                  href={`/projects?sector=${sector.id}`}
                  className="inline-flex items-center gap-1.5 text-[#B8BAB5] group-hover:text-[#E6532F] transition-colors"
                >
                  <span>View Projects</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
