"use client";

import { motion } from "framer-motion";
import { PricingCard } from "@/components/services/ui-elements";
import { DotPattern } from "@/components/services/ui-elements";

export default function PricingSection({
  title,
  description,
  packages,
  bgWhite = false,
}) {
  return (
    <section className={`py-20 ${bgWhite ? "bg-white text-black" : ""}`}>
      {bgWhite && <DotPattern className="opacity-10" />}
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              bgWhite ? "text-gray-900" : ""
            }`}
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className={bgWhite ? "text-gray-600" : "text-gray-300"}
          >
            {description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PricingCard
                title={pkg.title}
                price={pkg.price}
                features={pkg.features}
                popular={pkg.popular}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
