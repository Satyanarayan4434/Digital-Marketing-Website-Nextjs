import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    price: "$499",
    description:
      "Perfect for small businesses just getting started with digital marketing.",
    features: [
      "Social media management (2 platforms)",
      "Basic SEO optimization",
      "Monthly performance report",
      "Email support",
    ],
    cta: "Get Started",
    mostPopular: false,
  },
  {
    name: "Pro",
    id: "tier-pro",
    price: "$999",
    description:
      "Ideal for growing businesses looking to expand their online presence.",
    features: [
      "Social media management (4 platforms)",
      "Advanced SEO optimization",
      "Content creation (2 blog posts/month)",
      "Google Ads management",
      "Bi-weekly performance reports",
      "Email and phone support",
    ],
    cta: "Get Started",
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    price: "$1,999",
    description:
      "Comprehensive solution for established businesses with complex marketing needs.",
    features: [
      "Social media management (all platforms)",
      "Premium SEO optimization",
      "Content creation (4 blog posts/month)",
      "Google Ads & Facebook Ads management",
      "Weekly performance reports",
      "Dedicated account manager",
      "24/7 priority support",
    ],
    cta: "Contact Us",
    mostPopular: false,
  },
];

export default function PricingPlans() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pricing Plans
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the perfect plan for your business needs. All plans include
            our core features.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`p-8 sm:p-10 lg:flex-auto ${
                tier.mostPopular ? "bg-gray-50 ring-2 ring-primary" : "lg:mt-0"
              }`}
            >
              {tier.mostPopular && (
                <div className="mb-4">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20">
                    Most popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                {tier.name}
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                {tier.description}
              </p>
              <div className="mt-4 flex items-baseline gap-x-2">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {tier.price}
                </span>
                <span className="text-base text-gray-500">/month</span>
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6 lg:grid-cols-1"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className="h-6 w-5 flex-none text-primary"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  variant={tier.mostPopular ? "default" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link href="/contact">{tier.cta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
