import { HeroSection } from '../components/home/HeroSection';
import { ClassesSection } from '../components/home/ClassesSection';
import { CoachesSection } from '../components/home/CoachesSection';
import { ProcessSection } from '../components/home/ProcessSection';
import { PricingSection } from '../components/home/PricingSection';
import { ReviewsSection } from '../components/home/ReviewsSection';

export function Home() {
  return (
    <div className="flex flex-col bg-white">
      <HeroSection />
      <ClassesSection />
      <CoachesSection />
      <ProcessSection />
      <PricingSection />
      <ReviewsSection />
    </div>
  );
}

