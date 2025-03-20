"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ContactPage = () => {
  const router = useRouter();

  return (
    <div className="overflow-hidden bg-[url('/assets/Hero_BG.svg')] bg-center bg-[length:190%] bg-no-repeat min-h-screen w-full">
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col items-center justify-center">
        <div className="text-center space-y-8 max-w-3xl">
          {/* Heading */}
          <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold text-[#b2b4bd] mb-4">
            Let&apos;s Create Something Amazing
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-xl md:text-2xl text-[#f18252] mb-12 max-w-2xl mx-auto">
            Ready to take your digital presence to the next level? Reach out to
            our team of experts and let&apos;s discuss how we can help you
            achieve your goals.
          </p>

          {/* 3D Button */}
          <motion.button
            onClick={() => router.push("/contact")}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(241, 130, 82, 0.4)",
              translateY: -3,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="px-12 py-4 cursor-pointer rounded-full relative overflow-hidden bg-[#f18252] text-[#040406] border-2 border-transparent border-image-[linear-gradient(45deg,_#f18252,_#b2b4bd)_1] border-image-slice-[1]"
          >
            <span className="text-xl font-semibold z-10 relative">
              Get in Touch
            </span>
            {/* Button shine effect */}
            <div className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-[#f18252] to-[#b2b4bd]" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
