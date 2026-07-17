import th from '@/locales/th.json';

export const siteConfig = {
  name: th.title,
  url: "https://jirayu-754a8.web.app",
  ogImage: "/og-img.png",

  seo: {
    title: th.siteTitle,
    titleTemplate: `%s | ${th.title}`,
    description: th.siteDesc,
    keywords: th.keywords,
    ogAlt: `${th.title} รับเหมาก่อสร้างจังหวัดน่าน`,
  },

  business: {
    phone: "081-5956897",
    address: {
      locality: "เมืองน่าน",
      region: "น่าน",
      postalCode: "55000",
      country: "TH",
    },
    geo: {
      latitude: "18.7756",
      longitude: "100.7730",
    },
    openingHours: {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "17:00",
    },
  },
};
