import {
  Skeleton,
  SkeletonCard,
} from "@/components/Skeleton";

export default function GoalsLoading() {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <Skeleton className="h-10 w-36 mb-3" />
        <Skeleton className="h-5 w-56" />
      </div>

      {/* Add goal button */}
      <Skeleton className="h-12 w-40 rounded-xl mb-8" />

      {/* Goal cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonCard key={i} className="space-y-4">
            {/* Title */}
            <div className="flex justify-between items-start">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-5 w-16 rounded-full" />
            </div>
            {/* Description */}
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            {/* Progress bar */}
            <div>
              <div className="flex justify-between mb-1">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-3 w-10" />
              </div>
              <Skeleton className="h-2 w-full rounded-full" />
            </div>
            {/* Tasks count */}
            <Skeleton className="h-3 w-32" />
          </SkeletonCard>
        ))}
      </div>
    </>
  );
}
