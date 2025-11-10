import ContactHero from "../../../../components/contact/hero";
import ContactSection from "../../../../components/contact/info";
import ContactMap from "../../../../components/contact/map";

export const metadata = {
  title: "Contact | Architectural Design, Construction & Luxury Interior Solutions in Multan, Pakistan | ANU Architects",
  description: "Get in touch with ANU Architects, your trusted partner in architectural design, construction, and interior design across Pakistan, proudly based in Multan. Whether you’re planning a luxury home or a real estate project, our expert team is ready to bring your vision to life.",
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
