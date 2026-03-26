export type Category = "Sueño" | "Nootrópicos" | "Rendimiento" | "Suplementos";

export interface Author {
  name: string;
  avatar: string;
  bio: string;
  twitter?: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  image: string;
  author: Author;
  publishedAt: string;
  readingTime: number;
  featured?: boolean;
}

export interface AffiliateProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  originalPrice?: string;
  affiliateUrl: string;
  source: "amazon" | "iherb" | "organifi";
  badge?: string;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

export interface NavItem {
  label: string;
  href: string;
}
