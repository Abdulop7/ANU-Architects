import ContactHero from "../../../../components/contact/hero";
import ContactSection from "../../../../components/contact/info";
import ContactMap from "../../../../components/contact/map";

export default function page() {
  return (
    <div className="w-full">
        <ContactHero />
        <ContactSection />
        <ContactMap />
    </div>
  )
}
