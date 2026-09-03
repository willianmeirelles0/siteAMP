import type { Metadata } from "next";
import { cormorant, allura, inter } from "@/lib/fonts";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.fullName}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Agência de marketing e performance de alto padrão. Gestão de tráfego pago, branding, conteúdo e consultoria estratégica para marcas que buscam resultados que perduram.",
  keywords: [
    "agência de marketing",
    "performance",
    "tráfego pago",
    "branding",
    "consultoria de marketing",
    "mentoria de marketing",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.siteUrl,
    siteName: siteConfig.fullName,
    title: siteConfig.fullName,
    description: siteConfig.slogan,
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.fullName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.fullName,
    description: siteConfig.slogan,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${allura.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="flex min-h-screen flex-col bg-amp-cream font-sans text-amp-ink antialiased">
        {children}
      </body>
    </html>
  );
}
