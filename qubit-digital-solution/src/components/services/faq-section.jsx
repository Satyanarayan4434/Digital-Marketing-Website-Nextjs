"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is a full-service digital advertising agency?",
      answer:
        "Full-service agencies offer end-to-end services. We understand your business from a macro level to suggest all the services you would need (irrespective of whether we have all the services or not). We also give you an estimate of how much money you have to invest towards different online marketing tools.",
    },
    {
      question:
        "Why should you hire a digital marketing agency instead of working in-house?",
      answer:
        "Hiring a digital marketing agency gives you access to a team of specialists with diverse skills and experience across multiple industries. Agencies stay updated with the latest trends, tools, and strategies, saving you time and resources on training and technology. Additionally, an external perspective often brings fresh ideas and objective insights that in-house teams might miss.",
    },
    {
      question: "Are we the right digital marketing agency for you?",
      answer:
        "We're the right fit if you're looking for a data-driven approach, transparent communication, and measurable results. Our team specializes in creating customized strategies that align with your business goals and target audience. We pride ourselves on building long-term partnerships rather than transactional relationships, and our high client retention rate speaks to our commitment to delivering value.",
    },
    {
      question: "Do we have a rate card?",
      answer:
        "We don't use a one-size-fits-all rate card because each business has unique needs and goals. Instead, we provide customized quotes based on your specific requirements, industry, competition, and objectives. This approach ensures you only pay for the services that will drive results for your business. Contact us for a free consultation to discuss your needs and receive a tailored proposal.",
    },
    {
      question: "Do we guarantee ROI?",
      answer:
        "While we can't guarantee specific ROI figures (and you should be wary of agencies that do), we do guarantee our commitment to maximizing your return on investment. We set clear, measurable KPIs at the beginning of our engagement, continuously monitor performance, and optimize campaigns to improve results. Our track record shows an average 320% ROI on PPC campaigns and significant improvements in organic traffic and lead generation for our clients.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Got Questions? Explore FAQs for Insightful Answers.
          </h2>
          <p className="text-gray-600">
            Find answers to commonly asked questions about our digital marketing
            services.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div
                className={`border rounded-lg overflow-hidden ${
                  openIndex === index
                    ? "border-blue-500 shadow-md"
                    : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-lg font-medium">{faq.question}</span>
                  <span className="text-blue-600">
                    {openIndex === index ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 py-4" : "max-h-0 py-0"
                  }`}
                  aria-hidden={openIndex !== index}
                >
                  <div className="flex">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
