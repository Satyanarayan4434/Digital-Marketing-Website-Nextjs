"use client";

import { useState } from "react";
import Link from "next/link";
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
import { toast } from "sonner";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState({
    NavigationMenu: "",
    phone: "",
    email: "",
    message: "",
    serviceType: "other",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log("Form submitted:", formState);
    try {
      const response = await fetch(`${process.env.FRONTEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      toast({
        title: "Message sent!",
        description:
          "Your message has been sent successfully. We'll get back to you soon.",
        variant: "success",
      });

      setFormState({
        name: "",
        email: "",
        phone: "",
        message: "",
        serviceType: "other",
      });
    } catch (error) {
      toast({
        title: "Error",
        description:
          error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
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
          <label htmlFor="name" className="block text-sm text-gray-400">
            Name
          </label>
          <Input
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="John"
            required
            className="bg-black/50 border-gray-600 focus:border-white-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm text-gray-400">
            Phone
          </label>
          <Input
            id="phone"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            placeholder="123-456-7891"
            required
            className="bg-black/50 border-gray-600 focus:border-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm text-gray-400">
            Email
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
          <label htmlFor="serviceType" className="block text-sm text-gray-400">
            Services
          </label>
          <Select
            value={formState.serviceType}
            onValueChange={(value) =>
              setFormState((prev) => ({ ...prev, serviceType: value }))
            }
          >
            <SelectTrigger className="w-full bg-black/50 border border-gray-600 focus:border-blue-500 text-gray-300">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border border-gray-600 text-white">
              <SelectItem value="brand-strategy">Brand Strategy</SelectItem>
              <SelectItem value="creative-designing">
                Creative Designing
              </SelectItem>
              <SelectItem value="digital-marketing">
                Digital Marketing
              </SelectItem>
              <SelectItem value="web-development">Web Development</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* <div className="space-y-2 md:col-span-2">
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
        </div> */}

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
