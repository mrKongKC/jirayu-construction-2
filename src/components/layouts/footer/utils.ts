import { sectionConfig as config } from "@/config/section";
import { Translations } from "@/lib/i18n";

type ColKey = keyof Translations["footer"]["cols"];

export interface FooterColumns {
  id: string;
  colKey: ColKey;
  heading: string;
  links: readonly string[];
}

const FOOTER_COLUMNS: {
  id: string;
  configKey: keyof typeof config;
  colKey: ColKey;
}[] = [
  { id: "footer-services", configKey: "showServices", colKey: "services" },
  { id: "footer-portfolio", configKey: "showPortfolio", colKey: "portfolio" },
  { id: "footer-info", configKey: "showWhyUs", colKey: "info" },
];

const linkFilters: Record<ColKey, Record<number, keyof typeof config>> = {
  services: { 0: "showServices" },
  portfolio: {},
  info: { 2: "showProcess" },
};

export const getFilteredLinks = (
  links: readonly string[],
  colKey: ColKey,
) => {
  const mapper = linkFilters[colKey] ?? {};
  return links.filter((_, i) => config[mapper[i]] !== false);
};

export const getFooterColumns = (
  footer: Translations["footer"],
): FooterColumns[] => {
  return FOOTER_COLUMNS.filter((col) => config[col.configKey])
    .map(({ id, colKey }) => ({
      id,
      colKey,
      heading: footer.colHeadings[colKey],
      links: footer.cols[colKey] ?? [],
    }));
};
