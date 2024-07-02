// components/AboutMapView.tsx
'use client'
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import mapData, { mapItem } from './mapData'; 

const AboutMapView: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = document.body.clientHeight;

      const scrollPercent = (scrollY / (totalHeight - windowHeight)) * 100;
      const newIndex = Math.floor((scrollPercent / 100) * (mapData.length - 1));
      setActiveIndex(newIndex);

      controls.start({ y: `${scrollPercent}%` });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const currentItem: mapItem = mapData[activeIndex];

  return (
    <div className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute left-1/2 w-1 bg-gray-500 h-full"
        style={{ x: '-50%' }}
        animate={controls}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold mb-2">{currentItem.title}</h2>
        <p className="text-sm text-gray-600 mb-2">{currentItem.year}</p>
        <p className="text-sm text-gray-800">{currentItem.description}</p>
      </motion.div>
    </div>
  );
};

export default AboutMapView;
