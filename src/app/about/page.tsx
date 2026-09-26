import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Target, Eye } from "lucide-react";
import {
  COMPANY_INFO,
  KEY_STATISTICS,
  LEADERSHIP,
  TIMELINE_MILESTONES,
  REGIONAL_OFFICES,
} from "@/data/company";
import { Counter } from "@/components/ui/Counter";

export const metadata: Metadata = {
  title: "About Us | NORTHVA Engineering & Construction",
  description:
    "Founded in 2008 in Cairo, NORTHVA has evolved into one of the region's premier engineering and construction partners delivering complex projects across Egypt, Saudi Arabia, and the UAE.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-32 bg-[#101312] text-[#F4F2EC]">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Hero */}
        <div className="pb-16 sm:pb-24 border-b border-[#F4F2EC]/10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#E6532F]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F]">
              Corporate Profile & Heritage
            </span>
          </div>

          <h1 className="heading-hero font-display font-extrabold uppercase text-[#F4F2EC] tracking-tight">
            Built On Engineering. <br />
            <span className="text-[#E6532F]">Driven By Progress.</span>
          </h1>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-[#F4F2EC]/10">
            <div className="lg:col-span-7">
              <p className="text-xl sm:text-2xl text-[#F4F2EC] font-light leading-relaxed">
                {COMPANY_INFO.description}
              </p>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm text-[#B8BAB5] leading-relaxed">
                {COMPANY_INFO.extendedDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Hero Architectural Visual */}
        <div className="my-16 relative aspect-[21/9] w-full overflow-hidden bg-[#161B19] border border-[#F4F2EC]/10">
          <Image
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2600&q=90"
            alt="NORTHVA engineering construction excellence"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[0.8] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101312]/80 via-transparent to-transparent opacity-50" />
          <div className="absolute bottom-6 left-6 font-mono text-xs px-3 py-1.5 bg-[#101312]/90 backdrop-blur-sm border border-[#F4F2EC]/15 text-[#B8BAB5]">
            Engineering Operations across Egypt, KSA, and UAE
          </div>
        </div>

        {/* Mission & Vision Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#F4F2EC]/10 border border-[#F4F2EC]/10 my-20">
          <div className="bg-[#121614] p-10 sm:p-14 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 border border-[#E6532F] flex items-center justify-center text-[#E6532F] mb-6">
                <Target className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#E6532F] block mb-2">
                Our Mission
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#F4F2EC]">
                Reliable, Sustainable & Advanced
              </h2>
              <p className="mt-4 text-base text-[#B8BAB5] font-light leading-relaxed">
                {COMPANY_INFO.mission}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#F4F2EC]/10 text-xs font-mono text-[#B8BAB5]/60">
              CORE PURPOSE
            </div>
          </div>

          <div className="bg-[#121614] p-10 sm:p-14 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 border border-[#E6532F] flex items-center justify-center text-[#E6532F] mb-6">
                <Eye className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#E6532F] block mb-2">
                Our Vision
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#F4F2EC]">
                Regional Trust & Technical Mastery
              </h2>
              <p className="mt-4 text-base text-[#B8BAB5] font-light leading-relaxed">
                {COMPANY_INFO.vision}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#F4F2EC]/10 text-xs font-mono text-[#B8BAB5]/60">
              STRATEGIC HORIZON
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="py-20 border-b border-[#F4F2EC]/10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#E6532F]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F]">
              Foundational Principles
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#F4F2EC] mb-12">
            The NORTHVA Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#F4F2EC]/10 border border-[#F4F2EC]/10">
            {COMPANY_INFO.values.map((val, idx) => (
              <div
                key={val.title}
                className="bg-[#101312] p-8 flex flex-col justify-between hover:bg-[#141816] transition-colors group"
              >
                <div>
                  <span className="font-mono text-xs text-[#E6532F] block mb-4">
                    [0{idx + 1}]
                  </span>
                  <h3 className="font-display text-lg font-bold uppercase text-[#F4F2EC] group-hover:text-[#E6532F] transition-colors">
                    {val.title}
                  </h3>
                  <p className="mt-3 text-xs text-[#B8BAB5] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Key Statistics Bar */}
        <div className="py-20 border-b border-[#F4F2EC]/10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#F4F2EC]/10 border border-[#F4F2EC]/10 text-center font-mono">
            {KEY_STATISTICS.map((stat) => (
              <div key={stat.id} className="bg-[#121614] p-6 sm:p-8">
                <span className="text-2xl sm:text-3xl font-bold text-[#E6532F] block">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.id === "delivered_area" || stat.id === "safe_hours" ? 1 : 0}
                  />
                </span>
                <span className="text-[11px] uppercase text-[#F4F2EC] mt-2 block font-semibold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Leadership Team */}
        <div id="leadership" className="py-24 border-b border-[#F4F2EC]/10 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F] block mb-2">
                Governance & Direction
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#F4F2EC]">
                Executive Leadership
              </h2>
            </div>
            <p className="font-mono text-xs text-[#B8BAB5] max-w-sm">
              Seasoned industry pioneers with decades of engineering and major construction oversight.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {LEADERSHIP.map((leader) => (
              <div
                key={leader.id}
                className="bg-[#141816] border border-[#F4F2EC]/10 p-6 flex flex-col justify-between group hover:border-[#E6532F]/50 transition-colors"
              >
                <div>
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#101312] mb-5">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase text-[#F4F2EC]">
                    {leader.name}
                  </h3>
                  <span className="font-mono text-xs text-[#E6532F] block mt-1">
                    {leader.role}
                  </span>
                  <p className="mt-3 text-xs text-[#B8BAB5] leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Presence Hubs */}
        <div className="py-24 border-b border-[#F4F2EC]/10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#E6532F]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F]">
              Geographic Footprint
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#F4F2EC] mb-12">
            Regional Presence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REGIONAL_OFFICES.map((office) => (
              <div
                key={office.id}
                className="p-8 bg-[#141816] border border-[#F4F2EC]/15 space-y-4"
              >
                <div className="flex items-center justify-between font-mono text-xs text-[#B8BAB5]">
                  <span className="text-[#E6532F] uppercase font-bold">{office.country}</span>
                  <span>{office.city}</span>
                </div>
                <h3 className="font-display text-xl font-bold uppercase text-[#F4F2EC]">
                  {office.name}
                </h3>
                <p className="text-xs text-[#B8BAB5] leading-relaxed">
                  {office.address}
                </p>
                <div className="pt-4 border-t border-[#F4F2EC]/10 font-mono text-xs space-y-1 text-[#B8BAB5]">
                  <p>Tel: {office.phone}</p>
                  <p>Email: {office.email}</p>
                  <p className="text-[10px] text-[#B8BAB5]/60 pt-1">
                    Coords: {office.coordinates}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Timeline */}
        <div id="timeline" className="py-24 scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-[#E6532F]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F]">
              Institutional Evolution
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#F4F2EC] mb-12">
            Company Timeline (2008 – 2026)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#F4F2EC]/10 border border-[#F4F2EC]/10">
            {TIMELINE_MILESTONES.map((item, idx) => (
              <div key={item.year} className="bg-[#101312] p-8 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-2xl font-bold text-[#E6532F] block mb-2">
                    {item.year}
                  </span>
                  <h3 className="font-display text-lg font-bold uppercase text-[#F4F2EC]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#B8BAB5] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <span className="mt-6 font-mono text-[10px] text-[#B8BAB5]/40 block">
                  MILESTONE 0{idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
