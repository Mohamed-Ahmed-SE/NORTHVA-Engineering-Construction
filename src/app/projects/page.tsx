import type { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import { ProjectsArchiveClient } from "@/components/projects/ProjectsArchiveClient";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Projects Archive | NORTHVA Engineering & Construction",
  description:
    "Explore NORTHVA's portfolio of landmark engineering and construction projects across commercial, residential, hospitality, healthcare, industrial, and infrastructure sectors in Egypt, Saudi Arabia, and the UAE.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-32 bg-[#101312] text-[#F4F2EC]">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12">
        <Breadcrumb items={[{ label: "Projects Archive" }]} />

        {/* Page Hero Header */}
        <div className="pb-16 border-b border-[#F4F2EC]/10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#E6532F]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F]">
              Portfolio of Record
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="heading-display font-display font-extrabold uppercase text-[#F4F2EC] tracking-tight">
                Projects Archive.
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p className="text-base text-[#B8BAB5] font-light leading-relaxed">
                A selection of complex infrastructure, high-rise towers, clinical facilities, and master-planned communities delivered across Egypt, Saudi Arabia, and the UAE.
              </p>
            </div>
          </div>
        </div>

        {/* Client Interactive Filter & Archive Grid */}
        <div className="pt-12">
          <ProjectsArchiveClient initialProjects={PROJECTS} />
        </div>
      </div>
    </div>
  );
}
