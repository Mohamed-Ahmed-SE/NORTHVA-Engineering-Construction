"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface ProjectsArchiveClientProps {
  initialProjects: ProjectItem[];
}

const SECTOR_FILTERS = [
  "All",
  "Commercial",
  "Residential",
  "Hospitality",
  "Healthcare",
  "Industrial",
  "Infrastructure",
];

export function ProjectsArchiveClient({ initialProjects }: ProjectsArchiveClientProps) {
  const [selectedSector, setSelectedSector] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      const matchesSector =
        selectedSector === "All" ||
        project.sector.toLowerCase() === selectedSector.toLowerCase();

      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesSector && matchesSearch;
    });
  }, [initialProjects, selectedSector, searchQuery]);

  return (
    <div className="space-y-12">
      {/* Elegant Filter Navigation & Search Bar - NOT ugly rounded pills */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-[#F4F2EC]/10">
        {/* Sector Tabs with Architectural Bottom Border */}
        <div className="flex flex-wrap items-center gap-1 sm:gap-2 border-b lg:border-b-0 border-[#F4F2EC]/10 pb-4 lg:pb-0">
          {SECTOR_FILTERS.map((sector) => {
            const isSelected = selectedSector === sector;
            return (
              <button
                key={sector}
                onClick={() => setSelectedSector(sector)}
                className={`relative px-4 py-2.5 font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "text-[#F4F2EC] bg-[#161B19] border border-[#F4F2EC]/20 font-semibold"
                    : "text-[#B8BAB5] hover:text-[#F4F2EC] hover:bg-[#121614] border border-transparent"
                }`}
              >
                <span>{sector}</span>
                {isSelected && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E6532F]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Search input with architectural minimal styling */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-[#B8BAB5] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by project or city..."
            className="w-full bg-[#141816] border border-[#F4F2EC]/15 pl-10 pr-4 py-2.5 text-xs font-mono text-[#F4F2EC] placeholder:text-[#B8BAB5]/50 focus:outline-none focus:border-[#E6532F] transition-colors"
          />
        </div>
      </div>

      {/* Results Telemetry Counter */}
      <div className="flex items-center justify-between text-xs font-mono text-[#B8BAB5]">
        <span>
          Showing {filteredProjects.length} of {initialProjects.length} Engineering Works
        </span>
        <span className="hidden sm:inline">Sorted by Completion Date</span>
      </div>

      {/* Projects Editorial Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F4F2EC]/10 border border-[#F4F2EC]/10">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className="bg-[#101312] p-6 sm:p-8 flex flex-col justify-between group hover:bg-[#141816] transition-colors duration-300 relative overflow-hidden"
            >
              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between font-mono text-xs text-[#B8BAB5] mb-5">
                  <span className="text-[#E6532F] font-medium">
                    [0{idx + 1}]
                  </span>
                  <span>{project.year}</span>
                </div>

                {/* Project Image */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="block relative aspect-[16/10] w-full overflow-hidden bg-[#161B19] mb-6"
                >
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    unoptimized={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D100F]/80 via-transparent to-transparent opacity-60" />

                  <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-[#0D100F]/90 backdrop-blur-sm border border-[#F4F2EC]/15 text-[#F4F2EC]">
                    {project.sector}
                  </span>
                </Link>

                {/* Title & Location */}
                <div className="space-y-2">
                  <div className="font-mono text-[11px] text-[#A3A7A1]">
                    {project.location}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-[#F4F2EC] tracking-tight group-hover:text-[#E04E26] transition-colors duration-200">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs text-[#A3A7A1] leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>
                </div>
              </div>

              {/* Technical Footnote Specs */}
              <div className="mt-8 pt-5 border-t border-[#F4F2EC]/10 flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-[10px] text-[#A3A7A1]/70 uppercase block">Area</span>
                  <span className="text-[#F4F2EC] font-semibold">{project.builtUpArea}</span>
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-[#A3A7A1] group-hover:text-[#E04E26] transition-colors"
                >
                  <span>Explore Spec</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center border border-[#F4F2EC]/10 bg-[#131715] p-8">
          <p className="font-display text-2xl uppercase text-[#F4F2EC]">
            No matching projects found
          </p>
          <p className="font-mono text-xs text-[#A3A7A1] mt-2">
            Try adjusting your search criteria or selecting &apos;All&apos; sectors.
          </p>
          <button
            onClick={() => {
              setSelectedSector("All");
              setSearchQuery("");
            }}
            className="mt-6 btn-arch-primary cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
