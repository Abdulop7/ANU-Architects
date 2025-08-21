import QuoteRequestForm from "../../../components/get-quote/form";
import QuoteHero from "../../../components/get-quote/hero";

export default function page() {
  return (
    <div className="w-full">
      <QuoteHero />
      <QuoteRequestForm />
    </div>
  )
}
