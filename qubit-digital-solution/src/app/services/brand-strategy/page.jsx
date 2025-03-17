"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, Target, Users, BarChart, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import QueryModal from "@/components/services/query-modal";
import {
  BorderBeam,
  MagicCard,
  DotPattern,
  TestimonialCard,
} from "@/components/services/ui-elements";
import PricingSection from "@/components/services/pricing";

export default function BrandStrategyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  const icons = [
    <Lightbulb key="lightbulb" size={32} className="text-blue-400" />,
    <Target key="target" size={32} className="text-purple-400" />,
    <Users key="users" size={32} className="text-blue-400" />,
    <BarChart key="barchart" size={32} className="text-purple-400" />,
    <Award key="award" size={32} className="text-blue-400" />,
    <Zap key="zap" size={32} className="text-purple-400" />,
  ];

  const [animateBackground, setAnimateBackground] = useState(false);

  useEffect(() => {
    setAnimateBackground(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#EFEFF0] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-[url('/assets/Group.png')] bg-center  overflow-hidden bg-no-repeat min-h-[500px] w-full bg-black pb-28">
        <div className="flex flex-col max-w-7xl mx-auto">
          <h1 className="text-4xl font-medium tracking-tight text-gray-300 py-10">
            Brand Strategy Agency
          </h1>
          <div className="flex flex-wrap gap-8 ">
            <img
              src="/assets/Brand.jpg"
              alt="Web Development"
              className="w-[45%] rounded-lg"
            />

            <div className="flex flex-col justify-center items-center gap-4 w-1/2 text-gray-300 leading-loose">
              <p>
                Crafting a strong brand strategy is the first step toward
                building a lasting identity in any market. Whether you’re an
                established business expanding into new territories or a startup
                defining its presence, a well-structured approach ensures
                clarity and direction. A strategic foundation paves the way for
                impactful marketing and communication, covering everything from
                brand positioning and identity development to architecture,
                tactical planning, and media execution. With the right strategy
                in place, your brand can stand out, connect with the right
                audience, and drive long-term success.
              </p>
              <p>
                A seamless and well-executed brand strategy ensures consistency
                across all touchpoints, creating a compelling narrative that
                resonates with your audience. Whether launching a new brand or
                revitalizing an existing one, having a dedicated team to plan,
                build, and manage branding efforts makes all the difference.
                Ready to elevate your brand? Explore a range of tailored
                services designed to bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Our Brand Strategy Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-300"
            >
              Comprehensive brand strategy solutions to help your business stand
              out in a crowded marketplace.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb size={32} className="text-blue-400" />,
                title: "Brand Identity Development",
                description:
                  "Create a distinctive visual and verbal identity that captures your brand's essence and appeals to your target audience.",
              },
              {
                icon: <Target size={32} className="text-purple-400" />,
                title: "Market Positioning",
                description:
                  "Define your unique place in the market with strategies that highlight your competitive advantages.",
              },
              {
                icon: <Users size={32} className="text-blue-400" />,
                title: "Audience Analysis",
                description:
                  "Gain deep insights into your target audience's behaviors, preferences, and pain points to inform your brand strategy.",
              },
              {
                icon: <BarChart size={32} className="text-purple-400" />,
                title: "Competitive Analysis",
                description:
                  "Understand your competition's strengths and weaknesses to identify opportunities for differentiation.",
              },
              {
                icon: <Award size={32} className="text-blue-400" />,
                title: "Brand Messaging",
                description:
                  "Develop clear, consistent, and compelling messaging that communicates your brand's value proposition.",
              },
              {
                icon: <Zap size={32} className="text-purple-400" />,
                title: "Brand Experience Design",
                description:
                  "Create memorable interactions at every touchpoint to build brand loyalty and advocacy.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <BorderBeam>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </BorderBeam>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white text-black">
        <DotPattern className="opacity-10" />
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            >
              Our Brand Strategy Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600"
            >
              A proven methodology that delivers results for businesses of all
              sizes.
            </motion.p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>

            <div className="grid grid-cols-1 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8 items-center"
              >
                <div className="md:text-right md:pr-12">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    1. Discovery & Research
                  </h3>
                  <p className="text-gray-600">
                    We begin by immersing ourselves in your business, industry,
                    and audience through comprehensive research and stakeholder
                    interviews.
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 mt-1 md:mt-0 w-6 h-6 rounded-full bg-blue-600 transform -translate-x-1/2 flex items-center justify-center">
                  <span className="text-xs font-bold">1</span>
                </div>
                <MagicCard className="mt-6 md:mt-0 bg-gradient-to-br from-gray-100 to-white border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                    <Lightbulb size={64} className="text-blue-600" />
                  </div>
                </MagicCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8 items-center"
              >
                <MagicCard className="md:order-first bg-gradient-to-br from-gray-100 to-white border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                    <Target size={64} className="text-purple-600" />
                  </div>
                </MagicCard>
                <div className="absolute left-0 md:left-1/2 mt-1 md:mt-0 w-6 h-6 rounded-full bg-purple-600 transform -translate-x-1/2 flex items-center justify-center">
                  <span className="text-xs font-bold">2</span>
                </div>
                <div className="md:pl-12 mt-6 md:mt-0">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    2. Strategy Development
                  </h3>
                  <p className="text-gray-600">
                    Based on our findings, we develop a comprehensive brand
                    strategy that includes positioning, messaging, and visual
                    direction.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8 items-center"
              >
                <div className="md:text-right md:pr-12">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    3. Creative Execution
                  </h3>
                  <p className="text-gray-600">
                    We bring your brand strategy to life through compelling
                    visual identity, messaging, and brand guidelines.
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 mt-1 md:mt-0 w-6 h-6 rounded-full bg-blue-600 transform -translate-x-1/2 flex items-center justify-center">
                  <span className="text-xs font-bold">3</span>
                </div>
                <MagicCard className="mt-6 md:mt-0 bg-gradient-to-br from-gray-100 to-white border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                    <Award size={64} className="text-blue-600" />
                  </div>
                </MagicCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-0 md:grid md:grid-cols-2 md:gap-8 items-center"
              >
                <MagicCard className="md:order-first bg-gradient-to-br from-gray-100 to-white border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                    <Zap size={64} className="text-purple-600" />
                  </div>
                </MagicCard>
                <div className="absolute left-0 md:left-1/2 mt-1 md:mt-0 w-6 h-6 rounded-full bg-purple-600 transform -translate-x-1/2 flex items-center justify-center">
                  <span className="text-xs font-bold">4</span>
                </div>
                <div className="md:pl-12 mt-6 md:mt-0">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    4. Implementation & Activation
                  </h3>
                  <p className="text-gray-600">
                    We help you roll out your new brand strategy across all
                    channels and touchpoints for maximum impact.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-28 relative bg-[url('/assets/Group.png')] bg-center  overflow-hidden bg-no-repeat min-h-[500px] w-full">
        <DotPattern />
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-300"
            >
              Don't just take our word for it. Here's what our clients have to
              say about our brand strategy services.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The brand strategy they developed for us completely transformed how our customers perceive us. Our engagement has increased by 150% since the rebrand."
              author="Sarah Johnson"
              position="CMO"
              company="TechVision Inc."
            />

            <TestimonialCard
              quote="Their strategic approach to our brand positioning helped us stand out in a crowded market. We've seen a 75% increase in qualified leads since working with them."
              author="Michael Chen"
              position="Founder"
              company="Innovate Solutions"
            />

            <TestimonialCard
              quote="The team's deep understanding of our industry and audience was impressive. They delivered a brand strategy that truly resonates with our customers."
              author="Jessica Williams"
              position="Marketing Director"
              company="Global Retail Group"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection
        title="Brand Strategy Packages"
        description="Flexible options to meet the needs of businesses at every stage of growth."
        bgWhite={true}
        packages={[
          {
            title: "Startup Brand Package",
            price: "2,499",
            features: [
              "Brand Discovery Workshop",
              "Competitor Analysis",
              "Brand Positioning Strategy",
              "Core Messaging Framework",
              "Brand Style Guide",
              "30-Day Implementation Support",
            ],
            popular: false,
          },
          {
            title: "Growth Brand Package",
            price: "4,999",
            features: [
              "Everything in Startup Package",
              "In-depth Audience Research",
              "Brand Voice & Tone Guidelines",
              "Content Strategy",
              "Brand Storytelling Framework",
              "90-Day Implementation Support",
              "Quarterly Strategy Reviews (1 year)",
            ],
            popular: true,
          },
          {
            title: "Enterprise Brand Package",
            price: "Custom",
            features: [
              "Comprehensive Brand Audit",
              "Full-Scale Market Research",
              "Global Brand Strategy",
              "Multi-Channel Brand Guidelines",
              "Internal Brand Training",
              "Brand Measurement Framework",
              "Ongoing Brand Management Support",
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
              Ready to Transform Your Brand?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 mb-14"
            >
              Let's create a brand strategy that drives growth and builds
              lasting connections with your audience.
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
                  Schedule a Strategy Call
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
        serviceName="Brand Strategy Services"
      />
    </div>
  );
}
