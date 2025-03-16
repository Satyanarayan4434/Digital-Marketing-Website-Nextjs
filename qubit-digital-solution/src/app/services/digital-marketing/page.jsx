"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  BarChart2,
  Search,
  Share2,
  Mail,
  LineChart,
  Megaphone,
} from "lucide-react";
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

export default function DigitalMarketingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const icons = [
    <Search key="search" size={32} className="text-blue-400" />,
    <Share2 key="share" size={32} className="text-purple-400" />,
    <Mail key="mail" size={32} className="text-blue-400" />,
    <BarChart2 key="barchart" size={32} className="text-purple-400" />,
    <LineChart key="linechart" size={32} className="text-blue-400" />,
    <Megaphone key="megaphone" size={32} className="text-purple-400" />,
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
              Digital Marketing Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Data-driven strategies that increase your online visibility, drive
              qualified traffic, and convert visitors into customers.
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-md"
            >
              Get a Free Marketing Audit
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-blue-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Digital Marketing Services
            </h2>
            <p className="text-gray-300">
              Comprehensive digital marketing solutions to help your business
              grow online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BorderBeam>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={32} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Search Engine Optimization
                </h3>
                <p className="text-gray-300">
                  Improve your website's visibility in search results to drive
                  more organic traffic and qualified leads.
                </p>
              </div>
            </BorderBeam>

            <BorderBeam>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart2 size={32} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Pay-Per-Click Advertising
                </h3>
                <p className="text-gray-300">
                  Create targeted ad campaigns that deliver immediate results
                  and maximize your ROI.
                </p>
              </div>
            </BorderBeam>

            <BorderBeam>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Share2 size={32} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Social Media Marketing
                </h3>
                <p className="text-gray-300">
                  Build brand awareness, engage with your audience, and drive
                  conversions through social media platforms.
                </p>
              </div>
            </BorderBeam>

            <BorderBeam>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={32} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email Marketing</h3>
                <p className="text-gray-300">
                  Nurture leads and build customer loyalty with personalized
                  email campaigns that drive results.
                </p>
              </div>
            </BorderBeam>

            <BorderBeam>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LineChart size={32} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Analytics & Reporting
                </h3>
                <p className="text-gray-300">
                  Gain valuable insights into your marketing performance and
                  make data-driven decisions.
                </p>
              </div>
            </BorderBeam>

            <BorderBeam>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Megaphone size={32} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Content Marketing</h3>
                <p className="text-gray-300">
                  Create valuable content that attracts, engages, and converts
                  your target audience.
                </p>
              </div>
            </BorderBeam>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Results That Speak for Themselves
            </h2>
            <p className="text-gray-300">
              Our data-driven approach delivers measurable results for
              businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <MagicCard>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                  250%
                </div>
                <p className="text-gray-300">
                  Average increase in organic traffic for our clients
                </p>
              </div>
            </MagicCard>

            <MagicCard>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                  180%
                </div>
                <p className="text-gray-300">
                  Average increase in lead generation
                </p>
              </div>
            </MagicCard>

            <MagicCard>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                  320%
                </div>
                <p className="text-gray-300">Average ROI on PPC campaigns</p>
              </div>
            </MagicCard>

            <MagicCard>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                  95%
                </div>
                <p className="text-gray-300">Client retention rate</p>
              </div>
            </MagicCard>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-blue-950/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Digital Marketing Process
            </h2>
            <p className="text-gray-300">
              A proven methodology that delivers consistent results for our
              clients.
            </p>
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
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    1. Research & Analysis
                  </h3>
                  <p className="text-gray-300">
                    We analyze your business, industry, competitors, and target
                    audience to develop a strategic marketing plan.
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 mt-1 md:mt-0 w-6 h-6 rounded-full bg-blue-600 transform -translate-x-1/2 flex items-center justify-center">
                  <span className="text-xs font-bold">1</span>
                </div>
                <MagicCard className="mt-6 md:mt-0">
                  <div className="h-48 bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <Search size={64} className="text-blue-400" />
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
                <MagicCard className="md:order-first">
                  <div className="h-48 bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <Megaphone size={64} className="text-purple-400" />
                  </div>
                </MagicCard>
                <div className="absolute left-0 md:left-1/2 mt-1 md:mt-0 w-6 h-6 rounded-full bg-purple-600 transform -translate-x-1/2 flex items-center justify-center">
                  <span className="text-xs font-bold">2</span>
                </div>
                <div className="md:pl-12 mt-6 md:mt-0">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    2. Strategy Development
                  </h3>
                  <p className="text-gray-300">
                    We create a customized digital marketing strategy aligned
                    with your business goals and target audience.
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
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    3. Implementation
                  </h3>
                  <p className="text-gray-300">
                    We execute the strategy across all relevant digital
                    channels, optimizing for maximum performance.
                  </p>
                </div>
                <div className="absolute left-0 md:left-1/2 mt-1 md:mt-0 w-6 h-6 rounded-full bg-blue-600 transform -translate-x-1/2 flex items-center justify-center">
                  <span className="text-xs font-bold">3</span>
                </div>
                <MagicCard className="mt-6 md:mt-0">
                  <div className="h-48 bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <Share2 size={64} className="text-blue-400" />
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
                <MagicCard className="md:order-first">
                  <div className="h-48 bg-blue-900/20 rounded-lg flex items-center justify-center">
                    <LineChart size={64} className="text-purple-400" />
                  </div>
                </MagicCard>
                <div className="absolute left-0 md:left-1/2 mt-1 md:mt-0 w-6 h-6 rounded-full bg-purple-600 transform -translate-x-1/2 flex items-center justify-center">
                  <span className="text-xs font-bold">4</span>
                </div>
                <div className="md:pl-12 mt-6 md:mt-0">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    4. Monitoring & Optimization
                  </h3>
                  <p className="text-gray-300">
                    We continuously monitor performance and optimize campaigns
                    to improve results and maximize ROI.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Marketing Tools & Technologies
            </h2>
            <p className="text-gray-300">
              We leverage industry-leading tools and technologies to drive
              results for our clients.
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
              Client Success Stories
            </h2>
            <p className="text-gray-300">
              Hear what our clients have to say about our digital marketing
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Their SEO strategy increased our organic traffic by 320% and doubled our lead generation within just 6 months."
              author="Jennifer Lee"
              position="Marketing Director"
              company="SaaS Solutions Inc."
            />

            <TestimonialCard
              quote="The PPC campaigns they managed delivered a 450% ROI and helped us expand into three new markets."
              author="Mark Thompson"
              position="CEO"
              company="E-commerce Ventures"
            />

            <TestimonialCard
              quote="Their social media marketing transformed our brand presence online and increased our customer engagement by 275%."
              author="Sophia Martinez"
              position="Brand Manager"
              company="Lifestyle Brands Co."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection
        title="Digital Marketing Packages"
        description="Flexible options to meet your marketing needs and budget."
        bgWhite={true}
        packages={[
          {
            title: "Starter Package",
            price: "999",
            features: [
              "SEO Audit & Optimization",
              "Google Business Profile Setup",
              "Basic Social Media Management",
              "Monthly Performance Report",
              "Email Support",
            ],
            popular: false,
          },
          {
            title: "Growth Package",
            price: "2,499",
            features: [
              "Everything in Starter Package",
              "Comprehensive SEO Strategy",
              "PPC Campaign Management",
              "Content Marketing",
              "Advanced Social Media Strategy",
              "Email Marketing Campaigns",
              "Bi-weekly Strategy Calls",
            ],
            popular: true,
          },
          {
            title: "Enterprise Package",
            price: "4,999",
            features: [
              "Everything in Growth Package",
              "Custom Marketing Strategy",
              "Conversion Rate Optimization",
              "Marketing Automation",
              "Competitor Analysis",
              "Advanced Analytics & Reporting",
              "Dedicated Account Manager",
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
              Ready to Grow Your Business Online?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create a digital marketing strategy that drives real results
              for your business.
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-md"
            >
              Get Your Free Marketing Audit
            </Button>
          </div>
        </div>
      </section>

      {/* Query Modal */}
      <QueryModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        serviceName="Digital Marketing Services"
      />
    </div>
  );
}
