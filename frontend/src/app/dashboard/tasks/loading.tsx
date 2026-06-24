import {
  Skeleton,
  SkeletonCard,
  SkeletonListItem,
} from "@/components/Skeleton";

export default function TasksLoading() {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <Skeleton className="h-10 w-40 mb-3" />
        <Skeleton className="h-5 w-64" />
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap gap-3 mb-6">
        <Skeleton className="h-10 w-64 rounded-xl" />
        <Skeleton className="h-10 w-28 rounded-xl" />
        <Skeleton className="h-10 w-28 rounded-xl" />
        <Skeleton className="h-10 w-36 rounded-xl ml-auto" />
      </div>

      {/* Task list */}
      <SkeletonCard>
        <div className="divide-y divide-outline-variant/20">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="py-1">
              <SkeletonListItem />
            </div>
          ))}
        </div>
      </SkeletonCard>
    </>
  );
}
