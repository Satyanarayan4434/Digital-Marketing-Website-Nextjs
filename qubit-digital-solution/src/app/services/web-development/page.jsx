"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  ShieldCheck,
} from "lucide-react";
import QueryModal from "@/components/services/query-modal";
import PricingSection from "@/components/home/PricingSection";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { ShineBorder } from "@/components/magicui/shine-border";
import Link from "next/link";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default function WebDevelopmentPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  const icons = [
    <Code key="code" size={32} className="text-blue-400" />,
    <Database key="database" size={32} className="text-purple-400" />,
    <Globe key="globe" size={32} className="text-blue-400" />,
    <Smartphone key="smartphone" size={32} className="text-purple-400" />,
    <Server key="server" size={32} className="text-blue-400" />,
    <ShieldCheck key="shield" size={32} className="text-purple-400" />,
  ];

  const services = [
    {
      icon: Globe,
      title: "Custom Website Development",
      description: "Bespoke websites designed and developed to meet your specific business requirements and goals.",
      iconColor: "bg-blue-900/30 text-blue-400"
    },
    {
      icon: Code,
      title: "Web Application Development",
      description: "Powerful, scalable web applications that solve complex business problems and enhance productivity.",
      iconColor: "bg-blue-900/30 text-purple-400"
    },
    {
      icon: Smartphone,
      title: "Responsive Web Design",
      description: "Mobile-friendly websites that provide an optimal viewing experience across all devices.",
      iconColor: "bg-blue-900/30 text-blue-400"
    },
    {
      icon: Database,
      title: "E-commerce Development",
      description: "Custom online stores that drive sales, enhance customer experience, and streamline operations.",
      iconColor: "bg-blue-900/30 text-purple-400"
    },
    {
      icon: Server,
      title: "CMS Development",
      description: "Custom content management systems that make it easy to update and manage your website content.",
      iconColor: "bg-blue-900/30 text-blue-400"
    },
    {
      icon: ShieldCheck,
      title: "Website Maintenance & Support",
      description: "Ongoing maintenance and support to ensure your website remains secure, up-to-date, and performing optimally.",
      iconColor: "bg-blue-900/30 text-purple-400"
    },
  ];

  useEffect(() => {
    // This is just to ensure the animation works properly with window object
    // It doesn't actually do anything but prevents errors during initial render
  }, []);

  return (
    <div className="min-h-screen bg-[#EFEFF0] text-white">
      {/* hero section 1 Intro */}
      <section className="relative overflow-hidden bg-black pb-16 md:pb-26">
        <div className="flex flex-col max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-medium tracking-tight text-gray-300 py-5 md:py-10">
            Web Development Services
          </h1>
          <div className="flex flex-wrap gap-8 ">
            <img
              src="/services/Web_Design.jpg"
              alt="Web Development"
              className="lg:w-[45%] rounded-lg"
            />

            <div className="flex flex-col justify-center items-center gap-4 lg:w-1/2 text-gray-300 leading-loose">
              <p>
                Harness the power of modern technology and strategic SEO
                optimization to drive your business forward. Our approach
                integrates the latest in web development tools with data-driven
                insights, ensuring that your digital presence is not only
                visually compelling but also optimized for performance. By
                leveraging responsive design, fast load times, and intuitive
                navigation, we create websites that engage users and rank higher
                in search results—making your brand more discoverable than ever
                before.
              </p>
              <p>
                In today’s competitive digital landscape, effective SEO is
                essential for sustainable growth. Our team combines
                comprehensive on-page and off-page strategies with in-depth
                keyword research and cutting-edge analytics to refine your
                online footprint. This holistic approach ensures your website
                adapts to evolving search engine algorithms and user behaviors,
                keeping you ahead of trends and setting the stage for long-term
                success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section 2*/}
      <section className="relative py-10 px-4 md:py-20 overflow-hidden">
        {/* Background pattern with glow effect */}
        <div className="absolute inset-0">
          <DotPattern
            className={cn(
              "opacity-100",
              "[mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]"
            )}
          />
        </div>

        <div className="flex flex-wrap justify-between items-center max-w-7xl mx-auto">
          <div className="container md:pl-10 md:ml-20 relative  ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=" max-w-3xl mx-auto"
            >
              <h1 className="text-2xl lg:text-4xl text-black font-semibold py-5">
                When to choose Qubit Digital Solution
              </h1>
              <ul className="text-gray-800 font-medium flex flex-col  gap-4">
                <li>Fast and Efficient Web Development</li>
                <li>Responsive and User-Friendly Websites</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Customizable and Scalable Solutions</li>
                <li>Custom E-Commerce Platforms</li>
                <li>Ongoing Maintenance & Support</li>
              </ul>
            </motion.div>
          </div>

          <div>
            <div className="relative flex size-full mr-20 overflow-hidden">
              <IconCloud images={images} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative rounded-2xl mb-16 p-1">
            <ShineBorder
              borderWidth={2}
              duration={12}
              shineColor={[
                "rgba(59, 130, 246, 0.7)",
                "rgba(147, 51, 234, 0.7)",
              ]}
            />
            <div className="bg-zinc-900/80 rounded-xl py-8 px-4">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Web Development Services
                </h2>
                <p className="text-gray-300">
                  Comprehensive web development solutions tailored to your
                  business needs.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                iconColor={service.iconColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <section className="bg-[url('/assets/Group.png')] py-20 bg-center md:bg-[length:190%] bg-no-repeat min-h-[500px] w-full overflow-y-auto flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Next Web Project?
            </h2>
            <p className="text-lg text-gray-300 mb-14">
              Let's create a web solution that drives growth and delivers
              exceptional user experience.
            </p>

            <div className="relative w-full md:w-auto">
              <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-16 bg-orange-500 rounded-full opacity-20 blur-xl transition-all"></div>
              <Link href="/contact">
                <button
                  type="submit"
                  className="relative z-10 w-full md:w-auto px-16 py-3 bg-black rounded-full text-white text-lg border border-orange-300 transition-all cursor-pointer shadow-lg shadow-orange-300/20 hover:shadow-md hover:shadow-orange-400/30 hover:border-orange-400"
                >
                  Schedule a Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Query Modal */}
      {/* <QueryModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        serviceName="Web Development Services"
      /> */}
    </div>
  );
}


const ServiceCard = ({ icon: Icon, title, description, iconColor }) => (
  <div className="relative group overflow-hidden rounded-xl">
    <ShineBorder
      borderWidth={1.5}
      duration={10}
      shineColor={["rgba(59, 130, 246, 0.7)", "rgba(147, 51, 234, 0.7)"]}
      className="z-10"
    />
    <div className="relative h-full bg-zinc-900/90 p-6 border border-white/10 hover:border-white/20 transition-all z-0">
      <div className="text-center">
        <div
          className={`w-16 h-16 ${iconColor} rounded-full flex items-center justify-center mx-auto mb-4`}
        >
          <Icon size={32} className="text-current" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  </div>
);
