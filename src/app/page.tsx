import { AppPromoSection } from '@/components/AppPromoSection';
import { BlogSection } from '@/components/BlogSection';
import { GallerySection } from '@/components/GallerySection';
import { HeroSection } from '@/components/HeroSection';
import { PlanComparisonSection } from '@/components/PlanComparisonSection';
import { PricingSection } from '@/components/PricingSection';
import { ServicesSection } from '@/components/ServicesSection';
import { StaffSection } from '@/components/StaffSection';
import { ValuesSection } from '@/components/ValueSection';

export default function Home() {
  return (
    <div className="">
      <main className="">
        <HeroSection />
        {/* <ValuesSection /> */}
        {/* <ServicesSection /> */}
        <PricingSection />
        <PlanComparisonSection />
        {/* <StaffSection /> */}
        <GallerySection />
        {/* <AppPromoSection /> */}
        {/* <BlogSection /> */}
      </main>
    </div>
  );
}
