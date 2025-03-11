import { Palette, BarChart3, Globe, Lightbulb } from "lucide-react";
import Link from "next/link";

const services = [
  {
    name: "Brand Strategy",
    description:
      "Develop a unique brand identity that resonates with your target audience and sets you apart from competitors.",
    icon: Lightbulb,
    href: "/services/brand-strategy",
  },
  {
    name: "Creative Designing",
    description:
      "Eye-catching visuals and designs that communicate your brand message effectively across all platforms.",
    icon: Palette,
    href: "/services/creative-designing",
  },
  {
    name: "Web Solutions",
    description:
      "Custom websites and web applications that provide seamless user experiences and drive conversions.",
    icon: Globe,
    href: "/services/web-solutions",
  },
  {
    name: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies to increase visibility, engagement, and ROI.",
    icon: BarChart3,
    href: "/services/digital-marketing",
  },
];

export default function ServiceHighlights() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive digital marketing solutions to help your business grow
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon
                    className="h-5 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <Link
                      href={service.href}
                      className="text-sm font-semibold leading-6 text-primary"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
