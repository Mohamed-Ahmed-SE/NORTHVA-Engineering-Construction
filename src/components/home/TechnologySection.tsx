"use client";

import { useState } from "react";
import { TECHNOLOGIES } from "@/data/technology";
import { Cpu, Layers, Radio, ShieldCheck, Database, FileCheck2, Activity } from "lucide-react";

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
    <section className="relative bg-[#0C0F0E] text-[#F4F2EC] py-28 sm:py-36 border-b border-[#F4F2EC]/10 overflow-hidden">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 architectural-grid-dense opacity-20 pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-[#F4F2EC]/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#E6532F]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F]">
                Digital Construction Stack
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-[#F4F2EC] tracking-tight">
              Smarter Construction Through Technology.
            </h2>
          </div>
          <div className="font-mono text-xs text-[#B8BAB5] flex items-center gap-4">
            <span className="inline-block w-2 h-2 bg-[#E6532F] animate-ping" />
            <span>Virtual Design & Construction Protocol (VDC)</span>
          </div>
        </div>

        {/* Technical Interface Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tech Navigation Tabs (Left Rail) */}
          <div className="lg:col-span-4 border border-[#F4F2EC]/15 bg-[#101312]/90 backdrop-blur-sm divide-y divide-[#F4F2EC]/10">
            <div className="p-4 bg-[#161B19] border-b border-[#F4F2EC]/10 flex items-center justify-between font-mono text-[11px] text-[#B8BAB5]">
              <span className="uppercase tracking-wider">Active Modules</span>
              <span className="text-[#E6532F]">LOD 500 Ready</span>
            </div>

            {TECHNOLOGIES.map((tech) => {
              const isSelected = tech.id === selectedTechId;
              return (
                <button
                  key={tech.id}
                  onClick={() => setSelectedTechId(tech.id)}
                  className={`w-full text-left p-4.5 sm:p-5 transition-all flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? "bg-[#181D1B] border-l-4 border-l-[#E6532F] text-[#F4F2EC]"
                      : "text-[#B8BAB5] hover:text-[#F4F2EC] hover:bg-[#141816]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`transition-colors ${
                        isSelected ? "text-[#E6532F]" : "text-[#B8BAB5] group-hover:text-[#F4F2EC]"
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
          <div className="lg:col-span-8 border border-[#F4F2EC]/20 bg-[#121614] relative p-6 sm:p-10 overflow-hidden">
            {/* Architectural CAD Grid Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#F4F2EC]/15 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 bg-[#E6532F]/20 text-[#E6532F] border border-[#E6532F]/40 text-[10px] uppercase font-bold">
                  {selectedTech.code}
                </span>
                <span className="text-[#F4F2EC] font-semibold">{selectedTech.category}</span>
              </div>
              <div className="text-[11px] text-[#B8BAB5] flex items-center gap-4">
                <span>COORDINATES: X: 31.4913 / Y: 30.0131</span>
                <span className="text-[#E6532F]">CALIBRATED</span>
              </div>
            </div>

            {/* Technical Schematic Drawing Simulation */}
            <div className="my-8 p-6 sm:p-8 bg-[#0E1110] border border-[#F4F2EC]/10 relative overflow-hidden">
              {/* Abstract CAD Vector Wireframe representation */}
              <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />

              <div className="relative z-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#E6532F] block mb-2">
                  System Architecture
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#F4F2EC]">
                  {selectedTech.title}
                </h3>
                <p className="mt-4 text-base text-[#F4F2EC] font-light max-w-xl leading-relaxed">
                  {selectedTech.tagline}
                </p>
                <p className="mt-3 text-xs sm:text-sm text-[#B8BAB5] max-w-xl leading-relaxed">
                  {selectedTech.description}
                </p>

                {/* Wireframe metrics box */}
                <div className="mt-8 pt-6 border-t border-[#F4F2EC]/10 grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono">
                  <div>
                    <span className="text-[10px] uppercase text-[#B8BAB5]/60 block mb-1">
                      Target Metric Impact
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-[#E6532F]">
                      {selectedTech.metrics}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#B8BAB5]/60 block mb-1">
                      Data Protocol Standard
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
                Field Deployment Capabilities
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                {selectedTech.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="p-3 bg-[#161B19] border border-[#F4F2EC]/10 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#E6532F]" />
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
