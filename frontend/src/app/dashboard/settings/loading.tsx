import { Skeleton, SkeletonCard, SkeletonAvatarRow } from "@/components/Skeleton";

export default function SettingsLoading() {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <Skeleton className="h-10 w-32 mb-3" />
        <Skeleton className="h-5 w-56" />
      </div>

      {/* Profile section */}
      <SkeletonCard className="mb-6">
        <Skeleton className="h-3 w-24 mb-6" />
        <SkeletonAvatarRow />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-10 w-full rounded-xl" />
            </div>
          ))}
        </div>
        <Skeleton className="h-10 w-32 rounded-xl mt-6" />
      </SkeletonCard>

      {/* Preferences */}
      <SkeletonCard className="mb-6">
        <Skeleton className="h-3 w-28 mb-6" />
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between py-2">
              <div className="space-y-1">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-3 w-56" />
              </div>
              <Skeleton className="h-6 w-11 rounded-full" />
            </div>
          ))}
        </div>
      </SkeletonCard>

      {/* Danger zone */}
      <SkeletonCard>
        <Skeleton className="h-3 w-24 mb-6" />
        <Skeleton className="h-10 w-36 rounded-xl" />
      </SkeletonCard>
    </>
  );
}
