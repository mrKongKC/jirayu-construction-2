import { translations, type Locale } from "@/lib/i18n";
import { siteConfig } from "@/config/seo";
import { absoluteAssetUrl } from "@/lib/seo-metadata";
import { contactLinks } from "@/config/contact";
import { businessRegistry } from "@/config/business";
import { portfolioProjects, getPortfolioProject } from "@/config/portfolio";
import { localePath } from "@/lib/locale-path";

function buildBreadcrumb(
  pageUrl: string,
  items: { name: string; item: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}

export function buildJsonLdGraph(locale: Locale = "th") {
  const t = translations[locale];
  const localeSeo = siteConfig.locales[locale];
  const { url, ogImage } = siteConfig;
  const { address, geo, openingHours } = businessRegistry;
  const { streetAddress, locality, region, postalCode, country } = address;
  const { latitude, longitude } = geo;
  const { days, opens, closes } = openingHours;
  const pageUrl = `${url}${localePath(locale)}`;
  const scope =
    locale === "th"
      ? businessRegistry.businessScopeTh
      : businessRegistry.businessScopeEn;

  const localBusiness = {
    "@type": "GeneralContractor",
    "@id": `${url}/#business`,
    name: localeSeo.name,
    legalName:
      locale === "th"
        ? businessRegistry.legalNameTh
        : businessRegistry.legalNameEn,
    alternateName: [
      businessRegistry.tradeNameTh,
      businessRegistry.tradeNameEn,
      "หจก. จิรายุ",
      "Jirayu Construction",
    ],
    image: absoluteAssetUrl(ogImage),
    description: localeSeo.description,
    url: pageUrl,
    telephone: contactLinks.phone,
    email: contactLinks.email,
    priceRange: "$$",
    foundingDate: businessRegistry.foundedDate,
    taxID: businessRegistry.registrationNumber,
    identifier: {
      "@type": "PropertyValue",
      name:
        locale === "th"
          ? "เลขทะเบียนนิติบุคคล"
          : "Company Registration Number",
      value: businessRegistry.registrationNumber,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress,
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
    knowsAbout: scope,
    areaServed: businessRegistry.serviceAreas[locale].map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: region,
      },
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name:
        locale === "th"
          ? "บริการรับเหมาบ้านจังหวัดน่าน"
          : "Home Contractor Services Nan",
      itemListElement: t.services.items.map((item, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: item.title,
          description: item.desc,
          provider: { "@id": `${url}/#business` },
          areaServed: {
            "@type": "AdministrativeArea",
            name: region,
          },
        },
      })),
    },
    sameAs: [contactLinks.facebookUrl, businessRegistry.registrationUrl],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url: pageUrl,
    name: localeSeo.title,
    description: localeSeo.description,
    inLanguage: locale === "th" ? "th-TH" : "en-US",
    publisher: { "@id": `${url}/#business` },
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: localeSeo.title,
    description: localeSeo.description,
    isPartOf: { "@id": `${url}/#website` },
    about: { "@id": `${url}/#business` },
    inLanguage: locale === "th" ? "th-TH" : "en-US",
  };

  const portfolioList = {
    "@type": "ItemList",
    "@id": `${pageUrl}#portfolio`,
    name:
      locale === "th"
        ? "ผลงานก่อสร้างจังหวัดน่าน"
        : "Construction Projects Nan Province",
    numberOfItems: portfolioProjects.length,
    itemListElement: portfolioProjects.map((project, index) => {
      const localized = project[locale];
      return {
        "@type": "ListItem",
        position: index + 1,
        url: `${url}${localePath(locale, `portfolio/${project.slug}`)}`,
        item: {
          "@type": "CreativeWork",
          name: localized.title,
          description: localized.description,
          url: `${url}${localePath(locale, `portfolio/${project.slug}`)}`,
          image: absoluteAssetUrl(project.cover),
          locationCreated: {
            "@type": "Place",
            name: localized.location,
          },
        },
      };
    }),
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
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
    "@graph": [localBusiness, website, webPage, portfolioList, faqPage],
  };
}

export function buildLegalJsonLd(
  locale: Locale,
  type: "privacy" | "terms",
) {
  const content = translations[locale].legal[type];
  const homeUrl = `${siteConfig.url}${localePath(locale)}`;
  const pageUrl = `${siteConfig.url}${localePath(locale, type)}`;
  const homeLabel = locale === "th" ? "หน้าแรก" : "Home";

  const webPage = {
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: content.title,
    description: content.metaDescription,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    inLanguage: locale === "th" ? "th-TH" : "en-US",
  };

  const breadcrumb = buildBreadcrumb(pageUrl, [
    { name: homeLabel, item: homeUrl },
    { name: content.title, item: pageUrl },
  ]);

  return {
    "@context": "https://schema.org",
    "@graph": [webPage, breadcrumb],
  };
}

export function buildPortfolioJsonLd(locale: Locale, slug: string) {
  const project = getPortfolioProject(slug, locale);
  if (!project) return null;

  const t = translations[locale];
  const pageUrl = `${siteConfig.url}${localePath(locale, `portfolio/${slug}`)}`;
  const homeUrl = `${siteConfig.url}${localePath(locale)}`;
  const homeLabel = locale === "th" ? "หน้าแรก" : "Home";

  const creativeWork = {
    "@type": "CreativeWork",
    "@id": `${pageUrl}#project`,
    name: project.title,
    description: project.description,
    url: pageUrl,
    image: project.gallery.map(absoluteAssetUrl),
    locationCreated: {
      "@type": "Place",
      name: project.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: project.districtLabel,
        addressRegion: locale === "th" ? "น่าน" : "Nan",
        addressCountry: "TH",
      },
    },
    creator: {
      "@type": "Organization",
      name: siteConfig.locales[locale].name,
      url: siteConfig.url,
    },
    isPartOf: {
      "@type": "WebPage",
      "@id": `${homeUrl}#portfolio`,
    },
  };

  const breadcrumb = buildBreadcrumb(pageUrl, [
    { name: homeLabel, item: homeUrl },
    { name: t.nav.portfolio, item: `${homeUrl}#portfolio` },
    { name: project.title, item: pageUrl },
  ]);

  return {
    "@context": "https://schema.org",
    "@graph": [creativeWork, breadcrumb],
  };
}
