import Hero from "@/components/home/Hero";
import InquiryForm from "@/components/home/InquiryForm";
import PricingPlans from "@/components/home/PricingSection";
import ServiceHighlights from "@/components/home/Service-highlights";
import WhyToChooseUs from "@/components/home/Why-choose-us";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ServiceHighlights />
      <PricingPlans/>
      <InquiryForm />
      <WhyToChooseUs />
      {/* Additional sections can be added here */}
      {/* <ClientImages /> */}
      {/* <BlogOverview /> */}
      {/* <Testimonials /> */}
      {/* <ContactUs /> */}
    </div>
  );
}
