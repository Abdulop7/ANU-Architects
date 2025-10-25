

import CTASection from "../../../components/CtaSection";
import AboutSection from "../../../components/aboutSection";
import FeaturedProjects from "../../../components/featuredProjects";
import GoogleReviews from "../../../components/googleReviews";
import HeroSection from "../../../components/hero";
import ServicesSection from "../../../components/servicesSection";
import Testimonials from "../../../components/testimonials";
import WhyChooseUs from "../../../components/whyChooseUs";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjects />
      <WhyChooseUs />
      <Testimonials />
      <GoogleReviews />
      <CTASection />
    </div>
  );
}
