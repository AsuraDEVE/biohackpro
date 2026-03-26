"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface NewsletterProps {
  variant?: "default" | "compact" | "hero";
  className?: string;
}

export function Newsletter({ variant = "default", className }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setSubscribed(true);
    setEmail("");
    setIsSubmitting(false);
  };

  if (subscribed) {
    return (
      <div className={cn(
        "text-center p-6 rounded-xl bg-primary/10 border border-primary/20",
        className
      )}>
        <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-3" />
        <h3 className="font-semibold text-lg mb-1">¡Gracias por suscribirte!</h3>
        <p className="text-sm text-muted-foreground">
          Revisa tu correo para confirmar tu suscripción.
        </p>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubscribe} className={cn("flex gap-2", className)}>
        <Input
          type="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="newsletter-input flex-1"
          required
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </form>
    );
  }

  if (variant === "hero") {
    return (
      <div className={cn(
        "relative overflow-hidden rounded-2xl p-8 md:p-12",
        "bg-gradient-to-br from-primary/20 via-primary/10 to-transparent",
        "border border-primary/20",
        className
      )}>
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            <span>Newsletter Premium</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Optimiza tu rendimiento cada semana
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Recibe las últimas guías de biohacking, ofertas exclusivas de suplementos y 
            consejos de expertos directamente en tu correo.
          </p>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input pl-10 h-12"
                required
              />
            </div>
            <Button 
              type="submit" 
              size="lg"
              disabled={isSubmitting}
              className="btn-premium h-12 px-8"
            >
              {isSubmitting ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              ) : (
                <>
                  Suscribirme
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground/70 mt-4">
            Sin spam. Puedes darte de baja cuando quieras.
          </p>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={cn(
      "rounded-xl border border-border bg-muted/30 p-6",
      className
    )}>
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary flex-shrink-0">
          <Mail className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold mb-1">Newsletter de BioHackPro</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Recibe las últimas guías y ofertas exclusivas en tu correo.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2">
            <Input
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input flex-1"
              required
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              ) : (
                "Suscribirme"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
