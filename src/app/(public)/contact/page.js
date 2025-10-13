import ContactHero from "../../../../components/contact/hero";
import ContactSection from "../../../../components/contact/info";
import ContactMap from "../../../../components/contact/map";

export const metadata = {
  title: "Contact | Architectural Design, Construction & Luxury Interior Solutions | ANU Architects",
  description: "Get in touch with ANU Architects — your trusted partner in architectural design, construction, and interior design. Whether you’re planning a luxury home or a real estate development, our expert team is ready to turn your vision into reality.",
};


export default function page() {
  return (
    <div className="w-full">
        <ContactHero />
        <ContactSection />
        <ContactMap />
    </div>
  )
}
