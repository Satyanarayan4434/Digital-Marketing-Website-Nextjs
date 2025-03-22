"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "Premium Design",
    content: "Professional UI/UX solutions",
    image: "/assets/asset 14.svg",
  },
  {
    id: 2,
    title: "Web Development",
    content: "Full-stack applications",
    image: "/assets/asset 17.svg",
  },
  {
    id: 3,
    title: "Mobile Apps",
    content: "Cross-platform development",
    image: "/assets/asset 19.svg",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    content: "Scalable cloud architecture",
    image: "/assets/asset 21.svg",
  },
  {
    id: 5,
    title: "AI Integration",
    content: "Smart system implementation",
    image: "/assets/asset 23.svg",
  },
];

export default function SliderDesktop() {
  const [current, setCurrent] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index) => {
    const offset = index - current;
    const absOffset = Math.abs(offset);

    const blurValue = absOffset === 0 ? 0 : absOffset === 1 ? 3 : 6;

    return {
      transform: `
      scale(${absOffset === 0 ? 1.1 : absOffset === 1 ? 0.9 : 0.7})
      translateX(${offset * 50}%)
      translateZ(${-absOffset * 80}px)
    `,
      filter: `blur(${blurValue}px)`, // Ensure px is applied
      zIndex: cards.length - absOffset,
      opacity: absOffset > 2 ? 0 : 1,
    };
  };

  const navigate = (direction) => {
    setCurrent((prev) =>
      direction === "next"
        ? (prev + 1) % cards.length
        : (prev - 1 + cards.length) % cards.length
    );
  };

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="relative h-[600px] w-full max-w-7xl mx-auto flex items-center justify-center overflow-hidden">
      {/* Navigation Arrows */}
      <button
        onClick={() => navigate("prev")}
        className="absolute left-4 z-50 p-3 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all"
      >
        <FiChevronLeft className="w-8 h-8 text-gray-800" />
      </button>

      <button
        onClick={() => navigate("next")}
        className="absolute right-4 z-50 p-3 rounded-full bg-white/80 shadow-lg hover:bg-white transition-all"
      >
        <FiChevronRight className="w-8 h-8 text-gray-800" />
      </button>

      {/* Cards Container */}
      {cards.map((card, index) => {
        const style = getCardStyle(index);

        return (
          <motion.div
            key={card.id}
            className="absolute w-96 h-80 rounded-2xl shadow-2xl cursor-pointer overflow-hidden"
            style={style}
            animate={style}
            transition={{ type: "spring", stiffness: 120, damping: 25 }}
            whileHover={index === current ? { scale: 1.15 } : {}}
          >
            <div className="relative h-full w-full">
              {/* Image with loading state */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 ${
                  loadedImages[card.id] ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  onLoad={() => handleImageLoad(card.id)}
                  loading={index === current ? "eager" : "lazy"}
                />
              </div>

              {/* Fallback content */}
              {!loadedImages[card.id] && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-pulse">
                    <div className="h-32 w-32 bg-gray-200 rounded-full" />
                  </div>
                </div>
              )}

              {/* Overlay for text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10">
                <h2 className="text-3xl font-bold text-white">{card.title}</h2>
                <p className="text-gray-100 text-lg text-center">
                  {card.content}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {cards.map((card, index) => (
          <button
            key={card.id}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-[#040406] scale-150" : "bg-white"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
