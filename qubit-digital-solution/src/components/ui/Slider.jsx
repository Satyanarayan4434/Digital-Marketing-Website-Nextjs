"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const images = [
  '/assets/asset 14.svg',
  '/assets/asset 14.svg',
  '/assets/asset 14.svg',
  '/assets/asset 14.svg',
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Auto slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {images.map((src, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: index === currentIndex ? 1 : 0, scale: index === currentIndex ? 1 : 0.9 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 w-full h-full bg-cover bg-center ${index === currentIndex ? 'block' : 'hidden'}`}
          style={{ backgroundImage: `url(${src})` }}
        >
          <Tilt className="w-full h-full" tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.05}>
            <div className="flex items-center justify-center h-full bg-black/40 text-white text-2xl font-bold">
              Image {index + 1}
            </div>
          </Tilt>
        </motion.div>
      ))}
    </div>
  );
}
