import th from "@/locales/th.json";
import en from "@/locales/en.json";
import { siteConfig } from "@/config/seo";
import type { Locale } from "@/lib/i18n";

const localeData = { th, en };

export function buildJsonLdGraph(locale: Locale = "th") {
  const t = localeData[locale];
  const localeSeo = siteConfig.locales[locale];
  const { url, ogImage, business } = siteConfig;
  const { phone, address, geo, openingHours } = business;
  const { locality, region, postalCode, country } = address;
  const { latitude, longitude } = geo;
  const { days, opens, closes } = openingHours;

  const localBusiness = {
    "@type": "GeneralContractor",
    "@id": `${url}/#business`,
    name: localeSeo.name,
    image: `${url}${ogImage}`,
    description: localeSeo.description,
    url,
    telephone: phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: locality,
      addressRegion: region,
      postalCode,
      addressCountry: country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude,
      longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: days,
      opens,
      closes,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: region,
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url,
    name: localeSeo.title,
    description: localeSeo.description,
    inLanguage: locale === "th" ? "th-TH" : "en-US",
    publisher: { "@id": `${url}/#business` },
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${url}/#faq`,
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [localBusiness, website, faqPage],
  };
}
