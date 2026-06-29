import { Skeleton, SkeletonCard, SkeletonListItem } from "@/components/Skeleton";

export default function RescueCenterLoading() {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-6 pb-12">
        <div className="flex-1 flex flex-col gap-8">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-outline-variant/50">
            <div>
              <Skeleton className="h-6 w-40 rounded-full mb-4" />
              <Skeleton className="h-[48px] w-96 mb-2" />
              <Skeleton className="h-6 w-full max-w-2xl" />
            </div>
            <Skeleton className="h-12 w-48 rounded-lg" />
          </header>

          {/* Status Cards (Bento Mini) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonCard key={i} className="p-6 h-40 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <Skeleton className="h-3 w-32" />
                  <Skeleton className="h-6 w-6 rounded-full" />
                </div>
                <div className="mt-auto">
                  <Skeleton className="h-10 w-24 mb-2" />
                  <Skeleton className="h-3 w-full" />
                </div>
              </SkeletonCard>
            ))}
          </div>

          {/* Primary Section: The Recovery Roadmap */}
          <SkeletonCard className="p-8 mt-4">
            <Skeleton className="h-8 w-64 mb-8" />
            <div className="space-y-10 pl-6 border-l-2 border-surface-variant">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="relative">
                  <Skeleton className="absolute -left-[35px] top-1 w-4 h-4 rounded-full" />
                  <Skeleton className="h-4 w-48 mb-2" />
                  <Skeleton className="h-6 w-64 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </SkeletonCard>
        </div>
      </div>
    </>
  );
}
