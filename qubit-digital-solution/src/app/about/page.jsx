"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiCheck,
  FiArrowUpRight,
  FiUsers,
  FiTrendingUp,
  FiGlobe,
} from "react-icons/fi";

export default function AboutPage() {
  return (
    <div className="bg-[#040406] text-[#b2b4bd] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transforming Digital Landscapes
              <span className="block bg-gradient-to-r from-[#f18252] to-[#d46a38] bg-clip-text text-transparent mt-2">
                Since 2018
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl max-w-3xl mb-8"
            >
              At Qubit Digital Solution, we orchestrate digital success through
              innovative marketing strategies, cutting-edge technology, and
              data-driven insights. Partner with us to amplify your brand's
              digital presence.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="relative h-96 rounded-3xl overflow-hidden border border-[#2b2b44]"
            >
              <Image
                src="/assets/about-hero.svg"
                alt="Digital Solutions"
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <FiCheck className="text-[#f18252] text-2xl mt-1" />
                <div>
                  <h3 className="text-xl text-white mb-2">Proven Results</h3>
                  <p className="text-[#b2b4bd]">
                    450+ successful campaigns launched with measurable ROI
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <FiGlobe className="text-[#f18252] text-2xl mt-1" />
                <div>
                  <h3 className="text-xl text-white mb-2">Global Reach</h3>
                  <p className="text-[#b2b4bd]">
                    Serving clients across 15+ countries with localized
                    strategies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 lg:px-20 py-20 bg-[#0f0f18]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Digital Philosophy
            </h2>
            <p className="text-[#b2b4bd] max-w-2xl mx-auto">
              Blending creativity with analytics to deliver transformative
              digital experiences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiTrendingUp />,
                title: "Growth-First Approach",
                content:
                  "Data-driven strategies focused on sustainable business growth",
              },
              {
                icon: <FiUsers />,
                title: "Client-Centric Solutions",
                content:
                  "Tailored digital ecosystems that align with your unique needs",
              },
              {
                icon: <FiGlobe />,
                title: "Omnichannel Expertise",
                content: "Seamless integration across all digital touchpoints",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-8 rounded-2xl border border-[#2b2b44] hover:border-[#f18252] transition-all"
              >
                <div className="text-[#f18252] text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl text-white mb-3">{item.title}</h3>
                <p className="text-[#b2b4bd]">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 lg:px-20 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Visionary Leaders
            </h2>
            <p className="text-[#b2b4bd] max-w-2xl mx-auto">
              The masterminds behind digital revolutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Creative Director",
                image: "/assets/team-1.svg",
                shadow: "shadow-[0_20px_40px_-10px_rgba(241,130,82,0.15)]",
              },
              {
                name: "Raj Patel",
                role: "SEO Growth Lead",
                image: "/assets/team-2.svg",
                shadow: "shadow-[0_20px_40px_-10px_rgba(66,153,225,0.15)]",
              },
              {
                name: "Emily Wilson",
                role: "UX Strategist",
                image: "/assets/team-3.svg",
                shadow: "shadow-[0_20px_40px_-10px_rgba(139,92,246,0.15)]",
              },
              {
                name: "Michael Ho",
                role: "Data Architect",
                image: "/assets/team-4.svg",
                shadow: "shadow-[0_20px_40px_-10px_rgba(16,185,129,0.15)]",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group relative overflow-hidden rounded-2xl transform transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className={`absolute inset-0 ${member.shadow} transition-shadow duration-300`}
                />

                <div className="h-96 rounded-2xl overflow-hidden relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transform transition-all duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-6 flex flex-col justify-end">
                    <div className="border-l-2 border-[#f18252] pl-4">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-[#b2b4bd] font-mono">
                        {member.role}
                      </p>
                    </div>

                    <div className="absolute top-4 right-4 w-8 h-8 bg-[#040406]/80 rounded-full flex items-center justify-center transform transition-all duration-300 opacity-0 group-hover:opacity-100">
                      <FiArrowUpRight className="text-[#f18252]" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-20 py-20 bg-[#0f0f18]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            className="bg-gradient-to-r from-[#2b2b44] to-[#1a1a24] rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Digital Transformation?
            </h2>
            <p className="text-xl text-[#b2b4bd] mb-8 max-w-2xl mx-auto">
              Let's collaborate to create digital experiences that drive results
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#f18252] text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 mx-auto hover:bg-[#d46a38] transition-all"
            >
              Start Your Journey
              <FiArrowUpRight className="text-xl" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
