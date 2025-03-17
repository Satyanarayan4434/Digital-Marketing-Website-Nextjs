"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { DotPattern } from "../magicui/dot-pattern";
import { cn } from "@/lib/utils";

export default function PricingSection({
  title,
  description,
  packages,
  bgWhite = true,
}) {
  return (
    <section className={`py-20 z-10 relative ${bgWhite ? "bg-white" : "bg-black"}`}>
      <div className="absolute inset-0">
          <DotPattern
            className={cn(
              "opacity-100",
              "[mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]"
            )}
          />
      </div>
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`text-lg mb-2 ${
              bgWhite ? "text-gray-600" : "text-gray-400"
            }`}
          >
            {title}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className={`text-4xl md:text-5xl font-medium ${
              bgWhite ? "text-black" : "text-white"
            }`}
          >
            {description}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-lg z-100 p-8 ${
                pkg.popular ? "border-2 border-black" : "border border-gray-200"
              } ${bgWhite ? "bg-white" : "bg-gray-900"}`}
            >
              <div className="mb-8">
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    bgWhite ? "text-black" : "text-white"
                  }`}
                >
                  {pkg.title}
                </h3>
                <p className={`${bgWhite ? "text-gray-600" : "text-gray-400"}`}>
                  {pkg.description}
                </p>
              </div>

              <div className="mb-8">
                <span
                  className={`text-6xl font-bold ${
                    bgWhite ? "text-black" : "text-white"
                  }`}
                >
                  ${pkg.price}
                </span>
                <span
                  className={`text-lg ml-1 ${
                    bgWhite ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  /month
                </span>
              </div>

              {pkg.popular && (
                <div className="bg-black text-white text-sm font-medium py-1 px-3 rounded-full inline-block mb-6">
                  Most Popular
                </div>
              )}

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div
                      className={`mr-3 mt-1 ${
                        bgWhite ? "text-black" : "text-white"
                      }`}
                    >
                      <Check size={18} />
                    </div>
                    <span
                      className={`${
                        bgWhite ? "text-gray-700" : "text-gray-300"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                  bgWhite
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
