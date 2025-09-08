import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedBooks from "@/components/FeaturedBooks";
import Footer from "@/components/Footer";
import { useScrollToHash } from "@/hooks/useScrollToHash";

const Index = () => {
  useScrollToHash(); // 👈 enable auto-scroll to anchors

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedBooks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
