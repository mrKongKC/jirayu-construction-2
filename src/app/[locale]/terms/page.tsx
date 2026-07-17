import Navbar from "@/components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";
import LegalPage from "@/components/pages/LegalPage";
import { buildLegalMetadata } from "@/lib/locale-metadata";
import { isValidLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  return buildLegalMetadata(locale as Locale, "terms");
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <LegalPage type="terms" />
      <Footer />
    </>
  );
}
