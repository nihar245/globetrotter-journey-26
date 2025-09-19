import { motion } from "framer-motion";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import FeaturedSection from "./FeaturedSection";
import HowItWorksSection from "./HowItWorksSection";
import TestimonialsSection from "./TestimonialsSection";
import FeaturesSection from "./FeaturesSection";
import MissionSection from "./MissionSection";
import PricingSection from "./PricingSection";
import FAQSection from "./FAQSection";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navigation />
      <HeroSection />
      <FeaturedSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FeaturesSection />
      <MissionSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </motion.div>
  );
};

export default LandingPage;