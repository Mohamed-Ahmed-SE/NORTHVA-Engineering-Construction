import type { Metadata } from "next";
import { ContactClient } from "@/components/contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact & Regional Hubs | NORTHVA Engineering & Construction",
  description:
    "Get in touch with NORTHVA Engineering & Construction. Regional headquarters in New Cairo, Egypt, with regional offices in Riyadh, Saudi Arabia, and Dubai, UAE.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 sm:pt-36 pb-32 bg-[#101312] text-[#F4F2EC]">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Page Hero */}
        <div className="pb-16 sm:pb-20 border-b border-[#F4F2EC]/10 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#E6532F]" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#E6532F]">
              Direct Engagement
            </span>
          </div>

          <h1 className="heading-hero font-display font-extrabold uppercase text-[#F4F2EC] tracking-tight">
            Let&apos;s Build Something <br />
            <span className="text-[#E6532F]">Significant.</span>
          </h1>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-[#F4F2EC]/10">
            <div className="lg:col-span-7">
              <p className="text-xl sm:text-2xl text-[#F4F2EC] font-light leading-relaxed">
                Whether you are planning a new development, expanding an existing facility, or looking for a construction partner, our team is ready to discuss your project.
              </p>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm text-[#B8BAB5] leading-relaxed">
                Our pre-construction and commercial directors provide rapid evaluation for major tenders across Egypt, the Kingdom of Saudi Arabia, and the United Arab Emirates.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Client Layout */}
        <ContactClient />
      </div>
    </div>
  );
}
