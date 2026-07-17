import Navbar from '@/components/layouts/navbar/Navbar';
import HeroSection from '@/components/sections/hero/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/portfolio/PortfolioSection';
import WhyUsSection from '@/components/sections/WhyUsSection';
import ProcessSection from '@/components/sections/process/ProcessSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import CTABannerSection from '@/components/sections/CTABannerSection';
import ContactSection from '@/components/sections/contact/ContactSection';
import FaqSection from '@/components/sections/FaqSection';
import Footer from '@/components/layouts/footer/Footer';
import FloatingActionsSection from '@/components/sections/FloatingActionsSection';
import { sectionConfig as config } from "@/config/section";

const SECTIONS = [
  { id: 'hero', component: HeroSection, show: config.showHero },
  { id: 'services', component: ServicesSection, show: config.showServices },
  { id: 'portfolio', component: PortfolioSection, show: config.showPortfolio },
  { id: 'whyUs', component: WhyUsSection, show: config.showWhyUs },
  { id: 'process', component: ProcessSection, show: config.showProcess },
  { id: 'reviews', component: ReviewsSection, show: config.showReviews },
  { id: 'cta', component: CTABannerSection, show: config.showCTABanner },
  { id: 'contact', component: ContactSection, show: config.showContact },
  { id: 'faq', component: FaqSection, show: config.showFaq },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
       {SECTIONS.map(({ id, component: Component, show }) => 
          show ? <Component key={id} /> : null
        )}
      </main>
      <Footer />
      <FloatingActionsSection />
    </>
  );
}
