export default function ServicesLoading() {
  return (
    <div className="min-h-screen bg-[#101312] pt-36 pb-28 px-6 sm:px-8 lg:px-12 max-w-[1520px] mx-auto">
      <div className="border-b border-[#F4F2EC]/10 pb-12 mb-16">
        <div className="h-3 w-36 bg-[#1D2421] skeleton-arch mb-4" />
        <div className="h-12 w-2/3 max-w-xl bg-[#1F2724] skeleton-arch mb-4" />
        <div className="h-4 w-1/2 max-w-lg bg-[#161B19]" />
      </div>

      <div className="space-y-12">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 border border-[#F4F2EC]/10 bg-[#121614]"
          >
            <div className="space-y-4">
              <div className="h-4 w-16 bg-[#E6532F]/20" />
              <div className="h-8 w-3/4 bg-[#1F2724] skeleton-arch" />
              <div className="h-4 w-full bg-[#161B19]" />
              <div className="h-4 w-5/6 bg-[#161B19]" />
              <div className="grid grid-cols-2 gap-2 pt-4">
                {[1, 2, 3, 4].map((cap) => (
                  <div key={cap} className="h-3 w-32 bg-[#19201D]" />
                ))}
              </div>
            </div>
            <div className="aspect-[16/10] bg-[#181E1B] skeleton-arch border border-[#F4F2EC]/10" />
          </div>
        ))}
      </div>
    </div>
  );
}
