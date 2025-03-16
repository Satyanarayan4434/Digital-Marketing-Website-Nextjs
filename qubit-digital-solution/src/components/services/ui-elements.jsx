"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BorderBeam({ className, children }) {
  return (
    <div className={cn("relative rounded-lg p-px overflow-hidden", className)}>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 animate-border-beam" />
      <div className="relative rounded-[inherit] bg-black p-4 sm:p-6 md:p-8">
        {children}
      </div>
    </div>
  );
}

export function MagicCard({ className, children }) {
  const [isMounted, setIsMounted] = useState(false);
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-xl border border-blue-900/50 bg-black p-6 md:p-8 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {isMounted && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(79, 70, 229, 0.15), transparent 40%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}

export function DotPattern({ className }) {
  return (
    <div className={cn("absolute inset-0 -z-10 opacity-30", className)}>
      <div className="h-full w-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
    </div>
  );
}

export function IconCloud({ icons, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={cn("flex flex-wrap justify-center gap-4 md:gap-8", className)}
    >
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-950/30 to-purple-950/30 rounded-full p-4 transition-all hover:bg-blue-900/40 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
        >
          {icon}
        </motion.div>
      ))}
    </motion.div>
  );
}

export function TestimonialCard({
  quote,
  author,
  position,
  company,
  className,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={cn(
        "bg-gradient-to-br from-blue-950/20 to-purple-950/20 p-6 rounded-lg border border-blue-900/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]",
        className
      )}
    >
      <div className="mb-4 text-4xl text-blue-400">"</div>
      <p className="text-gray-300 mb-4">{quote}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="font-medium text-white">{author}</p>
          <p className="text-sm text-gray-400">
            {position}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function PricingCard({ title, price, features, popular, className }) {
  return (
    <BorderBeam
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]",
        popular ? "scale-105" : "",
        className
      )}
    >
      <div className="relative">
        {popular && (
          <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            POPULAR
          </div>
        )}
        <div
          className={cn(
            "p-6",
            popular ? "bg-gradient-to-b from-blue-950/50 to-black" : "bg-black"
          )}
        >
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <div className="mb-4">
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              ${price}
            </span>
            {price !== "Custom" && (
              <span className="text-gray-400 ml-1">/mo</span>
            )}
          </div>
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-5 h-5 text-blue-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "w-full py-2 rounded-md font-medium transition-colors",
              popular
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                : "bg-blue-950/50 text-white border border-blue-900/50 hover:bg-blue-900/30"
            )}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </BorderBeam>
  );
}
