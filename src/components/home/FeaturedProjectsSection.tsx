"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export function FeaturedProjectsSection() {
  const featured = PROJECTS.filter((p) => p.featured);

  return (
    <section className="relative bg-[#101312] text-[#F4F2EC] py-28 sm:py-36 border-b border-[#F4F2EC]/10">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-[#F4F2EC]/10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-[#E6532F]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F]">
                Portfolio Showcase
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-[#F4F2EC] tracking-tight">
              Selected Projects
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline font-mono text-xs text-[#B8BAB5]">
              Showing {featured.length} Landmark Deliveries
            </span>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#161B19] hover:bg-[#E6532F] border border-[#F4F2EC]/20 hover:border-[#E6532F] text-xs font-mono uppercase tracking-[0.16em] text-[#F4F2EC] hover:text-white transition-all duration-300 group"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Featured Projects Showcase List */}
        <div className="divide-y divide-[#F4F2EC]/10">
          {featured.map((project, index) => (
            <div
              key={project.id}
              className="py-20 sm:py-24 group relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                {/* Project Image (Takes ~65% width on desktop) */}
                <div
                  className={`lg:col-span-8 overflow-hidden relative ${
                    index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#161B19]"
                  >
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 65vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.92] group-hover:brightness-100"
                    />
                    {/* Architectural framing overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101312]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Sector Badge */}
                    <div className="absolute top-5 left-5 font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 bg-[#101312]/90 backdrop-blur-md border border-[#F4F2EC]/20 text-[#F4F2EC]">
                      {project.sector}
                    </div>

                    {/* Completion Tag */}
                    <div className="absolute bottom-5 right-5 font-mono text-[11px] px-3 py-1.5 bg-[#101312]/90 backdrop-blur-md border border-[#F4F2EC]/20 text-[#B8BAB5]">
                      Completed {project.year}
                    </div>
                  </Link>
                </div>

                {/* Project Metadata & Narrative */}
                <div
                  className={`lg:col-span-4 flex flex-col justify-between space-y-6 ${
                    index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3 font-mono text-xs text-[#B8BAB5] mb-2">
                      <span>0{index + 1}</span>
                      <span>/</span>
                      <span className="text-[#E6532F]">{project.location}</span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-[#F4F2EC] tracking-tight group-hover:text-[#E6532F] transition-colors duration-300">
                      <Link href={`/projects/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="mt-4 text-sm text-[#B8BAB5] leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  {/* Technical Specifications Matrix */}
                  <div className="grid grid-cols-2 gap-4 py-5 border-y border-[#F4F2EC]/10 font-mono text-xs">
                    <div>
                      <span className="text-[10px] uppercase text-[#B8BAB5]/60 block mb-1">
                        Built-Up Area
                      </span>
                      <span className="text-[#F4F2EC] font-semibold text-sm">
                        {project.builtUpArea}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-[#B8BAB5]/60 block mb-1">
                        Contract Value
                      </span>
                      <span className="text-[#F4F2EC] font-semibold text-sm">
                        {project.contractValue}
                      </span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-[10px] uppercase text-[#B8BAB5]/60 block mb-1">
                        Client
                      </span>
                      <span className="text-[#B8BAB5] font-medium">
                        {project.client}
                      </span>
                    </div>
                  </div>

                  {/* CTA link */}
                  <div>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-[#F4F2EC] group-hover:text-[#E6532F] transition-colors py-2"
                    >
                      <span>Explore Case Study</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#E6532F] hover:bg-[#d04623] text-white font-mono text-xs uppercase tracking-[0.18em] transition-colors"
          >
            <span>Browse Full Project Archive</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
