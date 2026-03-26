# BioHackPro - Blog de Biohacking y Nootrópicos

Un blog profesional sobre biohacking y nootrópicos construido con Next.js 14, TypeScript y shadcn/ui.

## 🚀 Stack Tecnológico

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **UI Library:** shadcn/ui (Card, Badge, Button, Separator, Avatar, NavigationMenu)
- **Estilos:** Tailwind CSS — modo oscuro por defecto
- **Fuente:** Geist (display) + Geist Mono (código)
- **Iconos:** lucide-react

## 📁 Estructura del Proyecto

```
biohackpro/
├── app/
│   ├── globals.css          # Estilos globales con variables CSS
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Homepage
│   ├── blog/
│   │   ├── page.tsx         # Grid de artículos
│   │   └── [slug]/
│   │       ├── page.tsx     # Artículo individual
│   │       └── article-content.tsx
│   └── sobre-nosotros/
│       └── page.tsx         # Página about
├── components/
│   ├── ui/                  # Componentes shadcn/ui
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── navigation-menu.tsx
│   │   └── separator.tsx
│   ├── article-card.tsx     # Tarjeta de artículo
│   ├── affiliate-box.tsx    # Box de afiliados
│   ├── category-filter.tsx  # Filtro por categoría
│   ├── footer.tsx           # Footer con newsletter
│   ├── navbar.tsx           # Navbar con toggle tema
│   ├── table-of-contents.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── lib/
│   ├── data.ts              # Datos de artículos y productos
│   ├── types.ts             # Tipos TypeScript
│   └── utils.ts             # Utilidades
├── components.json          # Configuración shadcn/ui
├── tailwind.config.ts       # Configuración Tailwind
├── next-sitemap.config.js   # Configuración sitemap
└── package.json
```

## 🎨 Características

### Páginas
- **Homepage (/)** - Hero, artículos destacados, categorías y CTA
- **Blog (/blog)** - Grid de artículos con filtro por categoría
- **Artículo (/blog/[slug])** - Artículo individual con tabla de contenidos
- **Sobre Nosotros (/sobre-nosotros)** - Página about con equipo

### Componentes
- **Navbar** - Logo, links y toggle dark/light
- **ArticleCard** - Imagen, badge de categoría, tiempo de lectura
- **CategoryFilter** - Badges filtrables (Sueño, Nootrópicos, Rendimiento, Suplementos)
- **AffiliateBox** - Box destacado para links de afiliados con disclaimer
- **TableOfContents** - Sidebar sticky en artículos
- **Footer** - Links y suscripción a newsletter

### SEO y Rendimiento
- Metadata dinámica con `generateMetadata`
- Imágenes optimizadas con `next/image`
- Schema markup JSON-LD para artículos
- Sitemap automático con `next-sitemap`

### Monetización
- Componente AffiliateBox reutilizable
- Compatible con Amazon, iHerb, Organifi
- Badge de "Enlace de afiliado" visible
- Tracking UTM en links

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/biohackpro.git
cd biohackpro

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## 🌙 Modo Oscuro

El proyecto tiene modo oscuro por defecto. El toggle permite cambiar entre:
- **Dark theme** (por defecto)
- **Light theme**

## 📝 Categorías

- **Sueño** - Optimización del descanso
- **Nootrópicos** - Mejora cognitiva
- **Rendimiento** - Energía y productividad
- **Suplementos** - Guías de suplementación

## 🔗 Enlaces de Afiliados

El componente `AffiliateBox` soporta:
- Amazon (con tag de afiliado)
- iHerb (con código de referido)
- Organifi (con tracking UTM)

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuir

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

Desarrollado con ❤️ por el equipo de BioHackPro
