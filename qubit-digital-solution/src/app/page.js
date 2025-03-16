import Hero from "@/components/home/Hero";
import ServiceHighlights from "@/components/home/service-highlights";
import WhyChooseUs from "@/components/home/why-choose-us";
import PricingPlans from "@/components/home/pricing-plans";


export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServiceHighlights />
      <WhyChooseUs />
      <PricingPlans />
    </div>
  );
}
