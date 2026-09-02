export const businessRegistry = {
  registrationNumber: "0553555000034",
  registrationUrl:
    "https://www.dataforthai.com/company/0553555000034/",

  legalNameTh: "ห้างหุ้นส่วนจำกัด จิรายุวัสดุก่อสร้าง",
  legalNameEn: "JIRAYU CONSTRUCTION MATERIALS LTD., PART.",
  tradeNameTh: "หจก. จิรายุวัสดุก่อสร้าง",
  tradeNameEn: "Jirayu Construction Materials",

  foundedDate: "2012-01-09",
  foundedYear: 2012,

  address: {
    streetAddress: "36 หมู่ 10 ต.กองควาย",
    locality: "อ.เมืองน่าน",
    region: "น่าน",
    postalCode: "55000",
    country: "TH",
    fullTh: "36 หมู่ 10 ต.กองควาย อ.เมืองน่าน จ.น่าน 55000",
    fullEn: "36 Moo 10, Kong Khwai, Mueang Nan, Nan 55000",
  },

  businessScopeTh: [
    "รับเหมาก่อสร้าง",
    "งานช่างโยธาทุกประเภท",
    "จำหน่ายวัสดุก่อสร้าง",
    "จำหน่ายอุปกรณ์ที่เกี่ยวข้องทุกชนิด",
    "งานรังวัดทุกประเภท",
    "งานออกแบบ เขียนแบบ และรับรองแบบ งานบ้านเรือน อาคาร ตึก และสิ่งปลูกสร้างอื่น ๆ",
  ],
  businessScopeEn: [
    "General construction contracting",
    "All types of civil engineering work",
    "Construction materials sales",
    "Related equipment sales",
    "All types of surveying work",
    "Design, drafting, and plan certification for residential and commercial buildings",
  ],

  /** Service districts — work is not accepted beyond these areas */
  serviceAreas: {
    th: ["น่าน", "เชียงกลาง", "ท่าวังผา", "ปัว", "เวียงสา"],
    en: ["Mueang Nan", "Chiang Klang", "Tha Wang Pha", "Pua", "Wiang Sa"],
  },

  geo: {
    latitude: "18.7756",
    longitude: "100.7730",
  },

  openingHours: {
    days: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ] as const,
    opens: "08:00",
    closes: "17:00",
  },
} as const;

export function getYearsInBusiness(fromYear = new Date().getFullYear()) {
  return Math.max(fromYear - businessRegistry.foundedYear, 1);
}
