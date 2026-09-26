"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export function FeaturedProjectsSection() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section className="relative bg-[#0B0E0D] text-[#F4F2EC] py-28 sm:py-36 border-b border-[#F4F2EC]/10">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-[#F4F2EC]/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1.5px] bg-[#E6532F]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F] font-bold">
                03 // Landmark Portfolio
              </span>
            </div>
            <h2 className="heading-section font-display font-bold uppercase text-[#F4F2EC] tracking-tight">
              Selected Projects
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline font-mono text-xs text-[#B8BAB5]">
              Showing {featured.length} Landmark Deliveries
            </span>
            <Link
              href="/projects"
              className="btn-arch-secondary group cursor-pointer inline-flex"
            >
              <span>View All Projects [92+]</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Featured Projects Showcase List */}
        <div className="divide-y divide-[#F4F2EC]/10">
          {featured.map((project, index) => (
            <div
              key={project.id}
              className="py-20 sm:py-28 group relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                {/* Project Image Plate (Takes ~68% width on desktop) */}
                <div
                  className={`lg:col-span-8 overflow-hidden relative ${
                    index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#131715] border border-[#F4F2EC]/15"
                  >
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      unoptimized={true}
                      sizes="(max-width: 1024px) 100vw, 68vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.92] group-hover:brightness-100"
                    />
                    {/* Architectural framing scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D100F]/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                    {/* Sector Badge */}
                    <div className="absolute top-5 left-5 font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 bg-[#0D100F]/90 backdrop-blur-md border border-[#F4F2EC]/20 text-[#F4F2EC] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#E04E26]" />
                      <span>{project.sector}</span>
                    </div>

                    {/* Completion Tag */}
                    <div className="absolute bottom-5 right-5 font-mono text-[11px] px-3 py-1.5 bg-[#0D100F]/90 backdrop-blur-md border border-[#F4F2EC]/20 text-[#A3A7A1]">
                      DELIVERED {project.year}
                    </div>
                  </Link>
                </div>

                {/* Project Metadata Plaque */}
                <div
                  className={`lg:col-span-4 flex flex-col justify-between space-y-6 ${
                    index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3 font-mono text-xs text-[#A3A7A1] mb-3">
                      <span className="text-[#E04E26] font-bold">PLATE 0{index + 1}</span>
                      <span>/</span>
                      <span className="text-[#F4F2EC]">{project.location}</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-[#F4F2EC] tracking-tight group-hover:text-[#E04E26] transition-colors duration-300">
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="mt-4 text-sm text-[#A3A7A1] leading-relaxed line-clamp-3 font-normal">
                      {project.summary}
                    </p>
                  </div>

                  {/* Technical Specifications Matrix */}
                  <div className="grid grid-cols-2 gap-4 py-5 border-y border-[#F4F2EC]/10 font-mono text-xs">
                    <div>
                      <span className="text-[10px] uppercase text-[#A3A7A1]/70 block mb-1">
                        Built-Up Area
                      </span>
                      <span className="text-[#F4F2EC] font-semibold text-sm">
                        {project.builtUpArea}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-[#A3A7A1]/70 block mb-1">
                        Contract Value
                      </span>
                      <span className="text-[#E04E26] font-semibold text-sm">
                        {project.contractValue}
                      </span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[10px] uppercase text-[#A3A7A1]/70 block mb-1">
                        Client Developer
                      </span>
                      <span className="text-[#F4F2EC] font-medium">
                        {project.client}
                      </span>
                    </div>
                  </div>

                  {/* CTA link */}
                  <div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="btn-arch-secondary group cursor-pointer inline-flex"
                    >
                      <span>Explore Case Study & Specs</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="pt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#F4F2EC]/10">
          <p className="font-display text-xl sm:text-2xl text-[#F4F2EC] font-light">
            Over 92 major projects completed across commercial, civil, and industrial sectors.
          </p>
          <Link
            href="/projects"
            className="btn-arch-primary group cursor-pointer"
          >
            <span>Browse Full Project Archive</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
