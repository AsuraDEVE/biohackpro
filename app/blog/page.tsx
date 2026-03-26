"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { CategoryFilter } from "@/components/category-filter";
import { articles, categories } from "@/lib/data";
import { Category } from "@/lib/types";

export default function BlogPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("categoria") as Category | null;
  
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    initialCategory && categories.includes(initialCategory) ? initialCategory : null
  );

  const filteredArticles = useMemo(() => {
    if (!selectedCategory) return articles;
    return articles.filter((article) => article.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="container py-12">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Explora nuestras guías completas sobre biohacking, nootrópicos y optimización del rendimiento.
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Articles Count */}
      <p className="text-sm text-muted-foreground mb-6">
        Mostrando {filteredArticles.length} artículo{filteredArticles.length !== 1 ? "s" : ""}
        {selectedCategory && ` en ${selectedCategory}`}
      </p>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No hay artículos en esta categoría todavía.
          </p>
        </div>
      )}
    </div>
  );
}
