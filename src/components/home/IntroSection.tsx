"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function IntroSection() {
  return (
    <section
      id="intro-section"
      className="relative bg-[#0B0E0D] text-[#F4F2EC] py-28 sm:py-36 lg:py-44 border-b border-[#F4F2EC]/10 overflow-hidden"
    >
      {/* Blueprint grid accent */}
      <div className="absolute right-0 top-0 w-1/2 h-full architectural-grid opacity-15 pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Editorial Sub-Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 sm:mb-16 border-b border-[#F4F2EC]/10 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1.5px] bg-[#E6532F]" />
            <span className="uppercase tracking-[0.25em] text-[#E6532F] font-bold">
              01 // Institutional Profile
            </span>
            <span className="text-[#B8BAB5]/40">·</span>
            <span className="text-[#B8BAB5]">Who We Are</span>
          </div>
          <div className="text-[11px] text-[#B8BAB5]/70 flex items-center gap-3">
            <span>REGISTRATION: NV-EGY-08</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">TURKEY EPC DELIVERY</span>
          </div>
        </div>

        {/* Large Editorial Statement Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Main Statement */}
          <div className="lg:col-span-7">
            <h2 className="heading-display font-display font-bold uppercase text-[#F4F2EC] tracking-tight leading-[1.02]">
              We build the structures, infrastructure and environments that move cities forward.
            </h2>

            {/* Architectural Elevation Schematic Illustration */}
            <div className="mt-12 p-6 sm:p-8 bg-[#131715] border border-[#F4F2EC]/10 relative hidden sm:block">
              {/* Drafting Header Bar */}
              <div className="flex items-center justify-between font-mono text-[10px] text-[#A3A7A1] pb-4 mb-4 border-b border-[#F4F2EC]/10">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-[#E04E26]" />
                  <span className="font-semibold text-[#F4F2EC]">DWG // STRUCTURAL ELEVATION & LOAD DISTRIBUTION SCHEMATIC</span>
                </div>
                <div className="flex items-center gap-4 text-[9px] text-[#A3A7A1]">
                  <span>SCALE: 1:350</span>
                  <span>DISC: STR-CORE</span>
                  <span className="text-[#E04E26] px-1.5 py-0.5 border border-[#E04E26]/40">IFC VERIFIED</span>
                </div>
              </div>

              {/* Rich Technical SVG Elevation */}
              <svg
                viewBox="0 0 720 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full text-[#F4F2EC]/30"
              >
                <defs>
                  <pattern id="cadGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(244,242,236,0.04)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect x="40" y="15" width="640" height="150" fill="url(#cadGrid)" />

                {/* Grid Column References */}
                {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((col, idx) => {
                  const x = 110 + idx * 80;
                  return (
                    <g key={col}>
                      <circle cx={x} cy="14" r="6" stroke="rgba(244,242,236,0.2)" strokeWidth="0.75" fill="#131715" />
                      <text x={x} y="17" fill="#A3A7A1" fontSize="7" fontFamily="monospace" textAnchor="middle">{col}</text>
                      <line x1={x} y1="20" x2={x} y2="155" stroke="rgba(244,242,236,0.12)" strokeWidth="0.5" strokeDasharray="3 3" />
                    </g>
                  );
                })}

                {/* Datum Ground Line */}
                <line x1="40" y1="140" x2="680" y2="140" stroke="#F4F2EC" strokeWidth="1" strokeOpacity="0.4" />
                <line x1="40" y1="141" x2="680" y2="141" stroke="#F4F2EC" strokeWidth="0.5" strokeDasharray="4 2" strokeOpacity="0.6" />
                <text x="45" y="136" fill="#F4F2EC" fontSize="7.5" fontFamily="monospace" fontWeight="bold">DATUM ±0.000m FINISHED GRADE</text>

                {/* Subterranean Foundations & Piles */}
                <rect x="150" y="140" width="360" height="22" fill="#E04E26" fillOpacity="0.08" stroke="#E04E26" strokeWidth="0.75" strokeDasharray="2 2" />
                <text x="160" y="154" fill="#E04E26" fontSize="7" fontFamily="monospace">SUBTERRANEAN RAFT FOUNDATION & BORED PILES [-14.50m]</text>
                {[180, 240, 300, 360, 420, 480].map((px) => (
                  <line key={px} x1={px} y1="162" x2={px} y2="175" stroke="#E04E26" strokeWidth="1.5" strokeOpacity="0.6" />
                ))}

                {/* Main Tower Core (Columns A-D) */}
                <rect x="150" y="32" width="200" height="108" stroke="#F4F2EC" strokeWidth="1.25" strokeOpacity="0.7" fill="#1B211E" fillOpacity="0.5" />
                
                {/* Horizontal Slab Lines */}
                {[50, 68, 86, 104, 122].map((sy) => (
                  <line key={sy} x1="150" y1={sy} x2="350" y2={sy} stroke="rgba(244,242,236,0.3)" strokeWidth="0.6" />
                ))}

                {/* Central Reinforced Concrete Shear Core */}
                <rect x="220" y="32" width="60" height="108" fill="#E04E26" fillOpacity="0.12" stroke="#E04E26" strokeWidth="1" />
                <text x="250" y="75" fill="#E04E26" fontSize="6.5" fontFamily="monospace" textAnchor="middle" transform="rotate(-90 250 75)">RC SHEAR CORE</text>

                {/* Structural Bracing (X-truss) */}
                <line x1="150" y1="50" x2="220" y2="86" stroke="rgba(244,242,236,0.25)" strokeWidth="0.75" strokeDasharray="3 2" />
                <line x1="220" y1="50" x2="150" y2="86" stroke="rgba(244,242,236,0.25)" strokeWidth="0.75" strokeDasharray="3 2" />
                <line x1="280" y1="50" x2="350" y2="86" stroke="rgba(244,242,236,0.25)" strokeWidth="0.75" strokeDasharray="3 2" />
                <line x1="350" y1="50" x2="280" y2="86" stroke="rgba(244,242,236,0.25)" strokeWidth="0.75" strokeDasharray="3 2" />

                {/* Adjacent Podium Structure (Columns D-F) */}
                <rect x="350" y="78" width="160" height="62" stroke="#F4F2EC" strokeWidth="1" strokeOpacity="0.6" fill="#161B19" fillOpacity="0.4" />
                {[98, 118].map((py) => (
                  <line key={py} x1="350" y1={py} x2="510" y2={py} stroke="rgba(244,242,236,0.25)" strokeWidth="0.6" />
                ))}

                {/* Cantilever Canopy Extension */}
                <path d="M 510 118 L 560 126 L 560 140 L 510 140 Z" fill="#E04E26" fillOpacity="0.1" stroke="#E04E26" strokeWidth="0.75" />
                <text x="565" y="133" fill="#E04E26" fontSize="6" fontFamily="monospace">POST-TENSIONED CANOPY</text>

                {/* Dimension & Elevation Callouts */}
                <line x1="140" y1="32" x2="140" y2="140" stroke="#F4F2EC" strokeWidth="0.5" strokeOpacity="0.4" />
                <line x1="135" y1="32" x2="145" y2="32" stroke="#F4F2EC" strokeWidth="0.5" strokeOpacity="0.6" />
                <line x1="135" y1="140" x2="145" y2="140" stroke="#F4F2EC" strokeWidth="0.5" strokeOpacity="0.6" />
                <text x="130" y="88" fill="#A3A7A1" fontSize="7" fontFamily="monospace" textAnchor="end" transform="rotate(-90 130 88)">H: 108.00m (32 FLOORS)</text>

                <line x1="350" y1="28" x2="350" y2="24" stroke="#E04E26" strokeWidth="0.75" />
                <line x1="150" y1="25" x2="350" y2="25" stroke="#E04E26" strokeWidth="0.75" />
                <line x1="150" y1="28" x2="150" y2="24" stroke="#E04E26" strokeWidth="0.75" />
                <text x="250" y="21" fill="#E04E26" fontSize="7" fontFamily="monospace" textAnchor="middle">SPAN: 48.00m</text>

                {/* Key elevation marks */}
                <text x="60" y="36" fill="#E04E26" fontSize="7.5" fontFamily="monospace">▲ +108.00m ROOF</text>
                <text x="60" y="82" fill="#A3A7A1" fontSize="7" fontFamily="monospace">▼ +48.00m PODIUM</text>
              </svg>

              {/* Blueprint Footer Strip */}
              <div className="mt-4 pt-3 border-t border-[#F4F2EC]/10 flex flex-wrap items-center justify-between text-[9px] font-mono text-[#A3A7A1]/70">
                <span>SEISMIC ZONE 2B COMPLIANT</span>
                <span>CONCRETE SPEC: C60/75 HIGH PERFORMANCE</span>
                <span>BIM LOD 400 FEDERATION</span>
              </div>
            </div>
          </div>

          {/* Narrative & Specification Matrix */}
          <div className="lg:col-span-5 space-y-8 pt-2">
            <p className="text-lg sm:text-xl text-[#F4F2EC] leading-relaxed font-normal">
              NORTHVA is an integrated engineering and construction company delivering technically demanding projects across Egypt and the Gulf.
            </p>

            <p className="text-sm text-[#A3A7A1] leading-relaxed font-normal">
              From initial planning and 4D BIM coordination to heavy structural concrete execution, complex MEP commissioning, and turnkey architectural fit-out, we unify all engineering disciplines under disciplined quality governance and an unwavering safety culture.
            </p>

            {/* Technical Parameters Matrix */}
            <div className="pt-6 border-t border-[#F4F2EC]/10 divide-y divide-[#F4F2EC]/10 font-mono text-xs">
              <div className="py-3.5 flex items-center justify-between">
                <span className="text-[#A3A7A1] uppercase text-[11px]">Corporate Model</span>
                <span className="text-[#F4F2EC] font-medium">Turnkey General Contractor (EPC)</span>
              </div>
              <div className="py-3.5 flex items-center justify-between">
                <span className="text-[#A3A7A1] uppercase text-[11px]">Primary Headquarters</span>
                <span className="text-[#F4F2EC] font-medium">District 5, New Cairo, Egypt</span>
              </div>
              <div className="py-3.5 flex items-center justify-between">
                <span className="text-[#A3A7A1] uppercase text-[11px]">Regional Operations</span>
                <span className="text-[#F4F2EC] font-medium">Egypt · Saudi Arabia · UAE</span>
              </div>
              <div className="py-3.5 flex items-center justify-between">
                <span className="text-[#A3A7A1] uppercase text-[11px]">Safety Standard</span>
                <span className="text-[#E04E26] font-bold">11.2M Safe Hours Without LTI</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="btn-arch-secondary group cursor-pointer inline-flex"
              >
                <span>Read Institutional Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
