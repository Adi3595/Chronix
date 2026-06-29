import { Skeleton, SkeletonCard, SkeletonFeedItem } from "@/components/Skeleton";

export default function AgentHubLoading() {
  return (
    <>
      <div className="mb-12 max-w-3xl">
        <Skeleton className="h-[48px] w-96 mb-4" />
        <Skeleton className="h-5 w-full max-w-xl" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left/Main: Agent Cards Grid (Col span 8) */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} className={`p-8 flex flex-col relative min-h-[300px] ${i === 0 ? "md:col-span-2" : ""}`}>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <Skeleton className="w-12 h-12 rounded-full" />
                  <div>
                    <Skeleton className="h-6 w-32" />
                    <Skeleton className="h-3 w-40 mt-2" />
                  </div>
                </div>
                <Skeleton className="h-6 w-16" />
              </div>
              <div className="space-y-4 flex-1 flex flex-col mt-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-10 w-full rounded-xl mt-auto" />
              </div>
            </SkeletonCard>
          ))}
        </div>

        {/* Right Sidebar: Live Collaboration Log (Col span 4) */}
        <div className="lg:col-span-4">
          <SkeletonCard className="sticky top-8 min-h-[800px] flex flex-col">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-outline-variant/30">
              <Skeleton className="w-10 h-10 rounded-full" />
              <div>
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-3 w-48 mt-1" />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonFeedItem key={i} />
              ))}
            </div>
          </SkeletonCard>
        </div>
      </div>
  );
}
