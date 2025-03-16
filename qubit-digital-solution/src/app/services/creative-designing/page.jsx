"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Palette, Image, Layout, Film, PenTool, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import QueryModal from "@/components/query-modal";
import {
  BorderBeam,
  MagicCard,
  DotPattern,
  IconCloud,
  TestimonialCard,
} from "@/components/ui-elements";
import PricingSection from "@/components/pricing-section";

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
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <DotPattern />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Creative Designing Agency
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We transform ideas into visually stunning designs that captivate
              your audience and elevate your brand.
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-md"
            >
              Get a Free Design Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-blue-950/20">
        <div className="container mx-auto px-4">
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

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Creative Portfolio
            </h2>
            <p className="text-gray-300">
              A showcase of our recent design work across various industries and
              mediums.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg"
              >
                <div className="aspect-square bg-blue-900/20 overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=400&width=400&text=Project+${item}`}
                    alt={`Design Project ${item}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">
                    Project Title {item}
                  </h3>
                  <p className="text-gray-300">Brand Identity, UI/UX Design</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-blue-950/50 text-white border border-blue-900/50 hover:bg-blue-900/30">
              View Full Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-blue-950/20">
        <div className="container mx-auto px-4">
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
      <section className="py-20">
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

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Client Testimonials
            </h2>
            <p className="text-gray-300">
              Hear what our clients have to say about our creative design
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Their design team took our vague ideas and transformed them into a stunning visual identity that perfectly captures our brand essence."
              author="David Rodriguez"
              position="CEO"
              company="Nexus Innovations"
            />

            <TestimonialCard
              quote="The UI/UX design they created for our app resulted in a 40% increase in user engagement and a significant reduction in bounce rates."
              author="Emily Chang"
              position="Product Manager"
              company="TechFlow"
            />

            <TestimonialCard
              quote="Their packaging design completely transformed our product's shelf presence. Sales increased by 35% within the first quarter after the redesign."
              author="Robert Miller"
              position="Marketing Director"
              company="Natural Goods Co."
            />
          </div>
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
      <section className="py-20 bg-gradient-to-b from-blue-950/40 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Elevate Your Brand's Visual Identity?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create designs that captivate your audience and drive
              business results.
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-md"
            >
              Schedule a Design Consultation
            </Button>
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
