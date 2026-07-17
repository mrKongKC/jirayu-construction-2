import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/components/layouts/ThemeRegistry";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { siteConfig } from "@/config/seo";
import { buildSiteVerification } from "@/lib/seo-metadata";

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
    canonical: `${url}/th`,
    languages: {
      "x-default": `${url}/th`,
      "th-TH": `${url}/th`,
      "en-US": `${url}/en`,
    },
  },
  icons: {
    icon: [{ url: "/jirayu.svg", type: "image/svg+xml" }],
    apple: [{ url: "/jirayu.svg", type: "image/svg+xml" }],
  },
  manifest: "/manifest.webmanifest",
  verification: buildSiteVerification(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning className={geistSans.variable}>
      <body>
        <GoogleAnalytics />
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
