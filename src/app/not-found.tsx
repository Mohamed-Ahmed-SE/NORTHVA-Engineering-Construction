import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] bg-[#101312] flex items-center justify-center pt-28 pb-20 px-6 sm:px-8 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center border border-[#F4F2EC]/10 bg-[#131715]/80 backdrop-blur-md p-10 sm:p-14">
        {/* Telemetry Tag */}
        <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#101312] border border-[#F4F2EC]/15 font-mono text-[11px] uppercase tracking-widest text-[#E6532F] mb-8">
          <Compass className="w-3.5 h-3.5 animate-spin [animation-duration:16s]" />
          <span>ERROR CODE // 404_TERRAIN_NOT_FOUND</span>
        </div>

        <h1 className="font-display font-extrabold text-6xl sm:text-7xl text-[#F4F2EC] tracking-tight leading-none mb-6">
          UNMAPPED <span className="text-[#E6532F]">ZONE.</span>
        </h1>

        <p className="text-sm sm:text-base text-[#A3A7A1] leading-relaxed max-w-lg mx-auto mb-10 font-normal">
          The requested engineering coordinate does not exist or has been relocated within the master structural schedule. Return to active project sectors.
        </p>

        {/* Quick Navigation Action Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <Link
            href="/projects"
            className="flex items-center justify-between p-4 border border-[#F4F2EC]/10 bg-[#101312] hover:border-[#E6532F] transition-all group text-left"
          >
            <div>
              <div className="font-mono text-[10px] text-[#A3A7A1] uppercase tracking-wider">Explore</div>
              <div className="font-display text-sm font-bold uppercase text-[#F4F2EC] group-hover:text-[#E6532F] transition-colors">
                Project Archive
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#A3A7A1] group-hover:text-[#E6532F] transition-colors" />
          </Link>

          <Link
            href="/services"
            className="flex items-center justify-between p-4 border border-[#F4F2EC]/10 bg-[#101312] hover:border-[#E6532F] transition-all group text-left"
          >
            <div>
              <div className="font-mono text-[10px] text-[#A3A7A1] uppercase tracking-wider">Review</div>
              <div className="font-display text-sm font-bold uppercase text-[#F4F2EC] group-hover:text-[#E6532F] transition-colors">
                Core Disciplines
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#A3A7A1] group-hover:text-[#E6532F] transition-colors" />
          </Link>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#F4F2EC] hover:text-[#E6532F] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
}
