import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/components/layouts/ThemeRegistry";
import { siteConfig } from "@/config/seo";
import { buildJsonLdGraph } from "@/lib/seo-jsonld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const { name, url, ogImage, seo } = siteConfig;
const { title, titleTemplate, description, keywords } = seo;

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: title,
    template: titleTemplate,
  },
  description,
  keywords,
  authors: [{ name }],
  creator: name,
  publisher: name,
  category: "construction",
  openGraph: {
    type: "website",
    locale: "th_TH",
    alternateLocale: ["en_US"],
    url,
    siteName: name,
    title,
    description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.seo.ogAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: url,
    languages: {
      "th-TH": url,
      "en-US": url,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = buildJsonLdGraph();

  return (
    <html lang="th" suppressHydrationWarning className={geistSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
