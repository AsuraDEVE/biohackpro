import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, Brain, Zap, Moon, Pill, Target, Users, Shield, Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArticleCard } from "@/components/article-card";
import { AffiliateBox } from "@/components/affiliate-box";
import { Newsletter } from "@/components/newsletter";
import { getFeaturedArticles, getRecentArticles, affiliateProducts } from "@/lib/data";

const features = [
  {
    icon: Brain,
    title: "Nootrópicos",
    description: "Optimiza tu función cognitiva con guías basadas en evidencia científica.",
    href: "/blog?categoria=Nootrópicos",
  },
  {
    icon: Moon,
    title: "Sueño",
    description: "Mejora tu descanso con técnicas de higiene del sueño y suplementación.",
    href: "/blog?categoria=Sueño",
  },
  {
    icon: Zap,
    title: "Rendimiento",
    description: "Maximiza tu energía y productividad con estrategias comprobadas.",
    href: "/blog?categoria=Rendimiento",
  },
  {
    icon: Pill,
    title: "Suplementos",
    description: "Guías detalladas sobre suplementación para optimización personal.",
    href: "/blog?categoria=Suplementos",
  },
];

export default function HomePage() {
  const featuredArticles = getFeaturedArticles();
  const recentArticles = getRecentArticles(6);
  const featuredProduct = affiliateProducts[0];

  return (
    <div className="flex flex-col">
      {/* Hero Section - Enhanced */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-full h-1/4 bg-primary/5 opacity-20" />
          <div className="absolute top-1/3 right-1/4 w-1/3 h-1/3 bg-primary/10 opacity-10" />
          <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-primary/5 opacity-10 rotate-12 animate-float" />
        </div>
        
        <div className="container py-20 md:py-28 relative">
          <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <Badge className="bg-primary/20 text-primary border border-primary/30 font-medium">
                <Sparkles className="h-3.5 w-3.5" />
                Nuevo en Biohacking
              </Badge>
              <Badge variant="outline" className="border-border text-muted-foreground">
                Basado en ciencia
              </Badge>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="gradient-text">Optimiza</span> tu{" "}
              <span className="text-primary">cuerpo y mente</span>
              {" "}
              con ciencia
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Guías prácticas de biohacking, nootrópicos y optimización del rendimiento humano.
              Todo basado en evidencia científica actual.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="btn-premium group">
                <Link href="/blog">
                  Explorar artículos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/sobre-nosotros">Conocer más</Link>
              </Button>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className="hidden lg:block absolute -right-10 top-20 animate-float" style={{ animationDelay: '1s' }}>
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Brain className="h-8 w-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Enhanced */}
      <section className="border-b border-border">
        <div className="container py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 stagger-children">
            {features.map((feature, index) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group glass-card flex flex-col items-center rounded-xl p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 hover-lift"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles - Enhanced */}
      <section className="border-b border-border">
        <div className="container py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Artículos Destacados</h2>
              <p className="text-muted-foreground">
                Las guías más completas para comenzar tu viaje en biohacking.
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden sm:flex">
              <Link href="/blog">
                Ver todos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 stagger-children">
            {featuredArticles.slice(0, 2).map((article, index) => (
              <ArticleCard key={article.slug} article={article} featured index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles - Enhanced */}
      <section className="border-b border-border">
        <div className="container py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Últimos Artículos</h2>
              <p className="text-muted-foreground">
                Mantente al día con las últimas publicaciones
              </p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
            {recentArticles.slice(0, 6).map((article, index) => (
              <ArticleCard key={article.slug} article={article} index={index} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg" className="btn-premium">
              <Link href="/blog">
                Ver todos los artículos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recommended Product - Enhanced */}
      <section className="border-b border-border">
        <div className="container py-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Producto Recomendado</h2>
            <p className="text-muted-foreground">
              Nuestra selección de suplementos probados y de calidad
            </p>
          </div>
          <AffiliateBox product={featuredProduct} />
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section>
        <div className="container py-16">
          <Newsletter variant="hero" className="cta-section rounded-2xl" />
        </div>
      </section>
    </div>
  );
}
