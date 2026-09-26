import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PROJECTS } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | NORTHVA",
    };
  }

  return {
    title: `${project.title} | NORTHVA Engineering & Construction`,
    description: project.summary,
    openGraph: {
      title: `${project.title} - ${project.location}`,
      description: project.summary,
      images: [{ url: project.heroImage }],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = PROJECTS.filter(
    (p) => p.id !== project.id && (p.sector === project.sector || p.featured)
  ).slice(0, 3);

  return (
    <article className="pt-28 sm:pt-36 pb-32 bg-[#101312] text-[#F4F2EC]">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between pb-8 border-b border-[#F4F2EC]/10 text-xs font-mono text-[#B8BAB5]">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 hover:text-[#E6532F] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to Projects Archive</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-[#E6532F]">{project.sector}</span>
            <span>/</span>
            <span>{project.location}</span>
          </div>
        </div>

        {/* Project Title & Tagline */}
        <div className="py-12 sm:py-16">
          <div className="max-w-5xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F] block mb-3">
              Case Study & Technical Report
            </span>
            <h1 className="heading-display font-display font-extrabold uppercase text-[#F4F2EC] tracking-tight">
              {project.title}
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-[#B8BAB5] font-light leading-relaxed max-w-4xl">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Large Hero Photography */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#161B19] border border-[#F4F2EC]/10">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.92]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101312]/80 via-transparent to-transparent opacity-40" />

          {/* Overlay Coordinates */}
          <div className="absolute bottom-6 right-6 font-mono text-[11px] px-3 py-1.5 bg-[#101312]/90 backdrop-blur-sm border border-[#F4F2EC]/20 text-[#B8BAB5]">
            Coordinates: {project.coordinates}
          </div>
        </div>

        {/* Key Metrics / Technical Specifications Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#F4F2EC]/10 border border-[#F4F2EC]/10 my-16 font-mono text-xs">
          <div className="bg-[#121614] p-5">
            <span className="text-[10px] uppercase text-[#B8BAB5]/60 block mb-1">
              Location
            </span>
            <span className="text-[#F4F2EC] font-semibold text-sm">
              {project.location}
            </span>
          </div>
          <div className="bg-[#121614] p-5">
            <span className="text-[10px] uppercase text-[#B8BAB5]/60 block mb-1">
              Client
            </span>
            <span className="text-[#F4F2EC] font-semibold text-sm">
              {project.client}
            </span>
          </div>
          <div className="bg-[#121614] p-5">
            <span className="text-[10px] uppercase text-[#B8BAB5]/60 block mb-1">
              Completion
            </span>
            <span className="text-[#F4F2EC] font-semibold text-sm">
              {project.year}
            </span>
          </div>
          <div className="bg-[#121614] p-5">
            <span className="text-[10px] uppercase text-[#B8BAB5]/60 block mb-1">
              Built-Up Area
            </span>
            <span className="text-[#E6532F] font-semibold text-sm">
              {project.builtUpArea}
            </span>
          </div>
          <div className="bg-[#121614] p-5">
            <span className="text-[10px] uppercase text-[#B8BAB5]/60 block mb-1">
              Contract Value
            </span>
            <span className="text-[#E6532F] font-semibold text-sm">
              {project.contractValue}
            </span>
          </div>
          <div className="bg-[#121614] p-5">
            <span className="text-[10px] uppercase text-[#B8BAB5]/60 block mb-1">
              Status
            </span>
            <span className="text-emerald-400 font-semibold text-sm">
              {project.status}
            </span>
          </div>
        </div>

        {/* Narrative & Engineering Disciplines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-[#F4F2EC]/10">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#E6532F] block mb-3">
                Project Overview
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#F4F2EC]">
                Architectural Intent & Execution
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#B8BAB5] font-light leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="pt-6 border-t border-[#F4F2EC]/10">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#E6532F] block mb-3">
                Engineering Challenges Solved
              </span>
              <p className="text-sm text-[#B8BAB5] leading-relaxed">
                {project.challenges}
              </p>
            </div>

            {/* Engineering Highlights */}
            <div className="pt-6 border-t border-[#F4F2EC]/10">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#E6532F] block mb-4">
                Key Structural & Operational Highlights
              </span>
              <ul className="space-y-3 font-mono text-xs text-[#F4F2EC]">
                {project.engineeringHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#E6532F] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Technical Rail (Right Column) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Services Delivered */}
            <div className="bg-[#141816] border border-[#F4F2EC]/15 p-6 sm:p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#E6532F] mb-4">
                Services Delivered
              </h3>
              <ul className="space-y-2.5 font-mono text-xs text-[#F4F2EC]">
                {project.services.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-2 pb-2 border-b border-[#F4F2EC]/5">
                    <span className="w-1.5 h-1.5 bg-[#E6532F]" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specifications */}
            <div className="bg-[#141816] border border-[#F4F2EC]/15 p-6 sm:p-8">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#E6532F] mb-4">
                Detailed Technical Specs
              </h3>
              <div className="divide-y divide-[#F4F2EC]/10 font-mono text-xs">
                {project.technicalSpecs.map((spec, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between">
                    <span className="text-[#B8BAB5]/70">{spec.label}</span>
                    <span className="text-[#F4F2EC] font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Multi-Image Gallery Showcase */}
        {project.galleryImages.length > 0 && (
          <div className="py-20 border-b border-[#F4F2EC]/10">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-6 h-[1px] bg-[#E6532F]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F]">
                Visual Documentation & Field Records
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.galleryImages.map((imgUrl, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden bg-[#161B19] border border-[#F4F2EC]/10 group"
                >
                  <Image
                    src={imgUrl}
                    alt={`${project.title} documentation view ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                  />
                  <div className="absolute bottom-3 left-3 font-mono text-[10px] px-2 py-1 bg-[#101312]/90 backdrop-blur-sm border border-[#F4F2EC]/15 text-[#B8BAB5]">
                    Plate 0{i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Projects */}
        <div className="pt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F] block mb-2">
                Related Deliveries
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#F4F2EC]">
                Explore Similar Projects
              </h3>
            </div>
            <Link
              href="/projects"
              className="font-mono text-xs uppercase tracking-wider text-[#E6532F] hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>View All Works</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#F4F2EC]/10 border border-[#F4F2EC]/10">
            {relatedProjects.map((rel) => (
              <div
                key={rel.id}
                className="bg-[#101312] p-6 flex flex-col justify-between group hover:bg-[#141816] transition-colors"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden mb-4 bg-[#161B19]">
                    <Image
                      src={rel.heroImage}
                      alt={rel.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="font-mono text-[10px] text-[#E6532F] uppercase block mb-1">
                    {rel.sector} · {rel.location}
                  </span>
                  <h4 className="font-display text-lg font-bold uppercase text-[#F4F2EC] group-hover:text-[#E6532F] transition-colors">
                    <Link href={`/projects/${rel.slug}`}>{rel.title}</Link>
                  </h4>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F4F2EC]/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#B8BAB5]">{rel.builtUpArea}</span>
                  <Link
                    href={`/projects/${rel.slug}`}
                    className="text-[#E6532F] hover:underline"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
