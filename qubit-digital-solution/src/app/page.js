import Hero from "@/components/home/Hero";
import ServiceHighlights from "@/components/home/service-highlights";
import InquiryForm from "@/components/home/InquiryForm";
import PricingPlans from "@/components/home/PricingSection";

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
