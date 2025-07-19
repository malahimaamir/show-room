import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { TrendingVehicles } from "@/components/TrendingVehicles";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <CategoriesSection />
        <TrendingVehicles />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
