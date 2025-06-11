"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cookie } from "lucide-react";

export default function CookiePolicyPage() {
  // Cookie Policy Content
  const cookieSections = [
    {
      title: "What Are Cookies",
      content: "Cookies are small text files placed on your device when you visit our website. They help us recognize your device, remember your preferences, and provide you with a personalized experience. Cookies may be session-based (temporary) or persistent (remain until deleted)."
    },
    {
      title: "Types of Cookies We Use",
      content: "Essential Cookies: Necessary for website functionality. Performance Cookies: Help us understand how visitors interact with our site. Functionality Cookies: Remember your preferences. Targeting/Advertising Cookies: Used to deliver relevant ads (only with consent). Third-Party Cookies: Placed by our service providers like Google Analytics."
    },
    {
      title: "Purpose of Cookies",
      content: "We use cookies to: Ensure proper website functionality, remember your preferences, analyze traffic patterns, improve user experience, personalize content, measure marketing campaign effectiveness, and provide social media features."
    },
    {
      title: "Cookie Management",
      content: "You can control cookies through your browser settings. Most browsers allow you to block or delete cookies. However, blocking essential cookies may impact website functionality. Our cookie consent banner allows you to customize your preferences for non-essential cookies."
    },
    {
      title: "Third-Party Cookies",
      content: "We use services like Google Analytics, Facebook Pixel, and LinkedIn Insight Tag that place their own cookies. These help us analyze traffic and measure ad performance. We don't control these third-party cookies - please refer to their respective privacy policies."
    },
    {
      title: "Do Not Track Signals",
      content: "Our website does not currently respond to 'Do Not Track' signals from browsers. However, you can manage your cookie preferences through our consent tool and browser settings to control tracking."
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
                    <Cookie className="text-4xl text-white" />
                </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Cookie Policy
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto md:mx-0">
              Our use of cookies and tracking technologies.
            </p>
             <p className="text-sm mt-4 text-gray-400">Effective Date: June 11, 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 lg:px-20 py-16 bg-[#0f0f18]">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {cookieSections.map((section, index) => (
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

      {/* Cookie List Table */}
      <section className="px-6 lg:px-20 py-16 bg-[#040406]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Cookie List & Details</h3>
            <div className="overflow-x-auto rounded-2xl border border-[#2b2b44]">
              <table className="w-full border-collapse">
                <thead className="bg-[#1a1a24]">
                  <tr>
                    <th className="p-4 text-left font-semibold text-white">Cookie Name</th>
                    <th className="p-4 text-left font-semibold text-white">Provider</th>
                    <th className="p-4 text-left font-semibold text-white">Purpose</th>
                    <th className="p-4 text-left font-semibold text-white">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-[#2b2b44]">
                    <td className="p-4">_ga</td>
                    <td className="p-4">Google Analytics</td>
                    <td className="p-4">Distinguishes unique users</td>
                    <td className="p-4">2 years</td>
                  </tr>
                  <tr className="border-t border-[#2b2b44] bg-[#0f0f18]/50">
                    <td className="p-4">_gid</td>
                    <td className="p-4">Google Analytics</td>
                    <td className="p-4">Distinguishes users</td>
                    <td className="p-4">24 hours</td>
                  </tr>
                  <tr className="border-t border-[#2b2b44]">
                    <td className="p-4">cookie_consent</td>
                    <td className="p-4">NeuPixelNet Digital</td>
                    <td className="p-4">Stores cookie preferences</td>
                    <td className="p-4">1 year</td>
                  </tr>
                  <tr className="border-t border-[#2b2b44] bg-[#0f0f18]/50">
                    <td className="p-4">session_id</td>
                    <td className="p-4">NeuPixelNet Digital</td>
                    <td className="p-4">Maintains user session</td>
                    <td className="p-4">Session</td>
                  </tr>
                </tbody>
              </table>
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
              Manage Your Preferences
            </h2>
            <p className="text-xl text-[#b2b4bd] mb-8 max-w-2xl mx-auto">
              You can update your cookie settings at any time or contact us for more information.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="bg-[#f18252] text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2 mx-auto hover:bg-[#d46a38] transition-all w-fit"
            >
              Update Settings
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