
import ContactHero from "../../../components/contact/hero";
import ContactInfo from "../../../components/contact/info";
import ContactMap from "../../../components/contact/map";

export default function page() {
  return (
    <div className="w-full">
        <ContactHero />
        <ContactInfo />
        <ContactMap />
    </div>
  )
}
