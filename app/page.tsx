
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { WelcomeSection } from "@/components/WelcomeSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PackagesSection } from "@/components/PackagesSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import Chatbot from "@/components/ui/Chatbot";  

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <PackagesSection />
      <Chatbot />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
