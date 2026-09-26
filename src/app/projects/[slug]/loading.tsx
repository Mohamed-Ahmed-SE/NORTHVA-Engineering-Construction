export default function ProjectDetailLoading() {
  return (
    <div className="min-h-screen bg-[#101312] pt-32 pb-36">
      {/* Header Telemetry */}
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-3 w-28 bg-[#1D2421] skeleton-arch" />
          <div className="h-3 w-4 bg-[#1D2421]" />
          <div className="h-3 w-36 bg-[#1D2421]" />
        </div>
        <div className="h-14 w-3/4 max-w-3xl bg-[#1F2724] skeleton-arch mb-4" />
        <div className="h-5 w-1/2 max-w-xl bg-[#171D1A]" />
      </div>

      {/* Hero Visual Skeleton */}
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12 mb-16">
        <div className="aspect-[21/9] w-full bg-[#161D1A] skeleton-arch border border-[#F4F2EC]/10" />
      </div>

      {/* Project Matrix / Specs Grid */}
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 border border-[#F4F2EC]/10 bg-[#121614]">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="space-y-2">
              <div className="h-3 w-20 bg-[#1D2421]" />
              <div className="h-7 w-28 bg-[#252F2B] skeleton-arch" />
            </div>
          ))}
        </div>
      </div>

      {/* Narrative & Engineering Challenges */}
      <div className="max-w-[1520px] mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <div className="h-4 w-full bg-[#171D1A]" />
          <div className="h-4 w-5/6 bg-[#171D1A]" />
          <div className="h-4 w-4/5 bg-[#171D1A]" />
          <div className="h-32 w-full bg-[#131715] border border-[#F4F2EC]/10 skeleton-arch" />
        </div>
        <div className="space-y-4">
          <div className="h-6 w-40 bg-[#1D2421]" />
          <div className="h-48 w-full bg-[#121614] border border-[#F4F2EC]/10 skeleton-arch" />
        </div>
      </div>
    </div>
  );
}
