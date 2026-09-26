"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Projects", href: "/projects" },
  { label: "Expertise", href: "/expertise" },
  { label: "About", href: "/about" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Careers", href: "/careers" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#101312]/92 backdrop-blur-md border-b border-[#F4F2EC]/10 py-4 shadow-2xl shadow-black/40"
            : "bg-transparent py-6 lg:py-8 border-b border-transparent"
        }`}
      >
        <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="NORTHVA Engineering & Construction Home"
          >
            {/* Geometric architectural mark */}
            <div className="relative w-8 h-8 flex items-center justify-center border border-[#F4F2EC]/30 group-hover:border-[#E6532F] transition-colors duration-300">
              <span className="w-2.5 h-2.5 bg-[#E6532F] transition-transform duration-300 group-hover:scale-125" />
              <span className="absolute -top-0.5 -right-0.5 w-1 h-1 bg-[#F4F2EC]/70" />
              <span className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-[#F4F2EC]/70" />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl lg:text-2xl tracking-[-0.03em] text-[#F4F2EC] group-hover:text-white transition-colors">
                NORTHVA
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#B8BAB5] -mt-1 font-mono">
                Engineering & Const.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-11">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative group py-1 text-sm tracking-[0.05em] uppercase font-mono font-normal transition-colors duration-300"
                >
                  <span
                    className={`transition-colors duration-200 ${
                      isActive ? "text-[#E6532F]" : "text-[#B8BAB5] hover:text-[#F4F2EC]"
                    }`}
                  >
                    {link.label}
                  </span>
                  {/* Subtle underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#E6532F] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-[#161B19] hover:bg-[#E6532F] border border-[#F4F2EC]/20 hover:border-[#E6532F] text-xs uppercase tracking-[0.14em] font-mono text-[#F4F2EC] hover:text-white transition-all duration-300 group"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative p-2.5 text-[#F4F2EC] border border-[#F4F2EC]/20 focus:outline-none"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#E6532F]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#101312] transition-all duration-500 md:hidden flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col space-y-6">
          <p className="font-mono text-xs text-[#E6532F] tracking-[0.2em] uppercase">Navigation</p>
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between text-3xl font-display font-bold text-[#F4F2EC] hover:text-[#E6532F] border-b border-[#F4F2EC]/10 pb-3 transition-colors"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-[#B8BAB5] group-hover:text-[#E6532F]">
                  0{idx + 1}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col space-y-6 pt-6 border-t border-[#F4F2EC]/10">
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-4 bg-[#E6532F] text-white font-mono text-xs uppercase tracking-[0.2em] font-medium"
          >
            <span>Let&apos;s Build Together</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
          <div className="flex justify-between items-center text-xs font-mono text-[#B8BAB5]">
            <span>Cairo · Riyadh · Dubai</span>
            <span>Est. 2008</span>
          </div>
        </div>
      </div>
    </>
  );
}
