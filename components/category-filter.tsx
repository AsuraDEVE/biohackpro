"use client";

import { Badge } from "@/components/ui/badge";
import { Category } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: Category | null;
  onSelectCategory: (category: Category | null) => void;
}

const categoryColors: Record<string, "default" | "secondary" | "success" | "warning" | "info" | "outline"> = {
  Sueño: "info",
  Nootrópicos: "success",
  Rendimiento: "warning",
  Suplementos: "secondary",
};

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge
        variant={selectedCategory === null ? "default" : "outline"}
        className="cursor-pointer transition-colors"
        onClick={() => onSelectCategory(null)}
      >
        Todos
      </Badge>
      {categories.map((category) => (
        <Badge
          key={category}
          variant={selectedCategory === category ? categoryColors[category] : "outline"}
          className={cn(
            "cursor-pointer transition-colors",
            selectedCategory === category && "ring-2 ring-offset-2 ring-offset-background"
          )}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </Badge>
      ))}
    </div>
  );
}
