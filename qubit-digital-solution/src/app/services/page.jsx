import Link from "next/link";
import Image from "next/image";
import { Palette, BarChart3, Globe, Lightbulb, ArrowRight } from "lucide-react";
import ProfileUpdater from "@/components/services/ProfileUpdater";

export const metadata = {
  title: "Services - NeuPixelNet Digital",
  description: "Explore our comprehensive digital marketing services",
};

const services = [
  {
    name: "Brand Strategy",
    description:
      "Develop a unique brand identity that resonates with your target audience and sets you apart from competitors.",
    icon: Lightbulb,
    href: "/services/brand-strategy",
    image: "/assets/Brand.jpg",
  },
  {
    name: "Creative Designing",
    description:
      "Eye-catching visuals and designs that communicate your brand message effectively across all platforms.",
    icon: Palette,
    href: "/services/creative-designing",
    image: "/services/Design.webp",
  },
  {
    name: "Web Solutions",
    description:
      "Custom websites and web applications that provide seamless user experiences and drive conversions.",
    icon: Globe,
    href: "/services/web-solutions",
    image: "/services/Web_Design.jpg",
  },
  {
    name: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to increase visibility, engagement, and ROI.",
    icon: BarChart3,
    href: "/services/digital-marketing",
    image: "/services/Digital.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white py-12">
      {/* Add the ProfileUpdater component here */}
      <ProfileUpdater />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero section */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a comprehensive range of digital marketing services to help
            your business grow online.
          </p>
        </div>

        {/* Services list */}
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="space-y-20">
            {services.map((service, serviceIdx) => (
              <div
                key={service.name}
                className={`flex flex-col ${
                  serviceIdx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-x-8 gap-y-16`}
              >
                <div className="lg:w-1/2 lg:flex-none">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    width={600}
                    height={400}
                    className="aspect-[3/2] w-full rounded-2xl object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center lg:w-1/2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
                    {service.name}
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    {service.description}
                  </p>
                  <div className="mt-8">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-x-2 text-primary hover:text-primary/80"
                    >
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
