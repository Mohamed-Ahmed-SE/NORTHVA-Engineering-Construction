export default function ProjectsLoading() {
  return (
    <div className="min-h-screen bg-[#101312] pt-36 pb-28 px-6 sm:px-8 lg:px-12 max-w-[1520px] mx-auto">
      {/* Top Banner Skeleton */}
      <div className="border-b border-[#F4F2EC]/10 pb-14 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-[#E6532F]" />
          <div className="h-3 w-32 bg-[#1A211E] skeleton-arch" />
        </div>
        <div className="h-12 w-3/4 max-w-2xl bg-[#1D2421] skeleton-arch mb-6" />
        <div className="h-4 w-full max-w-xl bg-[#161B19]" />
      </div>

      {/* Filter Tabs Skeleton */}
      <div className="flex flex-wrap gap-2 mb-12 border-b border-[#F4F2EC]/10 pb-6">
        {[1, 2, 3, 4, 5, 6, 7].map((tab) => (
          <div key={tab} className="h-9 w-28 bg-[#161B19] border border-[#F4F2EC]/10 skeleton-arch" />
        ))}
      </div>

      {/* Projects Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((idx) => (
          <div
            key={idx}
            className="border border-[#F4F2EC]/10 bg-[#131715] flex flex-col overflow-hidden"
          >
            <div className="relative aspect-[16/10] w-full bg-[#1A211E] skeleton-arch" />
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-20 bg-[#252E2A]" />
                  <div className="h-3 w-16 bg-[#252E2A]" />
                </div>
                <div className="h-6 w-5/6 bg-[#252E2A] skeleton-arch" />
                <div className="h-3 w-full bg-[#181E1B]" />
              </div>
              <div className="pt-4 border-t border-[#F4F2EC]/10 flex items-center justify-between">
                <div className="h-3 w-24 bg-[#1F2623]" />
                <div className="h-3 w-12 bg-[#1F2623]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
