import { HeroSection } from "@/components/HeroSection";
import { NavigationCards } from "@/components/NavigationCards";

const Home = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <NavigationCards />
    </main>
  );
};

export default Home;