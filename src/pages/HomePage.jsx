import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import BestSellers from "../components/BestSellers";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen pb-10">
      <HeroSection />
      <Categories />
      <BestSellers />
    </div>
  );
}
