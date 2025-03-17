"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    companySize: "",
    country: "",
    referral: "",
    message: "",
    privacyPolicy: false,
    isSubmitting: false,
    isSubmitted: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, isSubmitting: true }));

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setFormState((prev) => ({
      ...prev,
      isSubmitting: false,
      isSubmitted: true,
    }));
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? e.target.checked : undefined;

    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  if (formState.isSubmitted) {
    return (
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-8 text-center">
        <div className="flex flex-col items-center justify-center space-y-4 py-12">
          <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold">Thank you for contacting us!</h2>
          <p className="text-gray-400 max-w-md">
            We've received your message and will get back to you as soon as
            possible.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 md:p-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="block text-sm text-gray-400">
            First name
          </label>
          <Input
            id="firstName"
            name="firstName"
            value={formState.firstName}
            onChange={handleChange}
            placeholder="John"
            required
            className="bg-black/50 border-gray-600 focus:border-white-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="lastName" className="block text-sm text-gray-400">
            Last name
          </label>
          <Input
            id="lastName"
            name="lastName"
            value={formState.lastName}
            onChange={handleChange}
            placeholder="Smith"
            required
            className="bg-black/50 border-gray-600 focus:border-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm text-gray-400">
            Work email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="name@company.com"
            required
            className="bg-black/50 border-gray-600 focus:border-blue-500"
          />
        </div>

        <div className="space-y-2 w-full">
          <label htmlFor="companySize" className="block text-sm text-gray-400">
            Services
          </label>
          <Select
            value={formState.companySize}
            onValueChange={(value) =>
              setFormState((prev) => ({ ...prev, companySize: value }))
            }
          >
            <SelectTrigger className="w-full bg-black/50 border border-gray-600 focus:border-blue-500 text-gray-300">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border border-gray-600 text-white">
              <SelectItem value="Brand-Strategy">Brand Strategy</SelectItem>
              <SelectItem value="Designing">Designing</SelectItem>
              <SelectItem value="Digital-Marketing">
                Digital Marketing
              </SelectItem>
              <SelectItem value="Web-Development">Web Development</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label htmlFor="referral" className="block text-sm text-gray-400">
            How did you find us?
          </label>
          <Input
            id="referral"
            name="referral"
            value={formState.referral}
            onChange={handleChange}
            placeholder="Recommended by a friend..."
            className="bg-black/50 border-gray-600 focus:border-blue-500"
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label htmlFor="message" className="block text-sm text-gray-400">
            How can we help?
          </label>
          <Textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Your message..."
            rows={4}
            required
            className="bg-black/50 border-gray-600 focus:border-blue-500 resize-none"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="text-sm text-gray-400">
          By submitting this, I confirm that I have read and understood the{" "}
          <Link
            href="/privacy-policy"
            className="text-orange-400 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </div>

        <div className="relative w-full md:w-auto">
          <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-16 bg-orange-500 rounded-full opacity-20 blur-xl transition-all"></div>
          <button
            type="submit"
            disabled={formState.isSubmitting}
            className="relative z-10 w-full md:w-auto px-16 py-2 bg-black rounded-full text-white border border-orange-300 transition-all cursor-pointer shadow-lg shadow-orange-300/20 hover:shadow-md hover:shadow-orange-400/30 hover:border-orange-400"
          >
            {formState.isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </form>
  );
}
