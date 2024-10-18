import { MainSection } from '@/components/home/main-section';
import { MobileNavbar } from '@/components/navigation/mobile-nav/mobile-navbar';

export const HomeContent = () => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <MainSection />
      <MobileNavbar />
    </div>
  );
};
