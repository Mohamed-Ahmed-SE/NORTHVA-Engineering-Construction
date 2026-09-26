"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="relative bg-[#101312] text-[#F4F2EC] py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="border border-[#F4F2EC]/15 bg-[#141816]/90 p-8 sm:p-14 lg:p-20 relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#E6532F]/10 blur-3xl pointer-events-none" />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-2 h-2 bg-[#E6532F]" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F]">
                Start A Conversation
              </span>
            </div>

            <h2 className="heading-display font-display font-extrabold uppercase text-[#F4F2EC] tracking-tight">
              Let&apos;s build something <br />
              <span className="text-[#E6532F]">significant.</span>
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-[#B8BAB5] font-light max-w-2xl leading-relaxed">
              Whether you are planning a new commercial development, expanding an industrial facility, or looking for an integrated engineering partner, our regional teams are ready to discuss your project.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#E6532F] text-white font-mono text-xs uppercase tracking-[0.16em] hover:bg-[#d04623] transition-all group shadow-xl shadow-[#E6532F]/20"
              >
                <span>Initiate Tender / Project Discussion</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#101312] border border-[#F4F2EC]/20 text-[#F4F2EC] font-mono text-xs uppercase tracking-[0.16em] hover:border-[#E6532F] hover:text-white transition-all"
              >
                <span>Review Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
