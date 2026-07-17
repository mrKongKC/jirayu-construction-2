import { sectionConfig as config } from "@/config/section";
import { Translations } from "@/lib/i18n";

type ColKey = keyof Translations["footer"]["cols"];

const SECTIONS_MAP = [
  {
    id: "footer-services",
    configKey: "showServices" as keyof typeof config,
    colKey: "services" as ColKey,
    itemMapping: { 0: "showServices" as keyof typeof config },
  },
  {
    id: "footer-portfolio",
    configKey: "showPortfolio" as keyof typeof config,
    colKey: "portfolio" as ColKey,
    itemMapping: {},
  },
  {
    id: "footer-info",
    configKey: "showWhyUs" as keyof typeof config,
    colKey: "info" as ColKey,
    itemMapping: {
      2: "showReviews" as keyof typeof config,
      3: "showProcess" as keyof typeof config,
    },
  },
] as const;

export interface FooterColumns {
  id: string;
  colKey: ColKey;
  heading: string;
  links: readonly string[];
}

const columnRegistry: Record<ColKey, Record<number, keyof typeof config>> = {
  services: { 0: "showServices" },
  portfolio: {},
  info: { 2: "showReviews", 3: "showProcess" },
};

export const getFilteredLinks = (
  links: readonly string[],
  colKey: ColKey,
) => {
  const mapper = columnRegistry[colKey] || {};
  return links.filter((_, i) => config[mapper[i]] !== false);
};

export const getFooterColumns = (
  footer: Translations["footer"],
): FooterColumns[] => {
  return SECTIONS_MAP.map((section) => ({
    id: section.id,
    colKey: section.colKey,
    heading: footer.colHeadings[section.colKey],
    links: footer.cols[section.colKey] ?? [],
    show: config[section.configKey],
  }))
    .filter((col) => col.show)
    .map(({ id, colKey, heading, links }) => ({ id, colKey, heading, links }));
};
