import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Article } from "@/lib/types";
import { formatDate, cn } from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
  index?: number;
}

const categoryStyles: Record<string, string> = {
  Sueño: "badge-sueno",
  Nootrópicos: "badge-nootropicos",
  Rendimiento: "badge-rendimiento",
  Suplementos: "badge-suplementos",
};

export function ArticleCard({ article, featured = false, index = 0 }: ArticleCardProps) {
  return (
    <Link href={`/blog/${article.slug}`} className="group block">
      <Card className={cn(
        "relative h-full overflow-hidden border-border/50 bg-card transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5",
        featured && "md:flex md:flex-row",
        "hover-lift"
      )}>
        {/* Image Container */}
        <div className={cn(
          "relative overflow-hidden",
          featured ? "md:w-1/2 md:flex-shrink-0" : ""
        )}>
          <div className={cn(
            "relative",
            featured ? "md:h-80" : "h-52"
          )}>
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          </div>
          
          {/* Category Badge - Floating */}
          <div className="absolute left-4 top-4 z-10">
            <Badge className={cn(
              "backdrop-blur-sm border font-medium px-3 py-1",
              categoryStyles[article.category]
            )}>
              {article.category}
            </Badge>
          </div>

          {/* Reading Time Badge */}
          <div className="absolute right-4 bottom-4 z-10">
            <div className="flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1.5 text-xs text-white/90">
              <Clock className="h-3.5 w-3.5" />
              <span>{article.readingTime} min</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={cn("flex flex-col", featured ? "md:w-1/2 md:p-6" : "p-5")}>
          {/* Title */}
          <h3 className={cn(
            "font-bold leading-tight tracking-tight transition-colors duration-300 group-hover:text-primary",
            featured ? "text-xl md:text-2xl mb-3" : "text-lg mb-2",
            "line-clamp-2"
          )}>
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className={cn(
            "text-muted-foreground leading-relaxed flex-grow",
            featured ? "text-base line-clamp-3 mb-4" : "text-sm line-clamp-2 mb-4"
          )}>
            {article.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            {/* Author */}
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
                <AvatarImage src={article.author.avatar} alt={article.author.name} />
                <AvatarFallback className="bg-primary/20 text-primary text-xs font-medium">
                  {article.author.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium text-foreground">{article.author.name}</p>
                <p className="text-xs text-muted-foreground">{formatDate(article.publishedAt)}</p>
              </div>
            </div>

            {/* Read More Indicator */}
            <div className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <span>Leer</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-primary/20" />
        </div>
      </Card>
    </Link>
  );
}
