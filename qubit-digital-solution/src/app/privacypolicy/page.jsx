"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
  // Privacy Policy Content
  const privacySections = [
    {
      title: "Information We Collect",
      content: "We collect personal information you provide directly to us, such as name, email, phone number, company details, and project requirements when you engage with our services. We also automatically collect technical data including IP address, browser type, device information, and usage patterns through cookies and similar technologies."
    },
    {
      title: "How We Use Your Information",
      content: "We use your information to provide and improve our services, communicate with you, process payments, personalize your experience, analyze website usage, and for marketing purposes with your consent. We never sell your personal information to third parties."
    },
    {
      title: "Data Sharing & Disclosure",
      content: "We may share your information with trusted service providers who assist us in delivering our services (e.g., payment processors, analytics providers). We may disclose information when required by law or to protect our rights. In the event of a business transfer, your information may be transferred to the new entity."
    },
    {
      title: "Data Security",
      content: "We implement industry-standard security measures including encryption, firewalls, and access controls to protect your information. While we strive to protect your data, no method of transmission over the internet is 100% secure. We retain your information only as long as necessary for the purposes outlined in this policy."
    },
    {
      title: "Your Rights",
      content: "You have rights to access, correct, or delete your personal information. You can opt-out of marketing communications at any time. For residents of certain regions (like the EU), you may have additional rights under GDPR including data portability and the right to restrict processing. To exercise these rights, contact us at privacy@neupixelnetdigital.in."
    },
    {
      title: "Children's Privacy",
      content: "Our services are not directed to individuals under 16. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child without parental consent, we will take steps to delete that information."
    },
    {
      title: "Changes to This Policy",
      content: "We may update this policy periodically. We will notify you of significant changes through our website or via email. The 'Last Updated' date at the bottom indicates when the latest revisions were made."
    }
  ];

  return (
    <div className="bg-[#040406] text-[#b2b4bd] overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex items-center px-6 lg:px-20 pt-32 pb-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center md:text-left"
          >
            <div className="flex justify-center md:justify-start mb-6">
                <div className="bg-gradient-to-r from-[#f18252] to-[#d46a38] p-4 rounded-2xl w-fit">
                    <Shield className="text-4xl text-white" />
                </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto md:mx-0">
              How we protect and manage your personal information.
            </p>
             <p className="text-sm mt-4 text-gray-400">Effective Date: June 11, 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 lg:px-20 py-16 bg-[#0f0f18]">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {privacySections.map((section, index) => (
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

      {/* Additional Information */}
      <section className="px-6 lg:px-20 py-16 bg-[#040406]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Data Transfer Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#0f0f18] p-6 rounded-2xl border border-[#2b2b44]">
                <h4 className="text-lg font-bold text-white mb-3">International Transfers</h4>
                <p className="text-[#b2b4bd]">
                  As a global digital marketing agency, we may transfer your information to service providers located outside India. We ensure such transfers comply with applicable data protection laws through appropriate safeguards like standard contractual clauses.
                </p>
              </div>
              <div className="bg-[#0f0f18] p-6 rounded-2xl border border-[#2b2b44]">
                <h4 className="text-lg font-bold text-white mb-3">Compliance Frameworks</h4>
                <p className="text-[#b2b4bd]">
                  We adhere to applicable data protection regulations including India's Digital Personal Data Protection Act. For clients in the European Union, we comply with GDPR requirements regarding data processing and international transfers.
                </p>
              </div>
            </div>
          </motion.div>
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
              Questions About Your Privacy?
            </h2>
            <p className="text-xl text-[#b2b4bd] mb-8 max-w-2xl mx-auto">
              Our legal team is ready to address any questions about our policies and agreements.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="bg-[#f18252] text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 mx-auto hover:bg-[#d46a38] transition-all w-fit"
            >
              Contact Our DPO
              <ArrowUpRight className="text-xl" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
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