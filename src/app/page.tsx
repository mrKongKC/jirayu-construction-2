import type { Metadata } from "next";
import { siteConfig } from "@/config/seo";

const redirectScript = `(function(){try{var l=localStorage.getItem("locale");location.replace("/"+(l==="en"||l==="th"?l:"th"));}catch(e){location.replace("/th");}})();`;

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: {
    canonical: `${siteConfig.url}/th`,
    languages: {
      "x-default": `${siteConfig.url}/th`,
      "th-TH": `${siteConfig.url}/th`,
      "en-US": `${siteConfig.url}/en`,
    },
  },
};

export default function RootRedirectPage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
      <noscript>
        <meta httpEquiv="refresh" content="0;url=/th" />
      </noscript>
      <p style={{ padding: "2rem", fontFamily: "sans-serif" }}>
        <a href="/th">ไปยังหน้าแรก / Go to homepage</a>
      </p>
    </>
  );
}
