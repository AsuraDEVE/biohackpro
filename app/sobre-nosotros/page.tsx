import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Brain, Target, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { authors } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce al equipo detrás de BioHackPro. Somos apasionados del biohacking y la optimización del rendimiento humano basada en ciencia.",
};

const values = [
  {
    icon: Target,
    title: "Ciencia Primero",
    description:
      "Todo nuestro contenido está basado en evidencia científica. Citanos estudios y revisamos la literatura actualizada.",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description:
      "Priorizamos la seguridad en todas nuestras recomendaciones. Siempre recomendamos consultar con profesionales de la salud.",
  },
  {
    icon: Users,
    title: "Comunidad",
    description:
      "Construimos una comunidad de biohackers que comparten conocimiento y experiencias de forma responsable.",
  },
  {
    icon: Brain,
    title: "Optimización",
    description:
      "Creemos que todos pueden optimizar su rendimiento de forma segura y efectiva con las herramientas adecuadas.",
  },
];

export default function AboutPage() {
  const teamMembers = Object.values(authors);

  return (
    <div className="container py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Sobre <span className="text-primary">BioHackPro</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Somos un equipo de profesionales apasionados por la optimización del rendimiento humano
          a través del biohacking basado en evidencia científica.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mb-16">
        <div className="rounded-xl border border-border bg-muted/50 p-8 md:p-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">Nuestra Misión</h2>
            <p className="text-muted-foreground leading-relaxed">
              Democratizar el acceso a información de calidad sobre biohacking y optimización del
              rendimiento. Creemos que todos merecen tener acceso a herramientas y conocimientos
              que les permitan alcanzar su máximo potencial físico y mental.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Nuestro contenido está cuidadosamente investigado y revisado por profesionales en
              neurociencia, nutrición y rendimiento deportivo. Nos comprometemos a proporcionar
              información precisa, actualizada y práctica.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Nuestros Valores</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <value.icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-12" />

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Nuestro Equipo</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center"
            >
              <div className="relative h-24 w-24 rounded-full overflow-hidden mb-4">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
              {member.twitter && (
                <a
                  href={`https://twitter.com/${member.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 text-sm text-primary hover:underline"
                >
                  @{member.twitter}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Affiliate Disclaimer */}
      <section className="mb-16">
        <div className="rounded-xl border border-border p-8">
          <h2 className="text-xl font-bold mb-4">Transparencia y Afiliados</h2>
          <p className="text-muted-foreground leading-relaxed">
            Algunos de los enlaces en nuestro sitio son enlaces de afiliados. Esto significa que
            podemos recibir una pequeña comisión si realizas una compra a través de estos enlaces,
            sin ningún coste adicional para ti.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Esta comisión nos ayuda a mantener el sitio y continuar creando contenido de calidad.
            Sin embargo, esto nunca influye en nuestras recomendaciones. Solo recomendamos
            productos que hemos investigado y en los que creemos sinceramente.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-4">¿Listo para empezar?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Explora nuestros artículos y comienza tu viaje hacia una mejor versión de ti mismo.
          </p>
          <Button asChild size="lg">
            <Link href="/blog">Explorar el Blog</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
