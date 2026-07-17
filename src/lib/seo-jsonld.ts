import th from "@/locales/th.json";
import { siteConfig } from "@/config/seo";

export function buildJsonLdGraph() {
  const { name, url, ogImage, seo, business } = siteConfig;
  const { phone, address, geo, openingHours } = business;
  const { locality, region, postalCode, country } = address;
  const { latitude, longitude } = geo;
  const { days, opens, closes } = openingHours;

  const localBusiness = {
    "@type": "GeneralContractor",
    "@id": `${url}/#business`,
    name,
    image: `${url}${ogImage}`,
    description: seo.description,
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
    name: seo.title,
    description: seo.description,
    inLanguage: ["th-TH", "en-US"],
    publisher: { "@id": `${url}/#business` },
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${url}/#faq`,
    mainEntity: th.faq.items.map((item) => ({
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
