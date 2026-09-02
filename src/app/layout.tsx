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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "construction",
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
