"use client";

import { useState } from "react";
import { REGIONAL_OFFICES } from "@/data/company";
import { ArrowUpRight, CheckCircle2, MapPin, Phone, Mail } from "lucide-react";

export function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "Commercial / Mixed-Use",
    estimatedScale: "50,000 - 100,000 m²",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      {/* Left Column: Regional Offices */}
      <div className="lg:col-span-5 space-y-10">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#E6532F] block mb-2">
            Regional Hubs
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#F4F2EC]">
            Our Offices
          </h2>
          <p className="mt-2 text-sm text-[#B8BAB5]">
            Direct presence in three primary regional construction epicenters.
          </p>
        </div>

        <div className="space-y-6">
          {REGIONAL_OFFICES.map((office) => (
            <div
              key={office.id}
              className="p-6 bg-[#141816] border border-[#F4F2EC]/10 hover:border-[#E6532F]/50 transition-colors"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#F4F2EC]/10 font-mono text-xs">
                <span className="text-[#E6532F] uppercase font-bold">{office.country}</span>
                <span className="text-[#B8BAB5]">{office.city}</span>
              </div>

              <h3 className="font-display text-lg font-bold uppercase text-[#F4F2EC] mt-3">
                {office.name}
              </h3>

              <div className="mt-4 space-y-2.5 font-mono text-xs text-[#B8BAB5]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#E6532F] shrink-0 mt-0.5" />
                  <span>{office.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#E6532F] shrink-0" />
                  <span>{office.phone}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#E6532F] shrink-0" />
                  <a href={`mailto:${office.email}`} className="hover:text-[#F4F2EC] transition-colors">
                    {office.email}
                  </a>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#F4F2EC]/5 text-[10px] font-mono text-[#B8BAB5]/50">
                Coords: {office.coordinates}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Interactive RFP / Project Inquiry Form */}
      <div className="lg:col-span-7 bg-[#141816] border border-[#F4F2EC]/15 p-8 sm:p-12">
        <div className="mb-8">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#E6532F] block mb-2">
            Initiate Contact
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-[#F4F2EC]">
            Project Consultation & RFP
          </h3>
          <p className="mt-2 text-sm text-[#B8BAB5]">
            Fill in your project parameters. A commercial director will review and coordinate within 24 hours.
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-8 sm:p-12 border border-[#E6532F]/50 bg-[#101312] text-center space-y-4">
            <CheckCircle2 className="w-12 h-12 text-[#E6532F] mx-auto" />
            <h4 className="font-display text-2xl font-bold uppercase text-[#F4F2EC]">
              Inquiry Dispatched Successfully
            </h4>
            <p className="text-sm text-[#B8BAB5] max-w-lg mx-auto">
              Thank you, <strong className="text-[#F4F2EC]">{formData.name}</strong>. Your project inquiry on behalf of <strong className="text-[#F4F2EC]">{formData.company}</strong> has been logged. Our commercial estimating team will reach out to schedule an initial project scoping call.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  company: "",
                  email: "",
                  phone: "",
                  projectType: "Commercial / Mixed-Use",
                  estimatedScale: "50,000 - 100,000 m²",
                  message: "",
                });
              }}
              className="mt-6 px-6 py-2.5 bg-[#161B19] border border-[#F4F2EC]/20 text-xs font-mono uppercase tracking-wider text-[#F4F2EC] hover:border-[#E6532F]"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-[#B8BAB5] uppercase tracking-wider block">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Eng. Hisham Fawzy"
                  className="w-full bg-[#101312] border border-[#F4F2EC]/15 px-4 py-3 text-[#F4F2EC] placeholder:text-[#B8BAB5]/40 focus:outline-none focus:border-[#E6532F] transition-colors"
                />
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label className="text-[#B8BAB5] uppercase tracking-wider block">
                  Company / Organization *
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Apex Real Estate Developments"
                  className="w-full bg-[#101312] border border-[#F4F2EC]/15 px-4 py-3 text-[#F4F2EC] placeholder:text-[#B8BAB5]/40 focus:outline-none focus:border-[#E6532F] transition-colors"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-[#B8BAB5] uppercase tracking-wider block">
                  Work Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="hfawzy@apex-dev.com"
                  className="w-full bg-[#101312] border border-[#F4F2EC]/15 px-4 py-3 text-[#F4F2EC] placeholder:text-[#B8BAB5]/40 focus:outline-none focus:border-[#E6532F] transition-colors"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="text-[#B8BAB5] uppercase tracking-wider block">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+20 100 123 4567"
                  className="w-full bg-[#101312] border border-[#F4F2EC]/15 px-4 py-3 text-[#F4F2EC] placeholder:text-[#B8BAB5]/40 focus:outline-none focus:border-[#E6532F] transition-colors"
                />
              </div>

              {/* Project Type */}
              <div className="space-y-2">
                <label className="text-[#B8BAB5] uppercase tracking-wider block">
                  Project Sector / Type *
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-[#101312] border border-[#F4F2EC]/15 px-4 py-3 text-[#F4F2EC] focus:outline-none focus:border-[#E6532F] transition-colors cursor-pointer"
                >
                  <option value="Commercial / Mixed-Use">Commercial / Mixed-Use</option>
                  <option value="Residential Development">Residential Development</option>
                  <option value="Hospitality & Resorts">Hospitality & Resorts</option>
                  <option value="Healthcare & Hospitals">Healthcare & Hospitals</option>
                  <option value="Industrial & Logistics">Industrial & Logistics</option>
                  <option value="Civil Infrastructure & Marine">Civil Infrastructure & Marine</option>
                </select>
              </div>

              {/* Estimated Scale */}
              <div className="space-y-2">
                <label className="text-[#B8BAB5] uppercase tracking-wider block">
                  Estimated Built-Up Area
                </label>
                <select
                  value={formData.estimatedScale}
                  onChange={(e) => setFormData({ ...formData, estimatedScale: e.target.value })}
                  className="w-full bg-[#101312] border border-[#F4F2EC]/15 px-4 py-3 text-[#F4F2EC] focus:outline-none focus:border-[#E6532F] transition-colors cursor-pointer"
                >
                  <option value="Under 25,000 m²">Under 25,000 m²</option>
                  <option value="25,000 - 50,000 m²">25,000 - 50,000 m²</option>
                  <option value="50,000 - 150,000 m²">50,000 - 150,000 m²</option>
                  <option value="150,000+ m²">150,000+ m² (Mega-Project)</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-[#B8BAB5] uppercase tracking-wider block">
                Project Scope & Requirements *
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe project site location, procurement model (General Contracting / Design-Build), target commencement date, and key engineering objectives..."
                className="w-full bg-[#101312] border border-[#F4F2EC]/15 px-4 py-3 text-[#F4F2EC] placeholder:text-[#B8BAB5]/40 focus:outline-none focus:border-[#E6532F] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-10 py-4 bg-[#E6532F] hover:bg-[#d04623] text-white font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-3"
            >
              <span>{isSubmitting ? "Dispatching..." : "Transmit Project Inquiry"}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
