import type { Metadata } from "next";
import Navbar from "@/components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";
import LegalPage from "@/components/pages/LegalPage";
import th from "@/locales/th.json";
import { siteConfig } from "@/config/seo";

const { terms } = th.legal;

export const metadata: Metadata = {
  title: terms.title,
  description: terms.metaDescription,
  alternates: {
    canonical: `${siteConfig.url}/terms`,
    languages: {
      "th-TH": `${siteConfig.url}/terms`,
      "en-US": `${siteConfig.url}/terms`,
    },
  },
  openGraph: {
    title: terms.title,
    description: terms.metaDescription,
    locale: "th_TH",
    alternateLocale: ["en_US"],
    url: `${siteConfig.url}/terms`,
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <LegalPage type="terms" />
      <Footer />
    </>
  );
}
