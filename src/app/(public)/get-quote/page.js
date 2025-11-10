import QuoteRequestForm from "../../../../components/get-quote/form";
import QuoteHero from "../../../../components/get-quote/hero";

export const metadata = {
  title: "Get a Quote | Architectural Design, Construction & Luxury Interior Solutions in Multan, Pakistan | ANU Architects",
  description: "Start your dream home or real estate project today with ANU Architects, a leading firm based in Multan, Pakistan. Request a personalized quote for architectural design, construction, and luxury interior design services — tailored to your style, space, and budget with perfection.",
};


export default function page() {
  return (
    <div className="w-full">
      <QuoteHero />
      <QuoteRequestForm />
    </div>
  )
}
