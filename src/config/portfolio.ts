import type { Locale } from "@/lib/i18n";

export type PortfolioProject = {
  id: number;
  slug: string;
  type: { th: string; en: string };
  featured: boolean;
  cover: string;
  gallery: string[];
  district: { th: string; en: string };
  th: {
    title: string;
    location: string;
    area: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
  };
  en: {
    title: string;
    location: string;
    area: string;
    description: string;
    metaTitle: string;
    metaDescription: string;
  };
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    slug: "sompanya-school-6-classrooms",
    type: { th: "ภาครัฐ", en: "Government" },
    featured: true,
    cover: "/portfolio/page1-img1.jpeg",
    gallery: [
      "/portfolio/page1-img1.jpeg",
      "/portfolio/page1-img2.jpeg",
      "/portfolio/page1-img3.jpeg",
    ],
    district: { th: "น่าน", en: "Mueang Nan" },
    th: {
      title: "อาคารเรียน คสล. 2 ชั้น 6 ห้องเรียน",
      location: "โรงเรียนสมปัญญาน่าน",
      area: "2 ชั้น · 6 ห้องเรียน",
      description:
        "โครงการก่อสร้างอาคารเรียนคอนกรีตเสริมเหล็ก 2 ชั้น จำนวน 6 ห้องเรียน ของโรงเรียนสมปัญญาน่าน อ.เมืองน่าน ดำเนินการโดยหจก. จิรายุวัสดุก่อสร้าง ด้วยมาตรฐานงานภาครัฐ โครงสร้างแข็งแรง ปลอดภัย และส่งมอบตามกำหนด",
      metaTitle: "อาคารเรียน คสล. 2 ชั้น 6 ห้องเรียน | โรงเรียนสมปัญญาน่าน",
      metaDescription:
        "ผลงานก่อสร้างอาคารเรียน คสล. 2 ชั้น 6 ห้องเรียน โรงเรียนสมปัญญาน่าน โดย หจก. จิรายุวัสดุก่อสร้าง รับเหมาก่อสร้าง น่าน เชียงกลาง ท่าวังผา ปัว เวียงสา",
    },
    en: {
      title: "2-Storey RC School Building (6 Classrooms)",
      location: "Sompanya Nan School",
      area: "2 storeys · 6 classrooms",
      description:
        "Construction of a 2-storey reinforced concrete school building with 6 classrooms at Sompanya Nan School, Mueang Nan — delivered by Jirayu Construction Materials to government standards.",
      metaTitle: "2-Storey School Building | Sompanya Nan School",
      metaDescription:
        "Portfolio: 2-storey RC school building at Sompanya Nan School by Jirayu Construction Materials — serving Mueang Nan, Chiang Klang, Tha Wang Pha, Pua, and Wiang Sa.",
    },
  },
  {
    id: 2,
    slug: "sompanya-swimming-pool",
    type: { th: "ภาครัฐ", en: "Government" },
    featured: false,
    cover: "/portfolio/page2-img1.jpeg",
    gallery: [
      "/portfolio/page2-img1.jpeg",
      "/portfolio/page2-img2.jpeg",
      "/portfolio/page2-img3.jpeg",
    ],
    district: { th: "น่าน", en: "Mueang Nan" },
    th: {
      title: "สระว่ายน้ำ",
      location: "โรงเรียนสมปัญญาน่าน",
      area: "โครงการภาครัฐ",
      description:
        "โครงการก่อสร้างสระว่ายน้ำของโรงเรียนสมปัญญาน่าน อ.เมืองน่าน งานโครงสร้าง ระบบสระ งานปูน และงานตกแต่ง ครบวงจรโดยทีมช่างมืออาชีพ",
      metaTitle: "สระว่ายน้ำ | โรงเรียนสมปัญญาน่าน",
      metaDescription:
        "ผลงานก่อสร้างสระว่ายน้ำ โรงเรียนสมปัญญาน่าน โดย หจก. จิรายุวัสดุก่อสร้าง รับเหมาก่อสร้าง จังหวัดน่าน",
    },
    en: {
      title: "Swimming Pool",
      location: "Sompanya Nan School",
      area: "Government project",
      description:
        "Swimming pool construction at Sompanya Nan School, Mueang Nan — full structural, pool system, and finishing work.",
      metaTitle: "Swimming Pool | Sompanya Nan School",
      metaDescription:
        "Portfolio: swimming pool construction at Sompanya Nan School by Jirayu Construction Materials in Nan Province.",
    },
  },
  {
    id: 3,
    slug: "sompanya-learning-center",
    type: { th: "ภาครัฐ", en: "Government" },
    featured: false,
    cover: "/portfolio/page3-img1.jpeg",
    gallery: ["/portfolio/page3-img1.jpeg", "/portfolio/page3-img2.jpeg"],
    district: { th: "น่าน", en: "Mueang Nan" },
    th: {
      title: "ศูนย์เรียนรู้",
      location: "โรงเรียนสมปัญญาน่าน",
      area: "โครงการภาครัฐ",
      description:
        "โครงการก่อสร้างศูนย์เรียนรู้ของโรงเรียนสมปัญญาน่าน อ.เมืองน่าน ออกแบบและก่อสร้างพื้นที่เรียนรู้ที่ทันสมัย รองรับการใช้งานหลากหลาย",
      metaTitle: "ศูนย์เรียนรู้ | โรงเรียนสมปัญญาน่าน",
      metaDescription:
        "ผลงานก่อสร้างศูนย์เรียนรู้ โรงเรียนสมปัญญาน่าน โดย หจก. จิรายุวัสดุก่อสร้าง",
    },
    en: {
      title: "Learning Center",
      location: "Sompanya Nan School",
      area: "Government project",
      description:
        "Learning center construction at Sompanya Nan School — modern educational space designed and built for versatile use.",
      metaTitle: "Learning Center | Sompanya Nan School",
      metaDescription:
        "Portfolio: learning center at Sompanya Nan School by Jirayu Construction Materials.",
    },
  },
  {
    id: 4,
    slug: "scout-camp-canteen-260-seats",
    type: { th: "ภาครัฐ", en: "Government" },
    featured: true,
    cover: "/portfolio/page4-img1.jpeg",
    gallery: ["/portfolio/page4-img1.jpeg", "/portfolio/page4-img2.jpeg"],
    district: { th: "น่าน", en: "Mueang Nan" },
    th: {
      title: "โรงอาหาร 260 ที่นั่ง",
      location: "ค่ายลูกเสือประจำจังหวัดน่าน",
      area: "260 ที่นั่ง",
      description:
        "โครงการก่อสร้างโรงอาหารขนาดเล็ก 260 ที่นั่ง ค่ายลูกเสือประจำจังหวัดน่าน งานโครงสร้างและสถาปัตยกรรมครบวงจร รองรับการใช้งานจำนวนมาก",
      metaTitle: "โรงอาหาร 260 ที่นั่ง | ค่ายลูกเสือ จังหวัดน่าน",
      metaDescription:
        "ผลงานก่อสร้างโรงอาหาร 260 ที่นั่ง ค่ายลูกเสือประจำจังหวัดน่าน โดย หจก. จิรายุวัสดุก่อสร้าง",
    },
    en: {
      title: "Canteen Building (260 Seats)",
      location: "Nan Provincial Scout Camp",
      area: "260 seats",
      description:
        "Canteen building construction with 260 seats at Nan Provincial Scout Camp — full structural and architectural work.",
      metaTitle: "Canteen 260 Seats | Nan Scout Camp",
      metaDescription:
        "Portfolio: 260-seat canteen at Nan Provincial Scout Camp by Jirayu Construction Materials.",
    },
  },
  {
    id: 5,
    slug: "nong-tao-residential-house",
    type: { th: "บ้านพักอาศัย", en: "Residential" },
    featured: false,
    cover: "/portfolio/page5-img1.jpeg",
    gallery: ["/portfolio/page5-img1.jpeg", "/portfolio/page5-img2.jpeg"],
    district: { th: "น่าน", en: "Mueang Nan" },
    th: {
      title: "บ้านพักอาศัย",
      location: "บ้านหนองเต่า, น่าน",
      area: "บ้านพักอาศัย",
      description:
        "โครงการก่อสร้างบ้านพักอาศัย บ้านหนองเต่า อ.เมืองน่าน ออกแบบและก่อสร้างครบวงจร เน้นความสวยงาม ความแข็งแรง และการใช้งานจริง",
      metaTitle: "บ้านพักอาศัย | บ้านหนองเต่า น่าน",
      metaDescription:
        "ผลงานรับสร้างบ้านพักอาศัย บ้านหนองเต่า น่าน โดย หจก. จิรายุวัสดุก่อสร้าง",
    },
    en: {
      title: "Residential House",
      location: "Ban Nong Tao, Nan",
      area: "Residential",
      description:
        "Residential house construction at Ban Nong Tao, Mueang Nan — full design and build with quality finishes.",
      metaTitle: "Residential House | Ban Nong Tao, Nan",
      metaDescription:
        "Portfolio: residential house at Ban Nong Tao by Jirayu Construction Materials.",
    },
  },
  {
    id: 6,
    slug: "obec-nan-building-105",
    type: { th: "ภาครัฐ", en: "Government" },
    featured: false,
    cover: "/portfolio/page6-img1.jpeg",
    gallery: [
      "/portfolio/page6-img1.jpeg",
      "/portfolio/page6-img2.jpeg",
      "/portfolio/page6-img3.jpeg",
    ],
    district: { th: "น่าน", en: "Mueang Nan" },
    th: {
      title: "อาคารเรียน 105",
      location: "สพป.น่าน เขต 1",
      area: "อาคารเรียน",
      description:
        "โครงการก่อสร้างอาคารเรียน 105 สำนักงานเขตพื้นที่การศึกษาประถมศึกษาน่าน เขต 1 งานก่อสร้างตามมาตรฐานภาครัฐ",
      metaTitle: "อาคารเรียน 105 | สพป.น่าน เขต 1",
      metaDescription:
        "ผลงานก่อสร้างอาคารเรียน 105 สพป.น่าน เขต 1 โดย หจก. จิรายุวัสดุก่อสร้าง",
    },
    en: {
      title: "Building 105",
      location: "Nan Primary Education Area Office 1",
      area: "School building",
      description:
        "Building 105 construction for Nan Primary Education Area Office Zone 1 — government-standard construction.",
      metaTitle: "Building 105 | Nan OBEC Zone 1",
      metaDescription:
        "Portfolio: Building 105 at Nan Primary Education Area Office 1 by Jirayu Construction Materials.",
    },
  },
  {
    id: 7,
    slug: "sk-boutique-restaurant-cafe",
    type: { th: "อาคารพาณิชย์", en: "Commercial" },
    featured: false,
    cover: "/portfolio/page7-img1.jpeg",
    gallery: ["/portfolio/page7-img1.jpeg", "/portfolio/page7-img2.jpeg"],
    district: { th: "น่าน", en: "Mueang Nan" },
    th: {
      title: "ร้านอาหาร / กาแฟ",
      location: "โรงแรมเอสเคบูติคโฮเทล, น่าน",
      area: "อาคารพาณิชย์",
      description:
        "โครงการก่อสร้างร้านอาหารและกาแฟ โรงแรมเอสเคบูติคโฮเทล อ.เมืองน่าน งานออกแบบตกแต่งและก่อสร้างครบวงจร",
      metaTitle: "ร้านอาหาร / กาแฟ | โรงแรมเอสเคบูติคโฮเทล น่าน",
      metaDescription:
        "ผลงานก่อสร้างร้านอาหารและกาแฟ โรงแรมเอสเคบูติคโฮเทล น่าน โดย หจก. จิรายุวัสดุก่อสร้าง",
    },
    en: {
      title: "Restaurant / Coffee Shop",
      location: "SK Boutique Hotel, Nan",
      area: "Commercial building",
      description:
        "Restaurant and coffee shop construction at SK Boutique Hotel, Mueang Nan — full design and build.",
      metaTitle: "Restaurant / Cafe | SK Boutique Hotel Nan",
      metaDescription:
        "Portfolio: restaurant and cafe at SK Boutique Hotel by Jirayu Construction Materials.",
    },
  },
  {
    id: 8,
    slug: "land-reform-office-3-storey",
    type: { th: "อาคารสำนักงาน", en: "Office Building" },
    featured: true,
    cover: "/portfolio/page8-img1.jpeg",
    gallery: ["/portfolio/page8-img1.jpeg", "/portfolio/page8-img2.jpeg"],
    district: { th: "น่าน", en: "Mueang Nan" },
    th: {
      title: "อาคารสำนักงาน 3 ชั้น",
      location: "สำนักงานการปฏิรูปที่ดินจังหวัดน่าน",
      area: "3 ชั้น",
      description:
        "โครงการก่อสร้างอาคารสำนักงาน 3 ชั้น สำนักงานการปฏิรูปที่ดินจังหวัดน่าน งานโครงสร้างและสถาปัตยกรรมระดับภาครัฐ",
      metaTitle: "อาคารสำนักงาน 3 ชั้น | สำนักงานการปฏิรูปที่ดิน น่าน",
      metaDescription:
        "ผลงานก่อสร้างอาคารสำนักงาน 3 ชั้น สำนักงานการปฏิรูปที่ดินจังหวัดน่าน โดย หจก. จิรายุวัสดุก่อสร้าง",
    },
    en: {
      title: "3-Storey Office Building",
      location: "Nan Provincial Land Reform Office",
      area: "3 storeys",
      description:
        "3-storey office building for Nan Provincial Land Reform Office — government-grade structural and architectural work.",
      metaTitle: "3-Storey Office | Nan Land Reform Office",
      metaDescription:
        "Portfolio: 3-storey office building at Nan Land Reform Office by Jirayu Construction Materials.",
    },
  },
  {
    id: 9,
    slug: "sompanya-gymnasium",
    type: { th: "ภาครัฐ", en: "Government" },
    featured: false,
    cover: "/portfolio/page9-img1.jpeg",
    gallery: ["/portfolio/page9-img1.jpeg", "/portfolio/page9-img2.jpeg"],
    district: { th: "น่าน", en: "Mueang Nan" },
    th: {
      title: "โรงยิมอเนกประสงค์",
      location: "โรงเรียนสมปัญญาน่าน",
      area: "โครงการภาครัฐ",
      description:
        "โครงการก่อสร้างโรงยิมอเนกประสงค์ของโรงเรียนสมปัญญาน่าน อ.เมืองน่าน โครงสร้างกว้าง รองรับกิจกรรมหลากหลาย",
      metaTitle: "โรงยิมอเนกประสงค์ | โรงเรียนสมปัญญาน่าน",
      metaDescription:
        "ผลงานก่อสร้างโรงยิมอเนกประสงค์ โรงเรียนสมปัญญาน่าน โดย หจก. จิรายุวัสดุก่อสร้าง",
    },
    en: {
      title: "Multi-Purpose Gymnasium",
      location: "Sompanya Nan School",
      area: "Government project",
      description:
        "Multi-purpose gymnasium at Sompanya Nan School — large-span structure for diverse school activities.",
      metaTitle: "Gymnasium | Sompanya Nan School",
      metaDescription:
        "Portfolio: gymnasium at Sompanya Nan School by Jirayu Construction Materials.",
    },
  },
  {
    id: 10,
    slug: "nong-tao-retail-shop",
    type: { th: "อาคารพาณิชย์", en: "Commercial" },
    featured: false,
    cover: "/portfolio/page10-img1.jpeg",
    gallery: ["/portfolio/page10-img1.jpeg", "/portfolio/page10-img2.jpeg"],
    district: { th: "น่าน", en: "Mueang Nan" },
    th: {
      title: "ร้านค้า",
      location: "บ้านหนองเต่า, น่าน",
      area: "อาคารพาณิชย์",
      description:
        "โครงการก่อสร้างร้านค้า บ้านหนองเต่า อ.เมืองน่าน ออกแบบและก่อสร้างอาคารพาณิชย์ให้เหมาะกับการใช้งานจริง",
      metaTitle: "ร้านค้า | บ้านหนองเต่า น่าน",
      metaDescription:
        "ผลงานก่อสร้างร้านค้า บ้านหนองเต่า น่าน โดย หจก. จิรายุวัสดุก่อสร้าง",
    },
    en: {
      title: "Retail Shop",
      location: "Ban Nong Tao, Nan",
      area: "Commercial building",
      description:
        "Retail shop construction at Ban Nong Tao, Mueang Nan — commercial building designed for practical use.",
      metaTitle: "Retail Shop | Ban Nong Tao, Nan",
      metaDescription:
        "Portfolio: retail shop at Ban Nong Tao by Jirayu Construction Materials.",
    },
  },
];

export type LocalizedProject = PortfolioProject & {
  title: string;
  location: string;
  area: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  typeLabel: string;
  districtLabel: string;
};

export function getPortfolioProjects(locale: Locale): LocalizedProject[] {
  return portfolioProjects.map((project) => {
    const localized = project[locale];
    return {
      ...project,
      ...localized,
      typeLabel: project.type[locale],
      districtLabel: project.district[locale],
    };
  });
}

export function getPortfolioProject(
  slug: string,
  locale: Locale,
): LocalizedProject | undefined {
  return getPortfolioProjects(locale).find((p) => p.slug === slug);
}

export function getAllPortfolioSlugs(): string[] {
  return portfolioProjects.map((p) => p.slug);
}

export function getPortfolioCategories(locale: Locale): string[] {
  const allLabel = locale === "th" ? "ทั้งหมด" : "All";
  const types = [...new Set(portfolioProjects.map((p) => p.type[locale]))];
  return [allLabel, ...types];
}
