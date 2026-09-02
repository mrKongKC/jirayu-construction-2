import Navbar from "@/components/layouts/navbar/Navbar";
import HeroSection from "@/components/sections/hero/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/portfolio/PortfolioSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import SeoContentSection from "@/components/sections/SeoContentSection";
import ProcessSection from "@/components/sections/process/ProcessSection";
import CTABannerSection from "@/components/sections/CTABannerSection";
import ContactSection from "@/components/sections/contact/ContactSection";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/layouts/footer/Footer";
import FloatingActionsSection from "@/components/sections/FloatingActionsSection";
import JsonLd from "@/components/seo/JsonLd";
import { sectionConfig as config } from "@/config/section";
import { businessRegistry } from "@/config/business";
import { buildJsonLdGraph } from "@/lib/seo-jsonld";
import {
  getTranslations,
  isValidLocale,
  localeStaticParams,
  type Locale,
} from "@/lib/i18n";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return localeStaticParams();
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  if (!isValidLocale(localeParam)) notFound();

  const locale = localeParam as Locale;
  const t = getTranslations(locale);
  const jsonLd = buildJsonLdGraph(locale);

  return (
    <>
      <JsonLd id="jsonld-home" data={jsonLd} />
      <Navbar />
      <main>
        {config.showHero && <HeroSection />}
        {config.showServices && <ServicesSection />}
        {config.showPortfolio && <PortfolioSection />}
        {config.showWhyUs && <WhyUsSection />}
        {config.showSeoContent && (
          <SeoContentSection
            content={t.seoContent}
            areas={businessRegistry.serviceAreas[locale]}
          />
        )}
        {config.showProcess && <ProcessSection />}
        {config.showCTABanner && <CTABannerSection />}
        {config.showContact && <ContactSection />}
        {config.showFaq && <FaqSection faq={t.faq} />}
      </main>
      <Footer />
      <FloatingActionsSection />
    </>
  );
}
