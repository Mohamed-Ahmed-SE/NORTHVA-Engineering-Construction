"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, CheckCircle2, UploadCloud, ArrowUpRight } from "lucide-react";
import { CAREER_POSITIONS, JobPosition } from "@/data/careers";

export function CareersClient() {
  const [expandedJobId, setExpandedJobId] = useState<string | null>(CAREER_POSITIONS[0].id);
  const [selectedPosition, setSelectedPosition] = useState<string>(CAREER_POSITIONS[0].title);

  // Application form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: CAREER_POSITIONS[0].title,
    experience: "5-8 Years",
    linkedin: "",
    coverLetter: "",
    fileName: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleJob = (id: string, title: string) => {
    if (expandedJobId === id) {
      setExpandedJobId(null);
    } else {
      setExpandedJobId(id);
      setSelectedPosition(title);
      setFormData((prev) => ({ ...prev, position: title }));
    }
  };

  const handleApplyClick = (title: string) => {
    setSelectedPosition(title);
    setFormData((prev) => ({ ...prev, position: title }));
    const formElement = document.getElementById("application-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, fileName: e.target.files![0].name }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="space-y-24">
      {/* Vacancies Section */}
      <div>
        <div className="flex items-center justify-between pb-8 border-b border-[#F4F2EC]/10 mb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#E6532F] block mb-2">
              Current Vacancies
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#F4F2EC]">
              Open Engineering Roles ({CAREER_POSITIONS.length})
            </h2>
          </div>
          <span className="hidden sm:inline font-mono text-xs text-[#B8BAB5]">
            Direct Hiring by NORTHVA Human Resources
          </span>
        </div>

        {/* Expandable Vacancies Accordion */}
        <div className="divide-y divide-[#F4F2EC]/10 border-y border-[#F4F2EC]/10">
          {CAREER_POSITIONS.map((job) => {
            const isExpanded = expandedJobId === job.id;
            return (
              <div key={job.id} className="transition-colors hover:bg-[#141816]">
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleJob(job.id, job.title)}
                  className="w-full py-8 text-left flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer px-4 sm:px-6"
                >
                  <div className="flex items-start md:items-center gap-6">
                    <span className="font-mono text-xs text-[#E6532F] font-bold mt-1 md:mt-0">
                      [{job.department}]
                    </span>
                    <div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-[#F4F2EC]">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-1 font-mono text-xs text-[#B8BAB5]">
                        <span>{job.location}</span>
                        <span>·</span>
                        <span>{job.experience} Exp.</span>
                        <span>·</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 ml-auto md:ml-0">
                    <span className="text-xs font-mono uppercase text-[#E6532F] hidden sm:inline">
                      {isExpanded ? "Collapse Role" : "View Details"}
                    </span>
                    <div className="w-8 h-8 border border-[#F4F2EC]/20 flex items-center justify-center text-[#F4F2EC]">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="px-4 sm:px-6 pb-10 pt-2 border-t border-[#F4F2EC]/5 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8 space-y-6">
                      <p className="text-sm sm:text-base text-[#F4F2EC] leading-relaxed font-light">
                        {job.description}
                      </p>

                      <div>
                        <span className="font-mono text-xs uppercase tracking-wider text-[#E6532F] block mb-3">
                          Key Responsibilities:
                        </span>
                        <ul className="space-y-2 font-mono text-xs text-[#B8BAB5]">
                          {job.responsibilities.map((r, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 bg-[#E6532F] mt-1.5 shrink-0" />
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="font-mono text-xs uppercase tracking-wider text-[#E6532F] block mb-3">
                          Required Qualifications & Competencies:
                        </span>
                        <ul className="space-y-2 font-mono text-xs text-[#B8BAB5]">
                          {job.qualifications.map((q, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 bg-[#E6532F] mt-1.5 shrink-0" />
                              <span>{q}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="lg:col-span-4 bg-[#101312] p-6 border border-[#F4F2EC]/10 flex flex-col justify-between">
                      <div className="space-y-4 font-mono text-xs">
                        <span className="text-[#E6532F] block uppercase tracking-widest text-[10px]">
                          Quick Overview
                        </span>
                        <div className="space-y-2 text-[#B8BAB5]">
                          <p><strong className="text-[#F4F2EC]">Location:</strong> {job.location}</p>
                          <p><strong className="text-[#F4F2EC]">Contract:</strong> Direct Permanent Staff</p>
                          <p><strong className="text-[#F4F2EC]">Experience:</strong> {job.experience}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleApplyClick(job.title)}
                        className="mt-8 w-full py-3.5 bg-[#E6532F] hover:bg-[#d04623] text-white font-mono text-xs uppercase tracking-[0.16em] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Apply For Position</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Professional Application Form */}
      <div id="application-form" className="scroll-mt-28">
        <div className="bg-[#141816] border border-[#F4F2EC]/15 p-8 sm:p-14">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#E6532F] block mb-2">
              Application Portal
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase text-[#F4F2EC]">
              Submit Your Candidacy
            </h3>
            <p className="mt-3 text-sm text-[#B8BAB5] font-light">
              Submit your curriculum vitae and engineering credentials. Our technical recruitment committee evaluates all submissions directly.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 sm:p-12 border border-[#E6532F]/50 bg-[#101312] text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-[#E6532F] mx-auto" />
              <h4 className="font-display text-2xl font-bold uppercase text-[#F4F2EC]">
                Application Received Successfully
              </h4>
              <p className="text-sm text-[#B8BAB5] max-w-lg mx-auto">
                Thank you, <strong className="text-[#F4F2EC]">{formData.fullName}</strong>. Your submission for the <strong className="text-[#E6532F]">{formData.position}</strong> role has been registered. Our HR talent directorate will review your qualifications and contact you shortly.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    fullName: "",
                    email: "",
                    phone: "",
                    position: CAREER_POSITIONS[0].title,
                    experience: "5-8 Years",
                    linkedin: "",
                    coverLetter: "",
                    fileName: "",
                  });
                }}
                className="mt-6 px-6 py-2.5 bg-[#161B19] border border-[#F4F2EC]/20 text-xs font-mono uppercase tracking-wider text-[#F4F2EC] hover:border-[#E6532F]"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-[#B8BAB5] uppercase tracking-wider block">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Eng. Tarek Mansour"
                    className="w-full bg-[#101312] border border-[#F4F2EC]/15 px-4 py-3 text-[#F4F2EC] placeholder:text-[#B8BAB5]/40 focus:outline-none focus:border-[#E6532F] transition-colors"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-[#B8BAB5] uppercase tracking-wider block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tarek.m@example.com"
                    className="w-full bg-[#101312] border border-[#F4F2EC]/15 px-4 py-3 text-[#F4F2EC] placeholder:text-[#B8BAB5]/40 focus:outline-none focus:border-[#E6532F] transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label className="text-[#B8BAB5] uppercase tracking-wider block">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+20 100 000 0000"
                    className="w-full bg-[#101312] border border-[#F4F2EC]/15 px-4 py-3 text-[#F4F2EC] placeholder:text-[#B8BAB5]/40 focus:outline-none focus:border-[#E6532F] transition-colors"
                  />
                </div>

                {/* Position */}
                <div className="space-y-2">
                  <label className="text-[#B8BAB5] uppercase tracking-wider block">
                    Applying Position *
                  </label>
                  <select
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full bg-[#101312] border border-[#F4F2EC]/15 px-4 py-3 text-[#F4F2EC] focus:outline-none focus:border-[#E6532F] transition-colors cursor-pointer"
                  >
                    {CAREER_POSITIONS.map((p) => (
                      <option key={p.id} value={p.title} className="bg-[#101312]">
                        {p.title} ({p.location})
                      </option>
                    ))}
                    <option value="General Engineering Application" className="bg-[#101312]">
                      General Engineering Application
                    </option>
                  </select>
                </div>

                {/* Years of Experience */}
                <div className="space-y-2">
                  <label className="text-[#B8BAB5] uppercase tracking-wider block">
                    Years of Relevant Experience *
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full bg-[#101312] border border-[#F4F2EC]/15 px-4 py-3 text-[#F4F2EC] focus:outline-none focus:border-[#E6532F] transition-colors cursor-pointer"
                  >
                    <option value="1-3 Years">1 - 3 Years</option>
                    <option value="4-7 Years">4 - 7 Years</option>
                    <option value="8-12 Years">8 - 12 Years</option>
                    <option value="12+ Years">12+ Years</option>
                  </select>
                </div>

                {/* LinkedIn Profile */}
                <div className="space-y-2">
                  <label className="text-[#B8BAB5] uppercase tracking-wider block">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="url"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full bg-[#101312] border border-[#F4F2EC]/15 px-4 py-3 text-[#F4F2EC] placeholder:text-[#B8BAB5]/40 focus:outline-none focus:border-[#E6532F] transition-colors"
                  />
                </div>
              </div>

              {/* CV Upload */}
              <div className="space-y-2">
                <label className="text-[#B8BAB5] uppercase tracking-wider block">
                  CV / Resume (PDF / DOCX up to 10MB) *
                </label>
                <div className="border border-dashed border-[#F4F2EC]/20 bg-[#101312] p-6 text-center hover:border-[#E6532F] transition-colors cursor-pointer relative">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required={!formData.fileName}
                    onChange={handleFileChange}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <UploadCloud className="w-8 h-8 text-[#E6532F] mx-auto mb-2" />
                  <p className="text-xs text-[#F4F2EC]">
                    {formData.fileName ? (
                      <span className="text-[#E6532F] font-bold">Selected: {formData.fileName}</span>
                    ) : (
                      "Click or drag file to attach your Resume"
                    )}
                  </p>
                  <span className="text-[10px] text-[#B8BAB5]/60 mt-1 block">
                    Supported formats: PDF, DOC, DOCX
                  </span>
                </div>
              </div>

              {/* Cover Letter */}
              <div className="space-y-2">
                <label className="text-[#B8BAB5] uppercase tracking-wider block">
                  Cover Letter / Brief Engineering Summary
                </label>
                <textarea
                  rows={4}
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  placeholder="Outline key major projects you have delivered and structural or MEP software proficiencies..."
                  className="w-full bg-[#101312] border border-[#F4F2EC]/15 px-4 py-3 text-[#F4F2EC] placeholder:text-[#B8BAB5]/40 focus:outline-none focus:border-[#E6532F] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-arch-primary group cursor-pointer disabled:opacity-50"
              >
                <span>{isSubmitting ? "Submitting Application..." : "Submit Application"}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
