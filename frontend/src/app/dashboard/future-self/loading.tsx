import { Skeleton, SkeletonCard, SkeletonChart } from "@/components/Skeleton";

export default function FutureSelfLoading() {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <Skeleton className="h-10 w-44 mb-3" />
        <Skeleton className="h-5 w-72" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Trajectory chart */}
        <SkeletonCard className="md:col-span-2">
          <Skeleton className="h-3 w-40 mb-4" />
          <SkeletonChart className="min-h-[240px]" />
        </SkeletonCard>

        {/* Optimised path */}
        <SkeletonCard className="space-y-4">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-14 w-14 rounded-full mx-auto" />
          <Skeleton className="h-6 w-20 mx-auto" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </SkeletonCard>

        {/* Current path */}
        <SkeletonCard className="space-y-4">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-14 w-14 rounded-full mx-auto" />
          <Skeleton className="h-6 w-20 mx-auto" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </SkeletonCard>
      </div>
    </>
  );
}
