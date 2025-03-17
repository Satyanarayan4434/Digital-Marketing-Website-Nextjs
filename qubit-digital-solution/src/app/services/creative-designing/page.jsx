"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Palette, Image, Layout, Film, PenTool, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import QueryModal from "@/components/services/query-modal";
import {
  BorderBeam,
  MagicCard,
  DotPattern,
  IconCloud,
  TestimonialCard,
} from "@/components/services/ui-elements";
import PricingSection from "@/components/services/pricing";

export default function CreativeDesigningPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const icons = [
    <Palette key="palette" size={32} className="text-blue-400" />,
    <Image key="image1" size={32} className="text-purple-400" />,
    <Layout key="layout1" size={32} className="text-blue-400" />,
    <Image key="image2" size={32} className="text-purple-400" />,
    <Layout key="layout2" size={32} className="text-blue-400" />,
    <Film key="film" size={32} className="text-purple-400" />,
    <PenTool key="pentool" size={32} className="text-blue-400" />,
    <Layers key="layers" size={32} className="text-purple-400" />,
  ];

  return (
    <div className="min-h-screen bg-[#EFEFF0] text-white">
      {/* Hero Section */}
      <section className="relative bg-[url('/assets/Group.png')] bg-center  overflow-hidden bg-no-repeat min-h-[500px] w-full bg-black pb-28">
        <div className="container flex flex-col max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <h1 className="text-4xl font-medium tracking-tight text-gray-300 py-10">
              Creative Designing Agency
            </h1>
            <div className="flex flex-wrap gap-8 ">
              <img
                src="/services/Design.webp"
                alt="Web Development"
                className="w-[49%] rounded-lg"
              />

              <div className="flex flex-col justify-center items-center gap-4 w-[45%] text-gray-300">
                <p>
                  Our design and communication teams are adept at transforming
                  your requirements into reality. Be it crafting a brand
                  identity, packaging, translating your positioning into
                  effective communication tools, making a corporate tool, or the
                  perfect presentation, point of sale designs or print ads, our
                  team is here for all your communication requirements. At
                  PromotEdge, a leading creative agency, we use the best of our
                  talent to create thought-provoking creatives that positively
                  impact our client’s business. We derive our communications
                  from insights and data-backed research, ensuring memorable
                  visual elements that stand out amidst the clutter and leave a
                  lasting impact.
                </p>
                <p>
                  We have a collaborative approach where we put our team with
                  the clients to understand the vision, mood board, and goal and
                  then execute and deliver not only captive but also tangible
                  results. As a creative agency, we derive our communications
                  from insights and data-backed research, ensuring memorable
                  visual elements that stand out amidst the clutter and leave a
                  lasting impact. Embracing the art of simplicity, our goal is
                  to deliver impactful communication assets through a
                  straightforward approach in every creation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Creative Design Services
            </h2>
            <p className="text-gray-300">
              Comprehensive design solutions to help your business make a
              lasting impression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BorderBeam>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette size={32} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Brand Identity Design
                </h3>
                <p className="text-gray-300">
                  Create a cohesive visual identity including logos, color
                  palettes, typography, and brand guidelines.
                </p>
              </div>
            </BorderBeam>

            <BorderBeam>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Layout size={32} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
                <p className="text-gray-300">
                  Create intuitive, engaging user interfaces and experiences for
                  websites, apps, and digital products.
                </p>
              </div>
            </BorderBeam>

            <BorderBeam>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image size={32} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Print & Packaging Design
                </h3>
                <p className="text-gray-300">
                  Design eye-catching marketing materials, product packaging,
                  and other physical brand assets.
                </p>
              </div>
            </BorderBeam>

            <BorderBeam>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Film size={32} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Motion Graphics</h3>
                <p className="text-gray-300">
                  Create animated videos, explainers, and dynamic visual content
                  that brings your brand to life.
                </p>
              </div>
            </BorderBeam>

            <BorderBeam>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PenTool size={32} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Illustration & Iconography
                </h3>
                <p className="text-gray-300">
                  Custom illustrations and icon sets that enhance your visual
                  storytelling and brand personality.
                </p>
              </div>
            </BorderBeam>

            <BorderBeam>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Layers size={32} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  3D Design & Visualization
                </h3>
                <p className="text-gray-300">
                  Create immersive 3D models, product renderings, and
                  visualizations that showcase your offerings.
                </p>
              </div>
            </BorderBeam>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Creative Process
            </h2>
            <p className="text-gray-300">
              A structured approach that delivers exceptional design results
              every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <MagicCard>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Discovery</h3>
                <p className="text-gray-300">
                  We learn about your business, goals, audience, and competition
                  to inform our design strategy.
                </p>
              </div>
            </MagicCard>

            <MagicCard>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Concept</h3>
                <p className="text-gray-300">
                  We develop initial design concepts and creative directions
                  based on our research findings.
                </p>
              </div>
            </MagicCard>

            <MagicCard>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Refinement</h3>
                <p className="text-gray-300">
                  We iterate on the selected concept, refining every detail
                  until the design is perfect.
                </p>
              </div>
            </MagicCard>

            <MagicCard>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Delivery</h3>
                <p className="text-gray-300">
                  We provide final design assets in all required formats, along
                  with guidelines for implementation.
                </p>
              </div>
            </MagicCard>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Design Tools & Technologies
            </h2>
            <p className="text-gray-300">
              We use industry-leading tools and technologies to create
              exceptional designs.
            </p>
          </div>

          <IconCloud icons={icons} />
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection
        title="Design Service Packages"
        description="Flexible options to meet your creative design needs and budget."
        packages={[
          {
            title: "Essential Design",
            price: "1,499",
            features: [
              "Logo Design",
              "Brand Color Palette",
              "Typography Selection",
              "Basic Brand Guidelines",
              "2 Rounds of Revisions",
              "Source Files Included",
            ],
            popular: false,
          },
          {
            title: "Premium Design",
            price: "3,499",
            features: [
              "Everything in Essential Package",
              "Extended Brand Guidelines",
              "Social Media Templates",
              "Business Card & Stationery",
              "Marketing Collateral Design",
              "3 Rounds of Revisions",
              "Ongoing Design Support (1 month)",
            ],
            popular: true,
          },
          {
            title: "Enterprise Design",
            price: "Custom",
            features: [
              "Comprehensive Brand Identity",
              "UI/UX Design for Web & Mobile",
              "Custom Illustration & Iconography",
              "Motion Graphics & Animation",
              "Print & Packaging Design",
              "Unlimited Revisions",
              "Dedicated Design Team",
            ],
            popular: false,
          },
        ]}
      />

      {/* CTA Section */}
      <section className="bg-[url('/assets/Group.png')] py-20 bg-center bg-[length:190%] bg-no-repeat min-h-[500px] w-full overflow-y-auto flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Ready to Elevate Your Brand's Visual Identity?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 mb-14"
            >
              Let's create designs that captivate your audience and drive
              business results.
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full md:w-auto">
                <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-16 bg-orange-500 rounded-full opacity-20 blur-xl transition-all"></div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  type="submit"
                  className="relative z-10 w-full md:w-auto px-16 py-3 bg-black rounded-full text-white text-lg border border-orange-300 transition-all cursor-pointer shadow-lg shadow-orange-300/20 hover:shadow-md hover:shadow-orange-400/30 hover:border-orange-400"
                >
                  Schedule a Design Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Query Modal */}
      <QueryModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        serviceName="Creative Design Services"
      />
    </div>
  );
}
