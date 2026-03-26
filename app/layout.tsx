import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://biohackpro.com"),
  title: {
    default: "BioHackPro - Tu Guía de Biohacking y Nootrópicos",
    template: "%s | BioHackPro",
  },
  description:
    "Descubre las últimas técnicas de biohacking, guías de nootrópicos y optimización del rendimiento humano basadas en ciencia.",
  keywords: [
    "biohacking",
    "nootrópicos",
    "optimización cognitiva",
    "suplementos",
    "rendimiento",
    "sueño",
    "nutrición",
  ],
  authors: [{ name: "BioHackPro Team" }],
  creator: "BioHackPro",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://biohackpro.com",
    siteName: "BioHackPro",
    title: "BioHackPro - Tu Guía de Biohacking y Nootrópicos",
    description:
      "Descubre las últimas técnicas de biohacking, guías de nootrópicos y optimización del rendimiento humano basadas en ciencia.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BioHackPro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BioHackPro - Tu Guía de Biohacking y Nootrópicos",
    description:
      "Descubre las últimas técnicas de biohacking, guías de nootrópicos y optimización del rendimiento humano basadas en ciencia.",
    images: ["/og-image.png"],
    creator: "@biohackpro",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
