"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function TermsPage() {
  const sections = [
    {
      title: "Introduction",
      content: "Welcome to NeuPixelNet Digital! These Terms and Conditions govern your use of our website located at neupixelnetdigital.in and our digital marketing services. By accessing or using our services, you agree to be bound by these Terms.",
    },
    {
      title: "Services Description",
      content: "We provide digital marketing services including but not limited to SEO, social media marketing, PPC campaigns, content creation, and web development services. All services are provided on a project basis with specific deliverables outlined in individual service agreements.",
    },
    {
      title: "Intellectual Property Rights",
      content: "All content on this website, including text, graphics, logos, and images, is our property or licensed to us and protected by intellectual property laws. Client deliverables become their property upon full payment, while our methodologies and processes remain our proprietary information.",
    },
    {
      title: "User Obligations",
      content: "By using our services, you agree to provide accurate information, not to misuse our services for illegal activities, and to comply with all applicable laws. You are responsible for maintaining the confidentiality of your account credentials.",
    },
    {
      title: "Payments and Fees",
      content: "Our services require payment as outlined in individual proposals. We accept payments via bank transfer, credit card, and digital payment methods. Late payments may incur interest charges of 1.5% per month on outstanding balances.",
    },
    {
      title: "Termination",
      content: "Either party may terminate service agreements with 30 days written notice. Upon termination, all outstanding payments become immediately due. We reserve the right to suspend services for non-payment or violation of these Terms.",
    },
    {
      title: "Limitation of Liability",
      content: "To the maximum extent permitted by law, NeuPixelNet Digital shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.",
    },
    {
      title: "Confidentiality",
      content: "Both parties agree to maintain the confidentiality of proprietary information received during the course of our engagement. This obligation continues for 3 years after termination of services.",
    },
    {
      title: "Governing Law",
      content: "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Kolkata.",
    },
    {
      title: "Changes to Terms",
      content: "We reserve the right to modify these Terms at any time. We will notify you of significant changes through our website or via email. Continued use of our services after changes constitutes acceptance of the modified Terms.",
    },
  ];

  return (
    <div className="bg-[#040406] text-[#b2b4bd] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center px-6 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Terms & Conditions
              <span className="block bg-gradient-to-r from-[#f18252] to-[#d46a38] bg-clip-text text-transparent mt-2">
                Legal Framework for Our Partnership
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl max-w-3xl mb-8"
            >
              Effective Date: June 11, 2025. These Terms govern your use of NeuPixelNet Digital's services and website. Please read them carefully before proceeding.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="px-6 lg:px-20 py-16 bg-[#0f0f18]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Legal Agreement
            </h2>
            <p className="text-[#b2b4bd] max-w-2xl mx-auto">
              Understanding the framework that governs our professional relationship
            </p>
          </motion.div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className="border border-[#2b2b44] rounded-2xl p-8 hover:border-[#f18252] transition-all"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[#f18252] flex items-center justify-center text-white mr-4 text-sm">
                    {index + 1}
                  </span>
                  {section.title}
                </h3>
                <p className="text-[#b2b4bd] pl-12">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Policies */}
      <section className="px-6 lg:px-20 py-20 bg-[#040406]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Additional Policies
            </h2>
            <p className="text-[#b2b4bd] max-w-2xl mx-auto">
              Important documents that complement our Terms & Conditions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Privacy Policy",
                description: "How we collect, use, and protect your personal information",
                link: "/privacypolicy"
              },
              {
                title: "Cookie Policy",
                description: "Our use of cookies and similar tracking technologies",
                link: "/cookiepolicy"
              },
              {
                title: "Service Agreement",
                description: "Detailed terms for specific service engagements",
                link: "/serviceagreement"
              }
            ].map((policy, i) => (
              <motion.a
                key={i}
                href={policy.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="block border border-[#2b2b44] rounded-2xl p-8 hover:border-[#f18252] transition-all group"
              >
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#f18252] transition-colors">
                  {policy.title}
                </h3>
                <p className="text-[#b2b4bd] mb-4">{policy.description}</p>
                <div className="flex items-center text-[#f18252]">
                  <span className="mr-2">Read more</span>
                  <FiArrowUpRight className="transition-transform group-hover:translate-x-1" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 lg:px-20 py-20 bg-[#0f0f18]">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            className="bg-gradient-to-r from-[#2b2b44] to-[#1a1a24] rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-[#b2b4bd] mb-8 max-w-2xl mx-auto">
              Our team is ready to clarify any aspect of our Terms and Conditions
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              {[
                { icon: <FiMail className="text-2xl" />, text: "legal@neupixelnetdigital.in", title: "Email" },
                { icon: <FiPhone className="text-2xl" />, text: "+91 79082 26306", title: "Phone" },
                { icon: <FiMapPin className="text-2xl" />, text: "Kolkata, West Bengal, India", title: "Location" },
              ].map((contact, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-[#1a1a24] p-6 rounded-xl border border-[#2b2b44]"
                >
                  <div className="text-[#f18252] mb-4">{contact.icon}</div>
                  <h3 className="text-white font-medium mb-1">{contact.title}</h3>
                  <p className="text-[#b2b4bd]">{contact.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="bg-[#f18252] text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 mx-auto hover:bg-[#d46a38] transition-all w-fit"
            >
              Contact Our Legal Team
              <FiArrowUpRight className="text-xl" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="px-6 lg:px-20 py-10 text-center border-t border-[#2b2b44]"
      >
        <p className="text-[#b2b4bd] text-sm">
          Last updated: June 11, 2025 | © 2025 NeuPixelNet Digital. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
}