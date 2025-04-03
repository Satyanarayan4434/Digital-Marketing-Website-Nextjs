"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Palette, Layout, Film, PenTool, Layers, ArrowUpRight } from "lucide-react";
import QueryModal from "@/components/services/query-modal";
import { BorderBeam, DotPattern } from "@/components/services/ui-elements";
import PricingSection from "@/components/home/PricingSection";
import Link from "next/link";

export default function CreativeDesigningPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#040406] text-[#b2b4bd] overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-[url('/assets/Group.png')] bg-cover bg-no-repeat">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="lg:w-1/2"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Visual Innovation
                  <span className="block bg-gradient-to-r from-[#f18252] to-[#d46a38] bg-clip-text text-transparent mt-4">
                    Qubit Creative Studio
                  </span>
                </h1>
                <p className="text-lg leading-relaxed mb-8">
                  Transforming brand visions into captivating visual experiences
                  through strategic design thinking and cutting-edge digital
                  artistry.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-[#f18252] group"
                  onClick={() => setIsModalOpen(true)}
                >
                  <span className="font-medium">Start Creative Project</span>
                  <ArrowUpRight className="transition-transform group-hover:rotate-45" />
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="lg:w-1/2 relative"
              >
                <div className="relative h-96 rounded-3xl overflow-hidden border-2 border-[#2b2b44] shadow-2xl">
                  <img
                    src="/services/Design.webp"
                    alt="Creative Design Process"
                    className="w-full h-full object-cover"
                  />
                  <BorderBeam size={250} />
                </div>
              </motion.div>
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
              Design Specializations
            </h2>
            <p className="text-[#f18252] max-w-2xl mx-auto">
              Holistic design solutions for digital and physical experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Palette className="w-8 h-8" />,
                title: "Brand Identity Systems",
                content:
                  "Comprehensive visual identity development with multi-platform adaptability",
              },
              {
                icon: <Layout className="w-8 h-8" />,
                title: "Digital Experience Design",
                content:
                  "Immersive UI/UX solutions for web, mobile, and interactive platforms",
              },
              {
                icon: <Film className="w-8 h-8" />,
                title: "Motion & Animation",
                content:
                  "Dynamic motion graphics and micro-interactions for enhanced engagement",
              },
              {
                icon: <PenTool className="w-8 h-8" />,
                title: "Custom Illustration",
                content:
                  "Bespoke artwork and iconography that defines brand personality",
              },
              {
                icon: <Layers className="w-8 h-8" />,
                title: "3D Visualization",
                content:
                  "Photorealistic product rendering and environmental modeling",
              },
              {
                icon: <Layout className="w-8 h-8" />,
                title: "Print & Packaging",
                content:
                  "Tangible design solutions with sustainable material integration",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="p-8 rounded-2xl border border-[#2b2b44] hover:border-[#f18252] transition-all group"
              >
                <div className="text-[#f18252] mb-4">{service.icon}</div>
                <h3 className="text-xl text-white mb-3">{service.title}</h3>
                <p className="text-[#b2b4bd]">{service.content}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="text-[#f18252]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 relative">
        <DotPattern className="opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Design Methodology
            </h2>
            <p className="text-[#f18252] max-w-2xl mx-auto">
              Structured creativity delivering measurable brand impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Discovery & Strategy",
                content: "Market analysis and creative direction planning",
                color: "from-[#f18252] to-[#d46a38]",
              },
              {
                title: "Concept Development",
                content: "Visual ideation and prototype creation",
                color: "from-[#2b2b44] to-[#1a1a24]",
              },
              {
                title: "Design Execution",
                content: "Pixel-perfect implementation across mediums",
                color: "from-[#2b2b44] to-[#1a1a24]",
              },
              {
                title: "Delivery & Support",
                content: "Asset optimization and brand governance",
                color: "from-[#f18252] to-[#d46a38]",
              },
            ].map((stage, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className={`bg-gradient-to-br ${stage.color} p-0.5 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow`}
              >
                <div className="bg-[#040406] rounded-2xl p-8 h-full">
                  <div className="text-[#f18252] text-lg font-semibold mb-2">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl text-white mb-3">{stage.title}</h3>
                  <p className="text-[#b2b4bd]">{stage.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Showcase */}
      <section className="py-20 bg-[#0f0f18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Design Innovations
            </h2>
            <p className="text-[#f18252] max-w-2xl mx-auto">
              Where strategic thinking meets visual excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div className="aspect-square bg-[#2b2b44] rounded-2xl transition-transform group-hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl text-white mb-2">Project Title</h3>
                    <p className="text-[#b2b4bd] text-sm">Brand Identity</p>
                  </div>
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
              Ready to Transform Your Visual Presence?
            </h2>
            <Link href="/contact">
              <button
                type="submit"
                className="bg-[#f18252] text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 mx-auto hover:bg-[#d46a38] transition-colors"
              >
                Initiate Design Collaboration
              </button>
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsModalOpen(true)}
            >
              <ArrowUpRight className="text-xl" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* <QueryModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        serviceName="Creative Design Services"
      /> */}
    </div>
  );
}