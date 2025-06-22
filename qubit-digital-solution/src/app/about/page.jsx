"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
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
              At NeuPixelNet Digital, we orchestrate digital success through
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
      <section className="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-orange-300 bg-clip-text text-transparent mb-4">
              Our Leadership
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Guiding innovation with expertise and vision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Satyanarayan Sen",
                role: "Founder & Director",
                image: "/assets/team-1.svg",
                color: "from-primary/20 to-primary/5",
              },
              {
                name: "Tapas Patra",
                role: "CTO",
                image: "/assets/team-2.svg",
                color: "from-blue-400/20 to-blue-400/5",
              },
              {
                name: "Mantu Patra",
                role: "Creative Head",
                image: "/assets/team-3.svg",
                color: "from-purple-500/20 to-purple-500/5",
              },
              {
                name: "Sagar Patra",
                role: "Strategy Director",
                image: "/assets/team-3.svg",
                color: "from-green-400/20 to-green-400/5",
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className="group relative overflow-hidden rounded-xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${member.color} z-10`}
                />

                <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                    priority={i === 0}
                  />

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0.9 }}
                  >
                    <div className="border-l-2 border-primary pl-4">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-gray-300 text-sm font-medium">
                        {member.role}
                      </p>
                    </div>

                    <motion.div
                      className="absolute top-4 right-4 w-10 h-10 bg-gray-900/80 rounded-full flex items-center justify-center backdrop-blur-sm"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <ChevronRight className="h-5 w-5 text-primary" />
                    </motion.div>
                  </motion.div>
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
