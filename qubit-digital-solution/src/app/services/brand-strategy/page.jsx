"use client";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiCheck, FiUsers, FiTrendingUp, FiGlobe, FiArrowUpRight } from "react-icons/fi";
import QueryModal from "@/components/services/query-modal";
import { BorderBeam, DotPattern, TestimonialCard } from "@/components/services/ui-elements";
import PricingSection from "@/components/home/PricingSection";
import Link from "next/link";


export default function BrandStrategyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <div className="min-h-screen bg-[#040406] text-[#b2b4bd] overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-[url('/assets/Group.png')] bg-cover bg-no-repeat min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Digital Brand Leadership
              <span className="block bg-gradient-to-r from-[#f18252] to-[#d46a38] bg-clip-text text-transparent mt-4">
                Qubit Digital Solution
              </span>
            </h1>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="relative h-96 rounded-3xl overflow-hidden border-2 border-[#2b2b44]"
              >
                <img
                  src="/assets/Brand.jpg"
                  alt="Digital Brand Strategy"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="space-y-6 text-lg">
                <p className="text-[#b2b4bd] leading-relaxed">
                  At Qubit Digital Solution, we architect market-dominant brand
                  ecosystems through data-driven insights and innovative digital
                  strategies. Our full-spectrum approach combines analytical
                  rigor with creative excellence to position brands for
                  sustainable growth in dynamic digital landscapes.
                </p>
                <div className="flex items-center gap-2 text-[#f18252] font-medium hover:text-[#d46a38] transition-colors">
                  <span>Explore Our Methodology</span>
                  <FiArrowUpRight className="text-xl" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-[#0f0f18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Digital Brand Ecosystem Services
            </h2>
            <p className="text-[#f18252] max-w-2xl mx-auto">
              Holistic solutions for comprehensive digital brand dominance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiTrendingUp className="text-3xl" />,
                title: "Market Positioning",
                content:
                  "Algorithmic market analysis for optimal brand positioning",
              },
              {
                icon: <FiUsers className="text-3xl" />,
                title: "Audience Architecture",
                content: "Deep-learning powered consumer behavior modeling",
              },
              {
                icon: <FiGlobe className="text-3xl" />,
                title: "Omnichannel Strategy",
                content: "Integrated cross-platform brand experience design",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-2xl border border-[#2b2b44] hover:border-[#f18252] transition-all"
              >
                <div className="text-[#f18252] mb-4">{service.icon}</div>
                <h3 className="text-xl text-white mb-3">{service.title}</h3>
                <p className="text-[#b2b4bd]">{service.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Process */}
      <section className="py-20 relative">
        <DotPattern className="opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our 360° Brand Development Process
            </h2>
            <p className="text-[#f18252] max-w-2xl mx-auto">
              From concept to market dominance - engineered for digital success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Discovery Audit",
                color: "from-[#f18252] to-[#d46a38]",
              },
              {
                title: "Strategy Formulation",
                color: "from-[#2b2b44] to-[#1a1a24]",
              },
              {
                title: "Experience Design",
                color: "from-[#2b2b44] to-[#1a1a24]",
              },
              {
                title: "Market Activation",
                color: "from-[#f18252] to-[#d46a38]",
              },
            ].map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`bg-gradient-to-br ${stage.color} p-0.5 rounded-2xl shadow-xl`}
              >
                <div className="bg-[#040406] rounded-2xl p-6 h-full">
                  <div className="text-[#f18252] text-lg font-semibold mb-2">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl text-white">{stage.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <section className="bg-[url('/assets/Group.png')] bg-cover py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            className="bg-gradient-to-r from-[#040406]/90 to-[#0f0f18]/90 backdrop-blur-xl rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Digital Market Leadership?
            </h2>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mx-auto"
            >
              <Link
                href="/contact"
                className="bg-[#f18252] text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 hover:bg-[#d46a38] transition-all"
              >
                Initiate Brand Transformation
                <FiArrowUpRight className="text-xl" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* <QueryModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        serviceName="Digital Brand Strategy Services"
      /> */}
    </div>
  );
}