import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import { Article } from "@/lib/types";
import { cn } from "@/lib/utils";

interface RelatedArticlesProps {
  articles: Article[];
  currentSlug: string;
}

const categoryStyles: Record<string, string> = {
  Sueño: "badge-sueno",
  Nootrópicos: "badge-nootropicos",
  Rendimiento: "badge-rendimiento",
  Suplementos: "badge-suplementos",
};

export function RelatedArticles({ articles, currentSlug }: RelatedArticlesProps) {
  const relatedArticles = articles
    .filter((article) => article.slug !== currentSlug)
    .slice(0, 3);

  if (relatedArticles.length === 0) return null;

  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold">Artículos Relacionados</h2>
        <Link
          href="/blog"
          className="text-sm text-primary hover:underline flex items-center gap-1"
        >
          Ver todos
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {relatedArticles.map((article, index) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Image */}
            <div className="relative h-36 overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute left-3 top-3">
                <span className={cn(
                  "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium backdrop-blur-sm border",
                  categoryStyles[article.category]
                )}>
                  {article.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-grow flex-col p-4">
              <h3 className="font-semibold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              
              <div className="mt-auto flex items-center justify-between pt-3">
                <span className="text-xs text-muted-foreground">
                  {article.author.name}
                </span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{article.readingTime} min</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
