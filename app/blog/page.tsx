import { Suspense } from "react";
import { BlogContent } from "./blog-content";
import { ArticleCard } from "@/components/article-card";
import { articles } from "@/lib/data";

// Loading skeleton for the blog page
function BlogSkeleton() {
  return (
    <div className="container py-12">
      {/* Header Skeleton */}
      <div className="mb-12 text-center">
        <div className="h-10 w-24 bg-muted animate-pulse rounded-lg mx-auto" />
        <div className="mt-4 h-6 w-96 bg-muted animate-pulse rounded-lg mx-auto" />
      </div>

      {/* Category Filter Skeleton */}
      <div className="mb-8 flex gap-2 justify-center">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-6 w-20 bg-muted animate-pulse rounded-full" />
        ))}
      </div>

      {/* Articles Grid Skeleton */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="rounded-xl border bg-card overflow-hidden">
            <div className="aspect-video bg-muted animate-pulse" />
            <div className="p-5 space-y-3">
              <div className="h-4 w-20 bg-muted animate-pulse rounded" />
              <div className="h-6 w-full bg-muted animate-pulse rounded" />
              <div className="h-4 w-full bg-muted animate-pulse rounded" />
              <div className="h-4 w-3/4 bg-muted animate-pulse rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Static content that doesn't use useSearchParams
function StaticBlogContent() {
  return (
    <div className="container py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Explora nuestras guías completas sobre biohacking, nootrópicos y optimización del rendimiento.
        </p>
      </div>

      {/* Dynamic content with useSearchParams */}
      <Suspense fallback={<BlogSkeleton />}>
        <BlogContent />
      </Suspense>
    </div>
  );
}

export default function BlogPage() {
  return <StaticBlogContent />;
}
