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

export default function MobileSlider() {
  const [current, setCurrent] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  // Mobile-only visibility check
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % cards.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isMobile]);

  const getCardStyle = (index) => {
    const offset = index - current;
    const absOffset = Math.abs(offset);
    
    return {
      transform: `
        scale(${absOffset === 0 ? 1 : absOffset === 1 ? 0.85 : 0.7})
        translateX(${offset * 35}%)
      `,
      filter: `blur(${absOffset === 0 ? 0 : absOffset === 1 ? '2px' : '4px'})`,
      zIndex: cards.length - absOffset,
      opacity: absOffset > 2 ? 0 : 1,
    };
  };

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  if (!isMobile) return null;

  return (
    <div className="md:hidden relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="absolute w-[85%] h-[50vh] rounded-2xl shadow-xl overflow-hidden"
          style={getCardStyle(index)}
          animate={getCardStyle(index)}
          transition={{ type: 'spring', stiffness: 120, damping: 25 }}
        >
          <div className="relative h-full w-full">
            {/* Image loading state */}
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
            
            {/* Loading skeleton */}
            {!loadedImages[card.id] && (
              <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-300 rounded-full" />
              </div>
            )}

            {/* Content overlay */}
            <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center p-4 z-10">
              <h2 className="text-2xl font-bold text-white mb-2">{card.title}</h2>
              <p className="text-gray-200 text-center text-sm">{card.content}</p>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Mobile indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {cards.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${index === current ? 'bg-white' : 'bg-white/50'}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}