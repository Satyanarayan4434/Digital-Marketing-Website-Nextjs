import Hero from "@/components/home/Hero";
import InquiryForm from "@/components/home/InquiryForm";
import PricingPlans from "@/components/home/PricingSection";
import ServiceHighlights from "@/components/home/Service-highlights";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServiceHighlights />
      <PricingPlans/>
      <InquiryForm />
    </div>
  );
}
