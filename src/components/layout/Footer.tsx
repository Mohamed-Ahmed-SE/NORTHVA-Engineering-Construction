"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { REGIONAL_OFFICES } from "@/data/company";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0C0F0E] text-[#F4F2EC] border-t border-[#F4F2EC]/10 overflow-hidden pt-20 pb-12">
      {/* Massive Background Ghost Wordmark */}
      <div 
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-0 left-1/2 -translate-x-1/2 font-display font-extrabold text-[18vw] leading-none text-[#F4F2EC]/[0.025] tracking-tight whitespace-nowrap z-0"
      >
        NORTHVA
      </div>

      <div className="relative z-10 max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Tier: Brand Statement & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#F4F2EC]/10">
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-7 h-7 flex items-center justify-center border border-[#E6532F]">
                  <span className="w-2 h-2 bg-[#E6532F]" />
                </div>
                <span className="font-display font-bold text-2xl tracking-[-0.03em] text-[#F4F2EC]">
                  NORTHVA
                </span>
              </div>
              <p className="font-display text-2xl sm:text-3xl text-[#F4F2EC] font-light max-w-xl leading-snug">
                Engineering What Comes Next.
              </p>
              <p className="mt-4 text-sm text-[#B8BAB5] max-w-lg leading-relaxed font-sans font-normal">
                Integrated engineering and construction delivery across commercial, residential, infrastructure, healthcare, and industrial developments in Egypt and the Gulf.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono text-[#B8BAB5]">
              <span className="px-3 py-1 border border-[#F4F2EC]/10">ISO 9001:2015</span>
              <span className="px-3 py-1 border border-[#F4F2EC]/10">ISO 14001:2015</span>
              <span className="px-3 py-1 border border-[#F4F2EC]/10">ISO 45001:2018</span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#E6532F] block mb-3">
                Regional Hubs
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {REGIONAL_OFFICES.map((office) => (
                  <div key={office.id} className="border-l border-[#F4F2EC]/10 pl-4 py-1">
                    <p className="font-mono text-xs uppercase tracking-wider text-[#F4F2EC] font-medium">
                      {office.country}
                    </p>
                    <p className="text-xs text-[#B8BAB5] mt-1 leading-relaxed">
                      {office.city}
                    </p>
                    <p className="text-[11px] font-mono text-[#B8BAB5]/70 mt-2">
                      {office.phone}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between pt-6 border-t border-[#F4F2EC]/10">
              <span className="text-xs font-mono text-[#B8BAB5]">
                Inquiries: <a href="mailto:inquiries@northva-eng.com" className="text-[#F4F2EC] hover:text-[#E6532F] transition-colors">inquiries@northva-eng.com</a>
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E6532F] text-white text-xs font-mono uppercase tracking-[0.14em] hover:bg-[#d44825] transition-colors"
              >
                <span>Initiate RFP</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Middle Tier: Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14 border-b border-[#F4F2EC]/10 text-xs font-mono">
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#E6532F] mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-[#B8BAB5]">
              <li>
                <Link href="/about" className="hover:text-[#F4F2EC] transition-colors">
                  About NORTHVA
                </Link>
              </li>
              <li>
                <Link href="/about#leadership" className="hover:text-[#F4F2EC] transition-colors">
                  Executive Leadership
                </Link>
              </li>
              <li>
                <Link href="/about#timeline" className="hover:text-[#F4F2EC] transition-colors">
                  Milestones & History
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#F4F2EC] transition-colors">
                  Careers & Culture
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F4F2EC] transition-colors">
                  Contact & Locations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#E6532F] mb-5">
              Expertise
            </h4>
            <ul className="space-y-3 text-[#B8BAB5]">
              <li>
                <Link href="/expertise#general-contracting" className="hover:text-[#F4F2EC] transition-colors">
                  General Contracting
                </Link>
              </li>
              <li>
                <Link href="/expertise#infrastructure" className="hover:text-[#F4F2EC] transition-colors">
                  Civil Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/expertise#design-build" className="hover:text-[#F4F2EC] transition-colors">
                  Design & Build
                </Link>
              </li>
              <li>
                <Link href="/expertise#mep-engineering" className="hover:text-[#F4F2EC] transition-colors">
                  MEP Engineering
                </Link>
              </li>
              <li>
                <Link href="/expertise#fit-out" className="hover:text-[#F4F2EC] transition-colors">
                  Luxury Fit-Out
                </Link>
              </li>
              <li>
                <Link href="/expertise#project-management" className="hover:text-[#F4F2EC] transition-colors">
                  Project Controls
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#E6532F] mb-5">
              Featured Projects
            </h4>
            <ul className="space-y-3 text-[#B8BAB5]">
              <li>
                <Link href="/projects/aura-business-district" className="hover:text-[#F4F2EC] transition-colors">
                  AURA Business District
                </Link>
              </li>
              <li>
                <Link href="/projects/azure-bay-resort" className="hover:text-[#F4F2EC] transition-colors">
                  Azure Bay Resort
                </Link>
              </li>
              <li>
                <Link href="/projects/riyadh-logistics-hub" className="hover:text-[#F4F2EC] transition-colors">
                  Riyadh Logistics Hub
                </Link>
              </li>
              <li>
                <Link href="/projects/nova-residences" className="hover:text-[#F4F2EC] transition-colors">
                  NOVA Residences
                </Link>
              </li>
              <li>
                <Link href="/projects/capital-medical-center" className="hover:text-[#F4F2EC] transition-colors">
                  Capital Medical Center
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-[#E6532F] hover:underline transition-colors flex items-center gap-1">
                  View All Projects →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#E6532F] mb-5">
              Commitment
            </h4>
            <ul className="space-y-3 text-[#B8BAB5]">
              <li>
                <Link href="/sustainability" className="hover:text-[#F4F2EC] transition-colors">
                  Building Responsibly (35% Target)
                </Link>
              </li>
              <li>
                <Link href="/sustainability#energy" className="hover:text-[#F4F2EC] transition-colors">
                  Energy & Microgrids
                </Link>
              </li>
              <li>
                <Link href="/about#safety" className="hover:text-[#F4F2EC] transition-colors">
                  11.2M Safe Hours Record
                </Link>
              </li>
              <li>
                <span className="block text-[#B8BAB5]/60 mt-4 text-[10px]">
                  BIM Level of Development (LOD) 500 Ready
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#B8BAB5]/70">
          <div className="flex items-center gap-6">
            <span>© 2026 NORTHVA Engineering & Construction.</span>
            <span className="hidden md:inline">Cairo · Riyadh · Dubai</span>
          </div>

          <div className="flex items-center gap-6">
            <span>All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-[#F4F2EC] hover:text-[#E6532F] transition-colors group"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
