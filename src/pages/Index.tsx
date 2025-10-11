import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import AudienceSegments from "@/components/AudienceSegments";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import SafetyTips from "@/components/SafetyTips";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Services />
      <AudienceSegments />
      <Testimonials />
      <FAQ />
      <SafetyTips />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
