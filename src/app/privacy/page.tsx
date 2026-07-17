import type { Metadata } from "next";
import Navbar from "@/components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";
import LegalPage from "@/components/pages/LegalPage";
import th from "@/locales/th.json";
import { siteConfig } from "@/config/seo";

const { privacy } = th.legal;

export const metadata: Metadata = {
  title: privacy.title,
  description: privacy.metaDescription,
  alternates: {
    canonical: `${siteConfig.url}/privacy`,
    languages: {
      "th-TH": `${siteConfig.url}/privacy`,
      "en-US": `${siteConfig.url}/privacy`,
    },
  },
  openGraph: {
    title: privacy.title,
    description: privacy.metaDescription,
    locale: "th_TH",
    alternateLocale: ["en_US"],
    url: `${siteConfig.url}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <LegalPage type="privacy" />
      <Footer />
    </>
  );
}
