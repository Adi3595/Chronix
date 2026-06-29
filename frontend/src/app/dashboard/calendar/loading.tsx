import { Skeleton, SkeletonCard } from "@/components/Skeleton";

export default function CalendarLoading() {
  return (
    <>
      <header className="flex justify-between items-center h-20 sticky top-0 z-40 bg-background/50 backdrop-blur-xl mb-8 border-b border-outline">
        <div className="flex items-center gap-4">
          <Skeleton className="h-[48px] w-64 hidden md:block" />
          <Skeleton className="h-[32px] w-32 md:hidden" />
        </div>
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-28 rounded-full" />
        </div>
      </header>

      <div className="max-w-[1440px] mx-auto pb-24">
        <SkeletonCard className="p-8">
          <div className="flex justify-between items-center mb-8">
            <Skeleton className="h-8 w-48" />
            <div className="flex gap-2">
              <Skeleton className="h-12 w-12 rounded-xl" />
              <Skeleton className="h-12 w-12 rounded-xl" />
            </div>
          </div>

          <div className="grid grid-cols-7 gap-4 mb-4">
            {Array.from({ length: 7 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-12 mx-auto mb-2" />
            ))}
          </div>

          <div className="grid grid-cols-7 gap-4 auto-rows-fr">
            {Array.from({ length: 35 }).map((_, i) => (
              <Skeleton key={i} className="min-h-[120px] rounded-2xl" />
            ))}
          </div>
        </SkeletonCard>
      </div>
    </>
  );
}
