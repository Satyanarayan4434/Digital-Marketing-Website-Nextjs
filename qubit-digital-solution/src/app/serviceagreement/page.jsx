"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText } from "lucide-react";

export default function ServiceAgreementPage() {
  // Service Agreement Content
  const agreementSections = [
    {
      title: "Scope of Services",
      content: "This agreement covers digital marketing services including SEO, social media marketing, PPC advertising, content creation, and web development services. Specific deliverables, timelines, and fees will be outlined in individual Statements of Work (SOW) that form part of this agreement."
    },
    {
      title: "Client Responsibilities",
      content: "Client agrees to: Provide timely access to necessary information and materials, designate a primary point of contact, provide timely feedback, secure necessary permissions for content creation, and make timely payments. Client is responsible for the accuracy of all provided materials."
    },
    {
      title: "Fees & Payment Terms",
      content: "Fees are outlined in each SOW. Payment is due within 15 days of invoice date. Late payments incur 1.5% monthly interest. We reserve the right to suspend services for accounts 30+ days overdue. All fees are exclusive of taxes unless otherwise stated."
    },
    {
      title: "Intellectual Property",
      content: "Upon full payment, client receives ownership of final deliverables. We retain rights to methodologies, tools, and pre-existing materials. We may showcase completed work in our portfolio with client permission. Client warrants they have rights to all materials provided to us."
    },
    {
      title: "Confidentiality",
      content: "Both parties agree to protect each other's confidential information. This includes business strategies, customer lists, technical information, and financial data. This obligation continues for 3 years after agreement termination. Exclusions include publicly available information and independently developed knowledge."
    },
    {
      title: "Term & Termination",
      content: "This agreement begins on the effective date and continues until all SOWs are completed. Either party may terminate with 30 days written notice. Termination for cause requires material breach that remains uncured for 15 days after notice. Upon termination, client pays for all services rendered."
    },
    {
      title: "Warranties & Liability",
      content: "We warrant services will be performed professionally. We make no other warranties. Our liability is limited to the fees paid under the relevant SOW. We're not liable for indirect, consequential, or punitive damages. Client agrees to indemnify us against claims arising from client-provided materials."
    },
    {
      title: "Governing Law",
      content: "This agreement is governed by Indian law. Disputes will be resolved in Kolkata courts. Force majeure events excuse performance. Neither party may assign this agreement without consent. Amendments require written agreement. Notices must be sent to legal@neupixelnetdigital.in."
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
                    <FileText className="text-4xl text-white" />
                </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Service Agreement
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto md:mx-0">
              Terms governing our professional relationship.
            </p>
             <p className="text-sm mt-4 text-gray-400">Effective Date: June 11, 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 lg:px-20 py-16 bg-[#0f0f18]">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {agreementSections.map((section, index) => (
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

      {/* Additional Service Terms */}
      <section className="px-6 lg:px-20 py-16 bg-[#040406]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Additional Service Terms</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#0f0f18] p-6 rounded-2xl border border-[#2b2b44]">
                <h4 className="text-lg font-bold text-white mb-3">Project Revisions</h4>
                <p className="text-[#b2b4bd]">
                  We include 2 rounds of revisions in our standard service packages. Additional revisions will be billed at our standard hourly rate. Major changes to project scope may require a revised Statement of Work and additional fees.
                </p>
              </div>
              <div className="bg-[#0f0f18] p-6 rounded-2xl border border-[#2b2b44]">
                <h4 className="text-lg font-bold text-white mb-3">Performance Guarantees</h4>
                <p className="text-[#b2b4bd]">
                  While we employ industry best practices, we cannot guarantee specific results for marketing services (e.g., rankings, traffic, conversions) due to factors beyond our control. Web development projects include bug-fixing warranties for 30 days post-launch.
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
              Discuss Your Project
            </h2>
            <p className="text-xl text-[#b2b4bd] mb-8 max-w-2xl mx-auto">
              Ready to start? Contact us to discuss your project and receive a detailed Statement of Work.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="bg-[#f18252] text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 mx-auto hover:bg-[#d46a38] transition-all w-fit"
            >
              Request a Proposal
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
