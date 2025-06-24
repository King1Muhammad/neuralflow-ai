
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import IndustriesSection from '@/components/sections/IndustriesSection';
import AboutSection from '@/components/sections/AboutSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div>
      <HeroSection />
      <div className="relative z-10 bg-dark-purple">
        <ServicesSection />
        <IndustriesSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Index;
