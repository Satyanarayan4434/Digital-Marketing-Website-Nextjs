"use client";

import { useState } from "react";
import ContactForm from "@/components/contact-us/contact-form";
import FeaturePoint from "@/components/contact-us/feature-point";
import { Code, Flame, Rocket } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // In a real application, you would send this data to your API
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // if (!response.ok) throw new Error('Failed to submit form')

      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitError(
        "There was an error submitting your form. Please try again."
      );
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" min-h-screen bg-black text-white">
      <div className=" mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        {/* Background hexagon pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute right-0 top-0 w-full h-full opacity-20">
            <Image
              src="/svg/hexagon-pattern.svg"
              alt="Background pattern"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <main className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="space-y-12">
              <div className="space-y-4">
                <h1 className="text-5xl font-regular tracking-tight">Contact us</h1>
                <p className="text-md text-gray-200">
                  We're here to answer your questions.
                </p>
              </div>

              <div className="space-y-8">
                <FeaturePoint
                  icon={<Code className="w-6 h-6" />}
                  title="Empower developers with reliable,"
                  description="well-designed SDKs that integrate seamlessly into your platform, inspiring them to build amazing solutions."
                  iconBgColor="bg-blue-500/20"
                  iconColor="text-blue-400"
                />

                <FeaturePoint
                  icon={<Flame className="w-6 h-6" />}
                  title="Keep your SDKs up-to-date,"
                  description="secure, and efficient with our maintenance services, handling updates, fixes, and compatibility, so your team can focus."
                  iconBgColor="bg-purple-500/20"
                  iconColor="text-purple-400"
                />

                <FeaturePoint
                  icon={<Rocket className="w-6 h-6" />}
                  title="Accelerate development and time-to-market"
                  description="with a unified codebase. We migrate apps to Flutter or React Native, enabling faster builds and innovation."
                  iconBgColor="bg-orange-500/20"
                  iconColor="text-orange-400"
                />
              </div>

              {/* <div className="space-y-4">
                <p className="text-sm text-gray-400">
                  Shaping developer experiences for the future
                </p>
                <div className="flex flex-wrap gap-8 items-center">
                  <Image
                    src="/svg/aws-logo.svg"
                    alt="AWS"
                    width={60}
                    height={30}
                  />
                  <Image
                    src="/svg/flutter-logo.svg"
                    alt="Flutter"
                    width={100}
                    height={30}
                  />
                  <Image
                    src="/svg/react-native-logo.svg"
                    alt="React Native"
                    width={120}
                    height={30}
                  />
                  <Image
                    src="/svg/firebase-logo.svg"
                    alt="Firebase"
                    width={100}
                    height={30}
                  />
                </div>
              </div> */}
            </div>

            <div className="relative">
              {/* <div className="absolute -top-20 right-0 w-32 h-32 md:w-40 md:h-40 bg-black/50 backdrop-blur-md rounded-lg border border-gray-800 flex items-center justify-center">
                <Image
                  src="/invertase-icon.svg"
                  alt="Invertase"
                  width={60}
                  height={60}
                />
              </div> */}
              <ContactForm />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
