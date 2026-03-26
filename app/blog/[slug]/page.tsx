import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArticleContent } from "./article-content";
import { TableOfContents } from "@/components/table-of-contents";
import { AffiliateBox } from "@/components/affiliate-box";
import { RelatedArticles } from "@/components/related-articles";
import { Newsletter } from "@/components/newsletter";
import { ReadingProgress } from "@/components/reading-progress";
import { getArticleBySlug, articles, affiliateProducts } from "@/lib/data";
import { formatDate, slugify } from "@/lib/utils";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: "Artículo no encontrado",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    authors: [{ name: article.author.name }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      images: [
        {
          url: article.image,
          width: 800,
          height: 400,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

const categoryStyles: Record<string, string> = {
  Sueño: "badge-sueno",
  Nootrópicos: "badge-nootropicos",
  Rendimiento: "badge-rendimiento",
  Suplementos: "badge-suplementos",
};

export default function ArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  // Generate table of contents from content
  const headings = article.content.match(/^#{2,3}\s+.+$/gm) || [];
  const tableOfContentsItems = headings.map((heading) => {
    const level = heading.match(/^#+/)?.[0].length || 2;
    const title = heading.replace(/^#+\s+/, "");
    const id = slugify(title);
    return { id, title, level };
  });

  // Get related product
  const relatedProduct = affiliateProducts.find(
    (p) => p.name.toLowerCase().includes(article.category.toLowerCase()) || Math.random() > 0.5
  ) || affiliateProducts[0];

  // JSON-LD for article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
      url: `https://biohackpro.com/autores/${slugify(article.author.name)}`,
    },
    publisher: {
      "@type": "Organization",
      name: "BioHackPro",
      logo: {
        "@type": "ImageObject",
        url: "https://biohackpro.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://biohackpro.com/blog/${article.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ReadingProgress />

      <article className="container py-8">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-6 group">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al blog
          </Link>
        </Button>

        {/* Article Header */}
        <header className="mb-10 animate-fade-in-up">
          <Badge className={`${categoryStyles[article.category] || "badge-nootropicos"} mb-4`}>
            {article.category}
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl leading-tight">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            {article.excerpt}
          </p>

          {/* Meta Info */}
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-14 w-14 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
                <AvatarImage src={article.author.avatar} alt={article.author.name} />
                <AvatarFallback className="bg-primary/20 text-primary text-lg font-medium">
                  {article.author.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-foreground">{article.author.name}</p>
                <p className="text-sm text-muted-foreground max-w-xs">{article.author.bio.slice(0, 60)}...</p>
              </div>
            </div>
            <Separator orientation="vertical" className="h-12 hidden sm:block" />
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{formatDate(article.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>{article.readingTime} min de lectura</span>
              </div>
            </div>
            {/* Share buttons */}
            <div className="flex items-center gap-2 ml-auto">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Share2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Bookmark className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative mb-12 aspect-video overflow-hidden rounded-2xl border border-border shadow-2xl animate-fade-in">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Content Layout */}
        <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
          {/* Main Content */}
          <div className="min-w-0">
            <ArticleContent content={article.content} />

            {/* Affiliate Box */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <span className="text-primary">★</span>
                Producto Recomendado
              </h3>
              <AffiliateBox product={relatedProduct} />
            </div>

            {/* Newsletter CTA */}
            <div className="mt-12">
              <Newsletter />
            </div>

            {/* Author Bio */}
            <div className="mt-12 author-card rounded-2xl p-6">
              <div className="flex items-start gap-5">
                <Avatar className="h-20 w-20 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
                  <AvatarImage src={article.author.avatar} alt={article.author.name} />
                  <AvatarFallback className="bg-primary/20 text-primary text-xl font-medium">
                    {article.author.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-lg">{article.author.name}</h4>
                    {article.author.twitter && (
                      <a
                        href={`https://twitter.com/${article.author.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        @{article.author.twitter}
                      </a>
                    )}
                  </div>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{article.author.bio}</p>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <RelatedArticles articles={articles} currentSlug={article.slug} />
          </div>

          {/* Sidebar - Table of Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={tableOfContentsItems} />
            </div>
          </aside>
        </div>
      </article>
    </>
  );
}
