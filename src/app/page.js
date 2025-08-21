import Image from "next/image";
import HeroSection from "../../components/hero";
import AboutSection from "../../components/aboutSection";
import ServicesSection from "../../components/servicesSection";
import FeaturedProjects from "../../components/featuredProjects";
import WhyChooseUs from "../../components/whyChooseUs";
import Testimonials from "../../components/testimonials";
import CTASection from "../../components/CtaSection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </div>
  );
}
