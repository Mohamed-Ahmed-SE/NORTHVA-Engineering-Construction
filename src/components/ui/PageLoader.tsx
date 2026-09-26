"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Only run full sequence once per session if desired, or quick 600ms on first load
    const hasLoaded = sessionStorage.getItem("northva_preloaded");
    const targetDuration = hasLoaded ? 400 : 900;
    const intervalTime = targetDuration / 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsFadingOut(true);
          setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem("northva_preloaded", "true");
          }, 450);
          return 100;
        }
        // Accelerating curve
        const step = prev < 50 ? 4 : prev < 85 ? 6 : 3;
        return Math.min(100, prev + step);
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <aside
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Loading NORTHVA Engineering & Construction"
      className={`fixed inset-0 z-[99999] bg-[#0A0D0C] flex flex-col justify-between p-8 sm:p-14 pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isFadingOut ? "opacity-0 -translate-y-4 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Top telemetry bar */}
      <div className="flex items-center justify-between text-[#858A83] font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] border-b border-[#F4F2EC]/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 bg-[#E6532F] animate-pulse" />
          <span className="text-[#F4F2EC]">NORTHVA ENGINEERING & CONSTRUCTION</span>
        </div>
        <div className="hidden sm:flex items-center gap-4">
          <span>LAT 30.0242° N</span>
          <span>//</span>
          <span>LON 31.4721° E</span>
        </div>
      </div>

      {/* Center Branded Monolith Animation */}
      <div className="flex flex-col items-center justify-center my-auto text-center px-4">
        {/* Architectural Emblem with Crosshairs */}
        <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
          <div className="absolute inset-0 border border-[#F4F2EC]/15 animate-spin [animation-duration:12s]" />
          <div className="absolute inset-2 border border-[#E6532F]/30" />
          <div className="w-12 h-12 relative flex items-center justify-center">
            <span className="font-display font-black text-2xl tracking-tighter text-[#F4F2EC]">
              N<span className="text-[#E6532F]">.</span>
            </span>
          </div>
          {/* Subtle crosshairs */}
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-[#E6532F]" />
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-[#E6532F]" />
          <div className="absolute top--2 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-[#E6532F]" />
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-[#E6532F]" />
        </div>

        <div className="font-mono text-5xl sm:text-6xl font-light text-[#F4F2EC] tracking-tighter mb-4 tabular-nums">
          {progress.toString().padStart(3, "0")}
          <span className="text-xl sm:text-2xl text-[#E6532F] ml-1 font-mono">%</span>
        </div>

        <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#A3A7A1] flex items-center gap-2">
          <span>INITIALIZING STRUCTURAL TELEMETRY</span>
          <span className="inline-block w-2 h-[2px] bg-[#E6532F] animate-ping" />
        </div>
      </div>

      {/* Bottom Progress Bar */}
      <div className="w-full space-y-3">
        <div className="w-full h-[2px] bg-[#F4F2EC]/10 overflow-hidden relative">
          <div
            className="h-full bg-gradient-to-r from-[#E6532F] to-[#F4F2EC] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-[#858A83] font-mono text-[9px] uppercase tracking-[0.2em]">
          <span>EGYPT · SAUDI ARABIA · UAE</span>
          <span>EST. 2008 // SCALE: REGIONAL</span>
        </div>
      </div>
    </aside>
  );
}
