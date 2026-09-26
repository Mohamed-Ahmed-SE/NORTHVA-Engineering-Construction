"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] bg-[#101312] flex items-center justify-center pt-28 pb-20 px-6 sm:px-8">
      <div className="max-w-xl mx-auto text-center border border-[#F4F2EC]/10 bg-[#131715] p-10 sm:p-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#101312] border border-[#E6532F]/40 font-mono text-[11px] uppercase tracking-widest text-[#E6532F] mb-6">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>RUNTIME EXCEPTION // FAULT DETECTED</span>
        </div>

        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-[#F4F2EC] uppercase tracking-tight mb-4">
          SYSTEM INTERRUPT.
        </h1>

        <p className="text-sm text-[#A3A7A1] leading-relaxed mb-8 font-light">
          An unexpected variance occurred during component rendering. The engineering state has been captured.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#E6532F] text-white font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#ff6138] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reinitialize View</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#F4F2EC]/20 text-[#F4F2EC] font-mono text-xs uppercase tracking-wider hover:border-[#E6532F] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
