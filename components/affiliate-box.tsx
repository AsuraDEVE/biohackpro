"use client";

import Image from "next/image";
import { ExternalLink, ShoppingBag, Star, Clock, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AffiliateProduct } from "@/lib/types";

interface AffiliateBoxProps {
  product: AffiliateProduct;
  compact?: boolean;
}

const sourceConfig: Record<string, { label: string; color: string; bgColor: string }> = {
  amazon: { label: "Amazon", color: "text-orange-400", bgColor: "bg-orange-500/10" },
  iherb: { label: "iHerb", color: "text-green-400", bgColor: "bg-green-500/10" },
  organifi: { label: "Organifi", color: "text-emerald-400", bgColor: "bg-emerald-500/10" },
};

export function AffiliateBox({ product, compact = false }: AffiliateBoxProps) {
  const source = sourceConfig[product.source] || sourceConfig.amazon;
  const hasDiscount = product.originalPrice && product.originalPrice !== product.price;

  return (
    <Card className="affiliate-premium overflow-hidden rounded-xl">
      <CardContent className={compact ? "p-4" : "p-6"}>
        {/* Header Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className={`${source.bgColor} ${source.color} border-current text-xs font-medium`}>
              {source.label}
            </Badge>
            {product.badge && (
              <Badge className="bg-primary/20 text-primary border border-primary/30 text-xs font-medium animate-pulse-glow">
                {product.badge}
              </Badge>
            )}
          </div>
          <Badge variant="outline" className="text-amber-400 border-amber-500/30 bg-amber-500/10 text-xs">
            <Star className="h-3 w-3 mr-1 fill-amber-400" />
            Enlace de afiliado
          </Badge>
        </div>

        <div className={compact ? "flex items-center gap-4" : "flex flex-col md:flex-row gap-6"}>
          {/* Product Image */}
          <div className={cn(
            "relative flex-shrink-0 rounded-lg overflow-hidden bg-muted/30",
            compact ? "h-24 w-24" : "h-36 w-full md:h-44 md:w-44"
          )}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-2"
              sizes={compact ? "96px" : "176px"}
            />
            {hasDiscount && (
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                <TrendingDown className="h-3 w-3" />
                OFERTA
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex-grow space-y-3">
            <div>
              <h4 className="font-semibold text-lg leading-tight">{product.name}</h4>
              <p className={cn(
                "text-muted-foreground mt-1",
                compact ? "text-xs line-clamp-2" : "text-sm line-clamp-2"
              )}>
                {product.description}
              </p>
            </div>

            {/* Price Section */}
            <div className="flex items-end gap-3">
              <span className="text-2xl font-bold text-primary">{product.price}</span>
              {hasDiscount && (
                <span className="text-base text-muted-foreground line-through">
                  {product.originalPrice}
                </span>
              )}
              {hasDiscount && (
                <Badge variant="outline" className="text-green-400 border-green-500/30 text-xs">
                  ¡Ahorra!
                </Badge>
              )}
            </div>

            {/* CTA Button */}
            <Button
              asChild
              size={compact ? "sm" : "lg"}
              className="btn-premium w-full md:w-auto gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <a
                href={product.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="inline-flex items-center"
              >
                <ShoppingBag className="h-4 w-4" />
                Ver en {source.label}
                <ExternalLink className="h-3.5 w-3.5 ml-1" />
              </a>
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-5 pt-4 border-t border-border/50">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-primary" />
              <span>Envío rápido</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="h-3.5 w-3.5 text-primary" />
              <span>Producto verificado</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="h-3.5 w-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Compra segura</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-3 text-[10px] text-muted-foreground/70 text-center leading-relaxed">
          * Enlace de afiliado: Si compras a través de este enlace, recibimos una pequeña comisión sin coste adicional para ti. Esto nos ayuda a mantener el sitio.
        </p>
      </CardContent>
    </Card>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
