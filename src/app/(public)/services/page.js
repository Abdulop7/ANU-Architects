import DetailedServices from "../../../../components/services/detailedServices";
import ServicesHero from "../../../../components/services/hero";
import ProcessSection from "../../../../components/services/processSection";
import ServicesCategories from "../../../../components/services/serviceCategories";

export const metadata = {
  title: "Services | Architectural Design, Construction & Luxury Interior Solutions in Multan, Pakistan | ANU Architects",
  description: "At ANU Architects, we offer complete architectural design, construction, and interior design services across Pakistan, with our main studio in Multan. From modern homes to luxury spaces, we craft designs with precision, creativity, and elegance — delivering excellence nationwide.",
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
