import DetailedServices from "../../../components/services/detailedServices";
import ServicesHero from "../../../components/services/hero";
import ProcessSection from "../../../components/services/processSection";
import ServicesCategories from "../../../components/services/serviceCategories";

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
