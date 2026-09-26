import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/data/services";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Expertise & Services | NORTHVA Engineering & Construction",
  description:
    "Integrated engineering disciplines spanning general contracting, civil infrastructure, design & build, MEP engineering, premium fit-out, and project management controls.",
};

export default function ExpertisePage() {
  return (
    <div className="pt-28 sm:pt-36 pb-32 bg-[#101312] text-[#F4F2EC]">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12">
        <Breadcrumb items={[{ label: "Engineering Expertise" }]} />

        {/* Page Hero */}
        <div className="pb-16 border-b border-[#F4F2EC]/10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#E6532F]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F]">
              Technical Disciplines
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="heading-display font-display font-extrabold uppercase text-[#F4F2EC] tracking-tight">
                Engineering Expertise.
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base text-[#B8BAB5] font-light leading-relaxed">
                Six integrated delivery divisions coordinating from geotechnical ground improvement through advanced architectural fit-out and systems commissioning.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Services Breakdown */}
        <div className="divide-y divide-[#F4F2EC]/10">
          {SERVICES.map((service, index) => (
            <section
              key={service.id}
              id={service.id}
              className="py-24 sm:py-32 scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Left Detail Rail */}
                <div
                  className={`lg:col-span-6 space-y-8 ${
                    index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-2xl font-bold text-[#E6532F]">
                      {service.number}
                    </span>
                    <span className="w-8 h-[1px] bg-[#F4F2EC]/20" />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#B8BAB5]">
                      Primary Discipline
                    </span>
                  </div>

                  <h2 className="heading-section font-display font-bold uppercase text-[#F4F2EC] tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-lg text-[#F4F2EC] font-light leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <p className="text-sm text-[#B8BAB5] leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {/* Capabilities List */}
                  <div className="pt-4 border-t border-[#F4F2EC]/10">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#E6532F] block mb-4">
                      Core Scope & Sub-Disciplines
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-[#F4F2EC]">
                      {service.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#E6532F] shrink-0 mt-0.5" />
                          <span className="leading-snug">{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metric Box */}
                  <div className="p-5 bg-[#141816] border border-[#F4F2EC]/10 flex items-center justify-between font-mono text-xs">
                    <span className="text-[#B8BAB5] uppercase tracking-wider">
                      {service.metricLabel}
                    </span>
                    <span className="text-xl font-bold text-[#E6532F]">
                      {service.keyMetric}
                    </span>
                  </div>
                </div>

                {/* Right Photography */}
                <div
                  className={`lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-[#161B19] border border-[#F4F2EC]/15 ${
                    index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    unoptimized={true}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D100F]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 font-mono text-xs px-3 py-1.5 bg-[#0D100F]/90 backdrop-blur-md border border-[#F4F2EC]/15 text-[#F4F2EC]">
                    {service.number} // Operational Division
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-20 p-10 sm:p-14 bg-[#131715] border border-[#F4F2EC]/15 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold uppercase text-[#F4F2EC]">
              Require Specialized Engineering Tenders?
            </h3>
            <p className="mt-2 text-sm text-[#A3A7A1] font-normal max-w-xl">
              Our pre-construction and value engineering teams can evaluate your drawings and deliver an optimized constructability report.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-arch-primary group cursor-pointer shrink-0"
          >
            <span>Submit Tender Package</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
