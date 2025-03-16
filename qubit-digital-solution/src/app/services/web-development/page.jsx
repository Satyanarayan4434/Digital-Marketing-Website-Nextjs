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
import { Button } from "@/components/ui/button";
import QueryModal from "@/components/services/query-modal";
import {
  BorderBeam,
  MagicCard,
  TestimonialCard,
} from "@/components/services/ui-elements";
import PricingSection from "@/components/services/pricing";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { ShineBorder } from "@/components/magicui/shine-border";

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
      <section className="relative overflow-hidden bg-black pb-26">
        <div className="flex flex-col max-w-7xl mx-auto">
          <h1 className="text-4xl font-medium tracking-tight text-gray-300 py-10">
            Web Development Services
          </h1>
          <div className="flex flex-wrap gap-8 ">
            <img
              src="/services/Web_Design.jpg"
              alt="Web Development"
              className="w-[45%] rounded-lg"
            />

            <div className="flex flex-col justify-center items-center gap-4 w-1/2 text-gray-300 leading-loose">
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
      <section className="relative py-20 overflow-hidden">
        {/* Background pattern with glow effect */}
        <div className="absolute inset-0">
          <DotPattern
            className={cn(
              "opacity-100",
              "[mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]"
            )}
          />
        </div>

        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="container pl-10 ml-20 relative  ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=" max-w-3xl mx-auto"
            >
              <h1 className="text-4xl text-black font-semibold py-5">
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

      {/* Technologies Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies We Use
            </h2>
            <p className="text-gray-300">
              We leverage the latest technologies and frameworks to build
              high-performance web solutions.
            </p>
          </div>

          <IconCloud icons={icons} className="mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MagicCard>
              <h3 className="text-xl font-bold mb-4">Frontend Technologies</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>React.js</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>Next.js</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>Vue.js</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>Angular</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>Tailwind CSS</span>
                </li>
              </ul>
            </MagicCard>

            <MagicCard>
              <h3 className="text-xl font-bold mb-4">Backend Technologies</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  <span>Node.js</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  <span>Express.js</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  <span>Python/Django</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  <span>PHP/Laravel</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  <span>Ruby on Rails</span>
                </li>
              </ul>
            </MagicCard>

            <MagicCard>
              <h3 className="text-xl font-bold mb-4">
                Database & Infrastructure
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>MongoDB</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>PostgreSQL</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>MySQL</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>AWS</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>Firebase</span>
                </li>
              </ul>
            </MagicCard>
          </div>
        </div>
      </section> */}


      {/* Pricing Section */}
      <PricingSection
        title="Web Development Packages"
        description="Flexible options to meet your web development needs and budget."
        bgWhite={false}
        packages={[
          {
            title: "Basic Website",
            price: "2,999",
            features: [
              "5-7 Pages",
              "Responsive Design",
              "Basic SEO Setup",
              "Contact Form",
              "Content Management System",
              "30 Days Support",
            ],
            popular: false,
          },
          {
            title: "Business Website",
            price: "5,999",
            features: [
              "10-15 Pages",
              "Responsive Design",
              "Advanced SEO Setup",
              "Custom Forms & Features",
              "Content Management System",
              "E-commerce Integration",
              "90 Days Support",
            ],
            popular: true,
          },
          {
            title: "Custom Web Application",
            price: "Custom",
            features: [
              "Custom Functionality",
              "User Authentication",
              "Database Integration",
              "API Development",
              "Third-party Integrations",
              "Scalable Architecture",
              "Ongoing Support & Maintenance",
            ],
            popular: false,
          },
        ]}
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-blue-950/40 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Next Web Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create a web solution that drives growth and delivers
              exceptional user experience.
            </p>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-md"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Query Modal */}
      <QueryModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        serviceName="Web Development Services"
      />
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
