"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import MuiPhoneNumber from "mui-phone-number";

export default function QueryModal({ isOpen, setIsOpen, serviceName }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [phoneError, setPhoneError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phoneNumber: value }));
    setPhoneError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.phoneNumber) {
      setPhoneError(true);
      return;
    }

    console.log("Form submitted:", formData);

    try {
      const response = await fetch("https://dummyapi.io/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      alert("Thank you for your inquiry! We'll get back to you soon.");
      setFormData({ name: "", email: "", phoneNumber: "", message: "" });
      setIsOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[500px] bg-white border border-gray-300">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <X className="h-4 w-4 text-gray-800" />
          <span className="sr-only">Close</span>
        </button>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Inquire About {serviceName}
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Fill out the form below and our team will get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="name" className="text-gray-800">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-white border-gray-300 text-gray-800"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-gray-800">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-white border-gray-300 text-gray-800"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phoneNumber" className="text-gray-800">
              Phone (Required)
            </Label>
            <MuiPhoneNumber
              defaultCountry="us"
              onChange={handlePhoneChange}
              value={formData.phoneNumber}
              fullWidth
              variant="outlined"
              required
              error={phoneError}
              className="bg-white border-gray-300 text-gray-800"
            />
            {phoneError && (
              <span className="text-red-500 text-sm">
                Phone number is required
              </span>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message" className="text-gray-800">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-white border-gray-300 text-gray-800 min-h-[100px]"
              required
            />
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              Submit Inquiry
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
