"use client";

import Link from "next/link";
import { useState } from "react";
import { Brain, Mail, Twitter, Linkedin, Youtube, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  blog: [
    { label: "Sueño", href: "/blog?categoria=Sueño" },
    { label: "Nootrópicos", href: "/blog?categoria=Nootrópicos" },
    { label: "Rendimiento", href: "/blog?categoria=Rendimiento" },
    { label: "Suplementos", href: "/blog?categoria=Suplementos" },
  ],
  legal: [
    { label: "Política de Privacidad", href: "/privacidad" },
    { label: "Términos de Uso", href: "/terminos" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/biohackpro", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/biohackpro", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@biohackpro", label: "YouTube" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold tracking-tight">BioHackPro</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Tu guía definitiva para optimizar tu cuerpo y mente con técnicas de biohacking basadas en ciencia.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Blog Categories */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Categorías</h3>
            <ul className="space-y-2">
              {footerLinks.blog.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Recibe las últimas guías y ofertas exclusivas directamente en tu correo.
            </p>
            {subscribed ? (
              <div className="flex items-center space-x-2 text-sm text-primary">
                <Mail className="h-4 w-4" />
                <span>¡Gracias por suscribirte!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" size="icon">
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BioHackPro. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground text-center md:text-right">
            Algunos enlaces en este sitio son afiliados. Esto no afecta el precio que pagas.
          </p>
        </div>
      </div>
    </footer>
  );
}
