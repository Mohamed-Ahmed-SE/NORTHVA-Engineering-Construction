import type { Metadata } from "next";
import { CareersClient } from "@/components/careers/CareersClient";

export const metadata: Metadata = {
  title: "Careers & Opportunities | NORTHVA Engineering & Construction",
  description:
    "Join NORTHVA Engineering & Construction. We are hiring senior site engineers, BIM coordinators, MEP project managers, quantity surveyors, and planning engineers across Egypt and Saudi Arabia.",
};

export default function CareersPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-32 bg-[#0D100F] text-[#F4F2EC]">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Hero */}
        <div className="pb-16 sm:pb-20 border-b border-[#F4F2EC]/10 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#E04E26]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E04E26]">
              Talent & Culture
            </span>
          </div>

          <h1 className="heading-hero font-display font-extrabold uppercase text-[#F4F2EC] tracking-tight">
            Build What Comes Next.
          </h1>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-[#F4F2EC]/10">
            <div className="lg:col-span-7">
              <p className="text-xl sm:text-2xl text-[#F4F2EC] font-light leading-relaxed">
                Great projects are created by great teams.
              </p>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm text-[#B8BAB5] leading-relaxed">
                At NORTHVA, engineers, architects, project managers, technicians and construction professionals work together to solve challenging problems and create meaningful projects across the region.
              </p>
            </div>
          </div>
        </div>

        {/* Vacancies & Application Portal */}
        <CareersClient />
      </div>
    </div>
  );
}
