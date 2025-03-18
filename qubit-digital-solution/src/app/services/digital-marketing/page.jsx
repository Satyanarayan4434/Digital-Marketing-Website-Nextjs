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
  IconCloud,
  TestimonialCard,
} from "@/components/services/ui-elements";
import PricingSection from "@/components/services/pricing";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import CountUp from "@/components/services/countUp";
import FAQSection from "@/components/services/faq-section";

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
    <div className="min-h-screen bg-black text-white overflow-hidden">
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
              Digital Marketing Services
            </h1>
            <div className="flex flex-wrap gap-8 ">
              <img
                src="/services/Digital.jpg"
                alt="Web Development"
                className="w-[49%] rounded-lg"
              />

              <div className="flex flex-col justify-center items-center gap-4 w-[45%] text-gray-300">
                <p>
                  Marketing virtually to grow an online presence and gain
                  recognition is what digital marketing thrives to do. As a
                  spearheading digital marketing agency, PromotEdge is here to
                  assist you. We understand your brand and analyse your customer
                  base to create sound communication that leads to potential
                  conversion
                </p>
                <p>
                  Digital marketing is about strategizing and implementing
                  campaigns that will help you create an audience. We at
                  PromotEdge use numerous digital tools to connect with your
                  potential customers. As an agency, we design communication
                  systems that help you reach out to your customers and make
                  them buy what you sell.
                </p>
                <p>
                  Such processes revolve around search engine optimization,
                  social media marketing, email marketing, SMS, mobile app
                  development, etc. We understand the targets you want to
                  achieve and use free (SMO, SEO) and paid channels (SMM, SEM).
                  Such tools assist us in creating an effective digital
                  marketing strategy to support your goals.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-blue-950/20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl  font-bold mb-4">
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
                  Create targeted ad campaigns that will deliver immediate
                  results and this will maximize your ROI.
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
                <p className="text-gray-300 pb-6">
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
                <p className="text-gray-300 pb-6">
                  Create valuable content that attracts, engages, and converts
                  your target audience.
                </p>
              </div>
            </BorderBeam>
          </div>
        </div>
      </section>

      {/* Our Approach and Working Process Section */}
      <section className="py-20 relative bg-white text-black">
        <div className="absolute inset-0">
          <DotPattern
            className={cn(
              "opacity-100",
              "[mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]"
            )}
          />
        </div>
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Our Approach and Working Process
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600 text-md"
            >
              We define objectives, understand user journeys, align with
              business goals, and shape communication. Our team creates resonant
              brand content, selecting platforms and voices, followed by
              campaigns optimized for effective digital outreach.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 relative">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-center"></div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-4">
                  <div className="w-3 h-3 rounded-full bg-blue-600 z-10 -ml-1 -mt-2"></div>
                  <div className="w-0.5 h-5 bg-blue-600  mb-3"></div>
                </div>
                <h3 className="text-6xl font-bold text-gray-300 mb-4 tracking-wide">
                  One
                </h3>
              </div>
              <h4 className="text-2xl font-bold mb-3">Objective Defining</h4>
              <p className="text-gray-600">
                Grasping the pulse of digital marketing and integrated services
                is done by object-defining. Just getting visitors is not enough
                to get the business, we understand products, services, and user
                journeys to define the objective.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-center"></div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-4">
                  <div className="w-3 h-3 rounded-full bg-blue-600 z-10 -ml-1 -mt-2"></div>
                  <div className="w-0.5 h-5 bg-blue-600  mb-3"></div>
                </div>
                <h3 className="text-6xl font-bold text-gray-300 mb-4 tracking-wide">
                  Two
                </h3>
              </div>
              <h4 className="text-2xl font-bold mb-3">
                Exploring, and analysing
              </h4>
              <p className="text-gray-600">
                To build a target segment, it is important to know what they are
                looking for. Our brand strategists and data analysts investigate
                competitors' activity, understand business goals, and determine
                decision-making sections to understand your target group.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-center"></div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-4">
                  <div className="w-3 h-3 rounded-full bg-blue-600 z-10 -ml-1 -mt-2"></div>
                  <div className="w-0.5 h-5 bg-blue-600  mb-3"></div>
                </div>
                <h3 className="text-6xl font-bold text-gray-300 mb-4 tracking-wide">
                  Three
                </h3>
              </div>
              <h4 className="text-2xl font-bold mb-3">
                Reshaping our communication
              </h4>
              <p className="text-gray-600">
                Our writers and graphic designers ideate and create brand
                communication that strikes a chord! Every brand has a different
                story to tell, and we choose the right platform, and brand voice
                that connects audiences and makes your brand sell.
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="flex items-center"></div>
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-4">
                  <div className="w-3 h-3 rounded-full bg-blue-600 z-10 -ml-1 -mt-2"></div>
                  <div className="w-0.5 h-5 bg-blue-600  mb-3"></div>
                </div>
                <h3 className="text-6xl font-bold text-gray-300 mb-4 tracking-wide">
                  Four
                </h3>
              </div>

              <h4 className="text-2xl font-bold mb-3">Creating campaigns</h4>
              <p className="text-gray-600">
                After we create thumb-stopping content, we create campaigns that
                serve the goals and KPIs of the brand. We optimise, automate and
                analyse the content that reaches to the audience through digital
                medium.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Results That Speak for Themselves
            </h2>
            <p className="text-gray-300 ">
              Our data-driven approach delivers measurable results for
              businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <MagicCard>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                  <CountUp
                    from={0}
                    to={250}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  %
                </div>

                <p className="text-gray-300">
                  Average increase in organic traffic for our clients
                </p>
              </div>
            </MagicCard>

            <MagicCard>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                  <CountUp
                    from={0}
                    to={180}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  %
                </div>
                <p className="text-gray-300">
                  Average increase in lead generation
                </p>
              </div>
            </MagicCard>

            <MagicCard>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                  <CountUp
                    from={0}
                    to={320}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  %
                </div>
                <p className="text-gray-300">Average ROI on PPC campaigns</p>
              </div>
            </MagicCard>

            <MagicCard>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                  <CountUp
                    from={0}
                    to={95}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  %
                </div>
                <p className="text-gray-300">Client retention rate</p>
              </div>
            </MagicCard>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-950/20">
        <div className="container max-w-7xl mx-auto px-4">
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
              Ready to Grow Your Business Online?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-300 mb-14"
            >
              Let's create a digital marketing strategy that drives real results
              for your business.
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
                  Get Your Free Marketing Audit
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
        serviceName="Digital Marketing Services"
      />

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
