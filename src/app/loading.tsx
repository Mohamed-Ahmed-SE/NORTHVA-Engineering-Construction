export default function Loading() {
  return (
    <div className="min-h-screen bg-[#101312] pt-32 pb-24 px-6 sm:px-8 lg:px-12 max-w-[1520px] mx-auto animate-pulse">
      {/* Header Skeleton */}
      <div className="space-y-4 mb-16 border-b border-[#F4F2EC]/10 pb-12">
        <div className="h-3 w-40 bg-[#1D2421] rounded-none skeleton-arch" />
        <div className="h-12 w-2/3 max-w-xl bg-[#1D2421] rounded-none skeleton-arch" />
        <div className="h-4 w-1/2 max-w-md bg-[#161B19] rounded-none" />
      </div>

      {/* Grid of Shimmer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="border border-[#F4F2EC]/10 bg-[#131715] p-6 space-y-5"
          >
            <div className="aspect-[16/10] w-full bg-[#1D2421] skeleton-arch" />
            <div className="flex justify-between items-center pt-2">
              <div className="h-3 w-24 bg-[#1D2421]" />
              <div className="h-3 w-16 bg-[#1D2421]" />
            </div>
            <div className="h-6 w-3/4 bg-[#252E2A]" />
            <div className="space-y-2">
              <div className="h-3 w-full bg-[#1A211E]" />
              <div className="h-3 w-5/6 bg-[#1A211E]" />
            </div>
            <div className="pt-4 border-t border-[#F4F2EC]/10 flex justify-between">
              <div className="h-3 w-20 bg-[#1D2421]" />
              <div className="h-3 w-20 bg-[#1D2421]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
