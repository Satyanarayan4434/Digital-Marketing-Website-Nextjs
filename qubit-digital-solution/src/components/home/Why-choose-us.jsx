"use client";

import { motion } from "framer-motion";
import { FiCheck, FiArrowUpRight, FiBarChart2, FiShield, FiUsers, FiTarget, FiGlobe, FiAward, FiClock } from "react-icons/fi";

export default function WhyChooseUsPage() {
  const features = [
    {
      icon: <FiBarChart2 />,
      title: "Data-Driven Strategies",
      description: "We leverage advanced analytics to craft marketing strategies that deliver measurable ROI and sustainable growth"
    },
    {
      icon: <FiShield />,
      title: "Transparent Reporting",
      description: "Real-time dashboards and clear KPIs ensure you always know how your campaigns are performing"
    },
    {
      icon: <FiUsers />,
      title: "Dedicated Team Approach",
      description: "Each client receives a specialized team with expertise tailored to your industry and goals"
    },
    {
      icon: <FiTarget />,
      title: "Precision Targeting",
      description: "We identify and engage your ideal audience through advanced demographic and behavioral targeting"
    },
    {
      icon: <FiGlobe />,
      title: "Omnichannel Expertise",
      description: "Seamlessly integrated campaigns across all digital touchpoints for maximum impact"
    },
    {
      icon: <FiAward />,
      title: "Award-Winning Creativity",
      description: "Our design team creates visually stunning assets that capture attention and convert"
    }
  ];

  const stats = [
    { value: "98%", label: "Client Retention Rate" },
    { value: "450+", label: "Successful Campaigns" },
    { value: "15+", label: "Countries Served" },
    { value: "72hr", label: "Average Project Launch" }
  ];

  const testimonials = [
    {
      quote: "NeuPixelNet transformed our online presence. Our leads increased by 240% in just 3 months!",
      author: "Rajesh Mehta",
      company: "TechNova Solutions",
      role: "Marketing Director"
    },
    {
      quote: "Their data-driven approach helped us optimize our ad spend and achieve 5x ROI on our marketing budget.",
      author: "Priya Sharma",
      company: "UrbanBasket",
      role: "CEO"
    },
    {
      quote: "The website they created for us not only looks stunning but converts at triple our previous rate.",
      author: "Vikram Singh",
      company: "LuxeInteriors",
      role: "Founder"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "Deep dive into your business goals and market positioning"
    },
    {
      step: "02",
      title: "Custom Solution Design",
      description: "Tailored digital strategy crafted specifically for your needs"
    },
    {
      step: "03",
      title: "Implementation & Launch",
      description: "Flawless execution across all channels with rapid deployment"
    },
    {
      step: "04",
      title: "Optimization & Growth",
      description: "Continuous improvement based on performance analytics"
    }
  ];

  return (
    <div className="bg-[#040406] text-[#b2b4bd] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 lg:px-20 py-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#f18252]/10 to-[#d46a38]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-b from-[#f18252]/15 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Why Choose
              <span className="block bg-gradient-to-r from-[#f18252] to-[#d46a38] bg-clip-text text-transparent mt-2">
                NeuPixelNet Digital?
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl max-w-3xl mb-12"
            >
              Discover the NeuPixelNet difference - where data-driven strategies meet creative excellence to deliver exceptional digital results for your business.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="p-8 bg-[#0f0f18] rounded-2xl border border-[#2b2b44]"
              >
                <h2 className="text-2xl font-bold text-white mb-4">The Digital Advantage</h2>
                <p className="mb-6">
                  In today's competitive landscape, choosing the right digital partner is critical. At NeuPixelNet Digital, we combine cutting-edge technology with marketing expertise to create digital experiences that drive growth and deliver measurable results.
                </p>
                
                <div className="flex items-center gap-3">
                  <FiClock className="text-[#f18252] text-xl" />
                  <span className="text-white font-medium">Established 2018</span>
                </div>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="bg-[#0f0f18] p-6 rounded-xl border border-[#2b2b44] text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-[#b2b4bd]">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden border-2 border-[#f18252]/30">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#040406] z-10"></div>
                <div className="absolute inset-0 bg-[url('/assets/digital-grid.svg')] bg-cover opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#f18252] to-[#d46a38] flex items-center justify-center mx-auto mb-6">
                      <FiCheck className="text-white text-4xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Proven Success Formula</h3>
                    <p className="max-w-md mx-auto">
                      Our unique blend of technology, creativity, and analytics consistently delivers exceptional results for clients across industries.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 lg:px-20 py-20 bg-[#0f0f18]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The NeuPixelNet Advantage
            </h2>
            <p className="text-[#b2b4bd] max-w-2xl mx-auto">
              What sets us apart in the competitive digital marketing landscape
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className="p-8 rounded-2xl border border-[#2b2b44] hover:border-[#f18252] transition-all group"
              >
                <div className="text-[#f18252] text-3xl mb-4 group-hover:-translate-y-1 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl text-white mb-3">{feature.title}</h3>
                <p className="text-[#b2b4bd]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 lg:px-20 py-20 bg-[#040406]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-[#b2b4bd] max-w-2xl mx-auto">
              Hear from businesses that have transformed their digital presence with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="relative"
              >
                <div className="absolute -top-4 left-6 text-7xl text-[#f18252]/10 font-bold z-0">"</div>
                <div className="relative z-10 bg-[#0f0f18] p-8 rounded-2xl border border-[#2b2b44] h-full">
                  <p className="text-lg italic mb-6 relative z-20">"{testimonial.quote}"</p>
                  <div className="mt-auto">
                    <div className="h-px bg-[#2b2b44] mb-4"></div>
                    <div>
                      <h4 className="text-white font-bold">{testimonial.author}</h4>
                      <p className="text-sm text-[#b2b4bd]">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 lg:px-20 py-20 bg-[#0f0f18]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Proven Process
            </h2>
            <p className="text-[#b2b4bd] max-w-2xl mx-auto">
              A structured approach to ensure your digital success
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#f18252] to-[#d46a38] z-0 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-[#040406] p-8 rounded-2xl border border-[#2b2b44] text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#f18252] to-[#d46a38] flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl text-white mb-3">{step.title}</h3>
                  <p className="text-[#b2b4bd]">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="px-6 lg:px-20 py-20 bg-[#040406]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The NeuPixelNet Difference
            </h2>
            <p className="text-[#b2b4bd] max-w-2xl mx-auto">
              Why we outperform traditional digital agencies
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0f0f18]">
                  <th className="p-4 text-left border-b border-[#2b2b44]"></th>
                  <th className="p-4 text-left border-b border-[#2b2b44] text-[#f18252] font-bold">NeuPixelNet Digital</th>
                  <th className="p-4 text-left border-b border-[#2b2b44]">Standard Agencies</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#2b2b44]">
                  <td className="p-4 font-medium">Approach</td>
                  <td className="p-4">Data-driven, customized strategies</td>
                  <td className="p-4">One-size-fits-all solutions</td>
                </tr>
                <tr className="border-b border-[#2b2b44]">
                  <td className="p-4 font-medium">Technology</td>
                  <td className="p-4">Proprietary analytics & AI tools</td>
                  <td className="p-4">Basic analytics platforms</td>
                </tr>
                <tr className="border-b border-[#2b2b44]">
                  <td className="p-4 font-medium">Reporting</td>
                  <td className="p-4">Real-time dashboards with actionable insights</td>
                  <td className="p-4">Monthly PDF reports</td>
                </tr>
                <tr className="border-b border-[#2b2b44]">
                  <td className="p-4 font-medium">Team Structure</td>
                  <td className="p-4">Dedicated specialists for each project</td>
                  <td className="p-4">Generalists handling multiple clients</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Results Focus</td>
                  <td className="p-4">Growth-oriented with measurable ROI</td>
                  <td className="p-4">Activity-based metrics</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-20 py-20 bg-[#0f0f18]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            className="bg-gradient-to-r from-[#2b2b44] to-[#1a1a24] rounded-3xl p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#f18252]/10 to-transparent rounded-full blur-xl"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-[#b2b4bd] mb-8 max-w-2xl mx-auto relative z-10">
              Partner with NeuPixelNet Digital and experience the difference of working with a truly results-driven agency
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-10 relative z-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-[#f18252] text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 hover:bg-[#d46a38] transition-all"
              >
                Request Consultation
                <FiArrowUpRight className="text-xl" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-transparent text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 border border-[#2b2b44] hover:border-[#f18252] transition-all"
              >
                View Case Studies
              </motion.button>
            </div>
            
            <p className="text-[#b2b4bd] relative z-10">
              Schedule a free 30-minute strategy session with our digital experts
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}