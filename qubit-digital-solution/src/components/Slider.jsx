"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const cards = [
  { id: 1, title: 'Premium Design', content: 'Professional UI/UX solutions', image: "/assets/asset 14.svg" },
  { id: 2, title: 'Web Development', content: 'Full-stack applications', image: "/assets/asset 17.svg" },
  { id: 3, title: 'Mobile Apps', content: 'Cross-platform development', image: "/assets/asset 19.svg" },
  { id: 4, title: 'Cloud Solutions', content: 'Scalable cloud architecture', image: "/assets/asset 21.svg" },
  { id: 5, title: 'AI Integration', content: 'Smart system implementation', image: "/assets/asset 23.svg" },
];

export default function SliderMobile() {
  const [current, setCurrent] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % cards.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getCardStyle = (index) => {
    const offset = index - current;
    const absOffset = Math.abs(offset);
    
    return {
      transform: `
        scale(${absOffset === 0 ? 1 : absOffset === 1 ? 0.85 : 0.7})
        translateX(${offset * 35}%)
        translateZ(${-absOffset * 40}px)
      `,
      filter: `blur(${absOffset === 0 ? 0 : absOffset === 1 ? '2px' : '4px'})`,
      zIndex: cards.length - absOffset,
      opacity: absOffset > 2 ? 0 : 1,
    };
  };

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
      {cards.map((card, index) => {
        const style = getCardStyle(index);
        return (
          <motion.div
            key={card.id}
            className="absolute w-[90%] max-w-xs sm:w-64 h-[40vh] sm:h-72 rounded-xl shadow-2xl cursor-pointer overflow-hidden"
            style={style}
            animate={style}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            whileHover={index === current ? { scale: 1.05 } : {}}
          >
            <div className="relative h-full w-full">
              {/* Image with loading state */}
              <div className={`absolute inset-0 transition-opacity duration-300 ${loadedImages[card.id] ? 'opacity-100' : 'opacity-0'}`}>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  onLoad={() => handleImageLoad(card.id)}
                  loading={index === current ? 'eager' : 'lazy'}
                />
              </div>
              {/* Fallback content */}
              {!loadedImages[card.id] && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-pulse">
                    <div className="h-20 w-20 bg-gray-200 rounded-full" />
                  </div>
                </div>
              )}
              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10">
                <h2 className="text-xl font-bold text-gray-800">{card.title}</h2>
                <p className="text-gray-600 text-center">{card.content}</p>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {cards.map((card, index) => (
          <button
            key={card.id}
            className={`w-2 h-2 rounded-full transition-colors ${index === current ? 'bg-blue-600' : 'bg-gray-300'}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
