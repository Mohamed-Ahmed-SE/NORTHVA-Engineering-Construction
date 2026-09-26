"use client";

import { useState } from "react";
import { TECHNOLOGIES } from "@/data/technology";
import { Layers, Cpu, Radio, ShieldCheck, Database, FileCheck2, Activity } from "lucide-react";

export function TechnologySection() {
  const [selectedTechId, setSelectedTechId] = useState(TECHNOLOGIES[0].id);

  const selectedTech = TECHNOLOGIES.find((t) => t.id === selectedTechId) || TECHNOLOGIES[0];

  const iconMap: Record<string, React.ReactNode> = {
    bim: <Layers className="w-4 h-4" />,
    "scheduling-4d": <Cpu className="w-4 h-4" />,
    "drone-monitoring": <Radio className="w-4 h-4" />,
    "digital-inspections": <ShieldCheck className="w-4 h-4" />,
    "cloud-pm": <Database className="w-4 h-4" />,
    "digital-document-control": <FileCheck2 className="w-4 h-4" />,
    "realtime-reporting": <Activity className="w-4 h-4" />,
  };

  return (
    <section className="relative bg-[#090C0B] text-[#F4F2EC] py-28 sm:py-36 border-b border-[#F4F2EC]/10 overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 architectural-grid-dense opacity-20 pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-[#F4F2EC]/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1.5px] bg-[#E6532F]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F] font-bold">
                04 // Digital Construction Stack
              </span>
            </div>
            <h2 className="heading-section font-display font-bold uppercase text-[#F4F2EC] tracking-tight">
              Smarter Construction Through Technology.
            </h2>
          </div>
          <div className="font-mono text-xs text-[#B8BAB5] flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#E6532F] animate-pulse" />
            <span>Virtual Design & Construction Protocol (VDC // ISO 19650)</span>
          </div>
        </div>

        {/* CAD / BIM Architectural Interface Workstation */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tech Navigation Tabs (Left Rail) */}
          <div className="lg:col-span-4 border border-[#F4F2EC]/15 bg-[#0D100F] divide-y divide-[#F4F2EC]/10">
            <div className="p-4 bg-[#121614] border-b border-[#F4F2EC]/10 flex items-center justify-between font-mono text-[11px] text-[#B8BAB5]">
              <span className="uppercase tracking-wider">Active VDC Modules</span>
              <span className="text-[#E6532F] font-bold">LOD 500 Ready</span>
            </div>

            {TECHNOLOGIES.map((tech) => {
              const isSelected = tech.id === selectedTechId;
              return (
                <button
                  key={tech.id}
                  onClick={() => setSelectedTechId(tech.id)}
                  className={`w-full text-left p-4.5 sm:p-5 transition-all flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-[#141917] border-l-2 border-l-[#E6532F] text-[#F4F2EC]"
                      : "text-[#B8BAB5] hover:text-[#F4F2EC] hover:bg-[#101312]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`p-2 border transition-colors ${
                        isSelected
                          ? "border-[#E6532F] bg-[#E6532F]/10 text-[#E6532F]"
                          : "border-[#F4F2EC]/10 bg-[#0B0E0D] text-[#B8BAB5] group-hover:text-[#F4F2EC]"
                      }`}
                    >
                      {iconMap[tech.id]}
                    </span>
                    <div>
                      <p className="font-display font-bold text-sm tracking-wide">
                        {tech.title}
                      </p>
                      <span className="font-mono text-[10px] text-[#B8BAB5]/60 uppercase">
                        {tech.category}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] text-[#B8BAB5]/40 group-hover:text-[#E6532F]">
                    {tech.code}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Technical Terminal / CAD-BIM Schematic Viewer (Right Console) */}
          <div className="lg:col-span-8 border border-[#F4F2EC]/20 bg-[#0D1110] relative p-6 sm:p-10 overflow-hidden">
            {/* Architectural CAD Grid Header Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#F4F2EC]/15 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 bg-[#E6532F]/15 text-[#E6532F] border border-[#E6532F]/30 text-[10px] uppercase font-bold">
                  {selectedTech.code}
                </span>
                <span className="text-[#F4F2EC] font-semibold">{selectedTech.category}</span>
              </div>
              <div className="text-[11px] text-[#B8BAB5] flex items-center gap-4">
                <span>GRID: A1-F8 // DATUM +0.00M</span>
                <span className="text-[#E6532F]">ACTIVE FEDERATION</span>
              </div>
            </div>

            {/* Vector Architectural Blueprint CAD Wireframe Diagram */}
            <div className="my-8 p-6 sm:p-8 bg-[#090C0B] border border-[#F4F2EC]/10 relative overflow-hidden">
              <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between font-mono text-[10px] text-[#B8BAB5]/50 mb-3">
                  <span>DISCIPLINE PROTOCOL SPECIFICATION</span>
                  <span>SYSTEM ACCURACY: {selectedTech.metrics}</span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#F4F2EC]">
                  {selectedTech.title}
                </h3>
                <p className="mt-4 text-base text-[#F4F2EC] font-light max-w-xl leading-relaxed">
                  {selectedTech.tagline}
                </p>
                <p className="mt-3 text-xs sm:text-sm text-[#B8BAB5] max-w-xl leading-relaxed font-light">
                  {selectedTech.description}
                </p>

                {/* Wireframe metrics box */}
                <div className="mt-8 pt-6 border-t border-[#F4F2EC]/10 grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono">
                  <div>
                    <span className="text-[10px] uppercase text-[#B8BAB5]/60 block mb-1">
                      Measured Operational Impact
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-[#E6532F]">
                      {selectedTech.metrics}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#B8BAB5]/60 block mb-1">
                      Information Management Standard
                    </span>
                    <span className="text-sm font-medium text-[#F4F2EC]">
                      ISO 19650 / BIM CDE Protocol
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Sub-Specs Matrix */}
            <div>
              <span className="font-mono text-[10px] uppercase text-[#B8BAB5]/60 tracking-wider block mb-3">
                Deployment Capabilities & Protocols
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                {selectedTech.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="p-3.5 bg-[#121614] border border-[#F4F2EC]/10 flex items-center gap-2.5"
                  >
                    <span className="w-1.5 h-1.5 bg-[#E6532F] shrink-0" />
                    <span className="text-[#F4F2EC] text-[11px]">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Corner Crosshair Accents */}
            <span className="absolute top-2 left-2 text-[#F4F2EC]/20 font-mono text-[9px]">+</span>
            <span className="absolute top-2 right-2 text-[#F4F2EC]/20 font-mono text-[9px]">+</span>
            <span className="absolute bottom-2 left-2 text-[#F4F2EC]/20 font-mono text-[9px]">+</span>
            <span className="absolute bottom-2 right-2 text-[#F4F2EC]/20 font-mono text-[9px]">+</span>
          </div>
        </div>
      </div>
    </section>
  );
}
