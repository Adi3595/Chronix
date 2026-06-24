import { Skeleton, SkeletonCard, SkeletonFeedItem } from "@/components/Skeleton";

export default function AgentHubLoading() {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <Skeleton className="h-10 w-40 mb-3" />
        <Skeleton className="h-5 w-64" />
      </div>

      {/* Agent cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <SkeletonCard key={i} className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Skeleton className="w-12 h-12 rounded-full" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-5 w-24" />
                <Skeleton className="h-3 w-16 rounded-full" />
              </div>
            </div>
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-9 w-full rounded-xl mt-auto" />
          </SkeletonCard>
        ))}
      </div>

      {/* Activity log */}
      <SkeletonCard>
        <Skeleton className="h-3 w-32 mb-6" />
        <div className="relative pl-4 border-l-2 border-surface-variant space-y-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <SkeletonFeedItem key={i} />
          ))}
        </div>
      </SkeletonCard>
    </>
  );
}
