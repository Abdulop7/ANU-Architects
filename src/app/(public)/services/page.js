import DetailedServices from "../../../../components/services/detailedServices";
import ServicesHero from "../../../../components/services/hero";
import ProcessSection from "../../../../components/services/processSection";
import ServicesCategories from "../../../../components/services/serviceCategories";

export const metadata = {
  title: "Services | Architectural Design, Construction & Luxury Interior Solutions | ANU Architects",
  description: "At ANU Architects, we offer complete architectural design, construction, and interior design services to create your dream home or real estate project. From modern concepts to luxury living spaces, we design and build with precision, creativity, and elegance.",
};


export default function page() {
  return (
    <div className=" w-full">
      <ServicesHero />
      <ServicesCategories />
      <DetailedServices />
      <ProcessSection />
    </div>
  )
}
