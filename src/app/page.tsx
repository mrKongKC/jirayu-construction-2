import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/seo";
import RootRedirect from "@/components/seo/RootRedirect";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: {
    canonical: `${siteConfig.url}/th`,
    languages: {
      "x-default": `${siteConfig.url}/th`,
      "th-TH": `${siteConfig.url}/th`,
      "en-US": `${siteConfig.url}/en`,
    },
  },
};

export default function RootRedirectPage() {
  return (
    <>
      <noscript>
        <Link href="/th">ไปยังหน้าแรก / Go to homepage</Link>
      </noscript>
      <RootRedirect />
    </>
  );
}
