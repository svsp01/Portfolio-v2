'use client'
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import careerData from './careerData';

interface CareerItem {
  year: string;
  title: string;
  organization: string;
  type: 'education' | 'work';
  description: string;
  location: string;
}

const CareerTimeline: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollXProgress } = useScroll({ container: scrollRef });

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollPosition = scrollRef.current.scrollLeft;
        const itemWidth = scrollRef.current.scrollWidth / careerData.length;
        const newIndex = Math.round(scrollPosition / itemWidth);
        setActiveIndex(newIndex);
      }
    };

    scrollRef.current?.addEventListener('scroll', handleScroll);
    return () => scrollRef.current?.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-secondaryColor  dark:bg-primaryColor text-primaryColor dark:text-secondaryColor py-16 px-4 overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-dotted-pattern opacity-10"></div>
      </div>
      <h2 className="text-4xl font-bold text-center mb-12 relative z-10">My Career Journey</h2>
      <div className="relative z-10 ">
        <div 
          ref={scrollRef} 
          className="flex overflow-x-scroll pb-10 hide-scrollbar"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex space-x-24 px-12">
            {careerData.map((item: CareerItem, index: number) => (
              <motion.div
                key={index}
                className="flex flex-col items-center w-64"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: index * 0.1 
                  }
                }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-full bg-primaryColor dark:bg-secondaryColor flex items-center justify-center z-10 mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {item.type === 'education' ? 
                    <FaGraduationCap className="text-2xl text-secondaryColor dark:text-primaryColor" /> :
                    <FaBriefcase className="text-2xl text-secondaryColor dark:text-primaryColor" />
                  }
                </motion.div>
                <motion.div 
                  className="text-center p-4 border-2 border-primaryColor dark:border-secondaryColor rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm mb-2">{item.organization}</p>
                  <p className="text-xs mb-4">{item.year}</p>
                  <p className="text-sm mb-2">{item.description}</p>
                  <motion.p 
                    className="text-xs flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaMapMarkerAlt className="mr-2" /> {item.location}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div 
          className="absolute top-1/2 left-4 transform -translate-y-1/2"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <button 
            onClick={() => scrollTo('left')}
            className="bg-primaryColor dark:bg-secondaryColor text-secondaryColor dark:text-primaryColor p-3 rounded-full"
          >
            <FaChevronLeft />
          </button>
        </motion.div>
        <motion.div 
          className="absolute top-1/2 right-4 transform -translate-y-1/2"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <button 
            onClick={() => scrollTo('right')}
            className="bg-primaryColor dark:bg-secondaryColor text-secondaryColor dark:text-primaryColor p-3 rounded-full"
          >
            <FaChevronRight />
          </button>
        </motion.div>
      </div>
      <motion.div 
        className="h-1 bg-primaryColor dark:bg-secondaryColor mt-8"
        style={{ scaleX: scrollXProgress }}
      />
    </div>
  );
};

export default CareerTimeline;