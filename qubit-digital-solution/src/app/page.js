import Hero from "@/components/home/Hero";
import ServiceHighlights from "@/components/home/service-highlights";
import WhyChooseUs from "@/components/home/why-choose-us";
import PricingPlans from "@/components/home/pricing-plans";
import FeaturedImages from "@/components/home/featured-images";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <ServiceHighlights />
      <WhyChooseUs />
      <PricingPlans />
      <FeaturedImages />
    </div>
  );
}
