import { CheckCircle, Clock, Users, TrendingUp } from "lucide-react";

const features = [
  {
    name: "Experienced Team",
    description:
      "Our team of experts has years of experience in digital marketing across various industries.",
    icon: Users,
  },
  {
    name: "Data-Driven Approach",
    description:
      "We make decisions based on data and analytics to ensure the best results for your business.",
    icon: TrendingUp,
  },
  {
    name: "Customized Solutions",
    description:
      "We create tailored strategies that align with your specific business goals and target audience.",
    icon: CheckCircle,
  },
  {
    name: "Timely Delivery",
    description:
      "We value your time and ensure that all projects are completed within the agreed timeframe.",
    icon: Clock,
  },
];

export default function WhyChooseUs() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Why Choose Us
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to grow your business online
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We combine creativity, technology, and strategy to deliver
            exceptional results for our clients.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
