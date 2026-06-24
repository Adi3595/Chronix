"use client";

import React from "react";

// ─── Base Shimmer Block ────────────────────────────────────────────────────────

export function Skeleton({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-surface-container-high rounded-md ${className}`}
      style={style}
    >
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </div>
  );
}

// ─── Card wrapper ──────────────────────────────────────────────────────────────

export function SkeletonCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-surface-container-lowest rounded-2xl p-6 shadow-[0px_4px_20px_rgba(0,0,0,0.03)] ${className}`}
    >
      {children}
    </div>
  );
}

// ─── Page header (title + subtitle) ───────────────────────────────────────────

export function SkeletonPageHeader() {
  return (
    <div className="mb-10">
      <Skeleton className="h-12 w-64 mb-3" />
      <Skeleton className="h-5 w-48" />
    </div>
  );
}

// ─── Stat card (number + label) ───────────────────────────────────────────────

export function SkeletonStatCard({ className = "" }: { className?: string }) {
  return (
    <SkeletonCard className={`flex flex-col gap-4 ${className}`}>
      <Skeleton className="h-3 w-24" />
      <Skeleton className="h-10 w-16" />
      <Skeleton className="h-3 w-32" />
    </SkeletonCard>
  );
}

// ─── List item row ─────────────────────────────────────────────────────────────

export function SkeletonListItem() {
  return (
    <div className="flex items-center gap-3 p-3">
      <Skeleton className="w-5 h-5 rounded flex-shrink-0" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
  );
}

// ─── Timeline / feed item ──────────────────────────────────────────────────────

export function SkeletonFeedItem() {
  return (
    <div className="relative pl-4">
      <div className="absolute -left-[9px] top-1 w-3 h-3 rounded-full bg-surface-container-high" />
      <Skeleton className="h-3 w-32 mb-2" />
      <Skeleton className="h-4 w-full mb-1" />
      <Skeleton className="h-4 w-3/4" />
    </div>
  );
}

// ─── Chart placeholder ─────────────────────────────────────────────────────────

export function SkeletonChart({ className = "" }: { className?: string }) {
  return (
    <Skeleton className={`w-full rounded-xl ${className}`} style={{ height: 180 }} />
  );
}

// ─── Avatar + name row ─────────────────────────────────────────────────────────

export function SkeletonAvatarRow() {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="w-10 h-10 rounded-full flex-shrink-0" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
  );
}
