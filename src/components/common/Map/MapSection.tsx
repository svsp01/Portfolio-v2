'use client'
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
  const [careerData, setCareerData] = useState<CareerItem[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const fetchCareerData = async () => {
      try {
        const response = await fetch('/api/career');
        const data = await response.json();
        if (data.success) {
          setCareerData(data.data);
        } else {
          console.error('Failed to fetch career data:', data.error);
        }
      } catch (error) {
        console.error('Error fetching career data:', error);
      }
    };

    fetchCareerData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const progress = scrollLeft / (scrollWidth - clientWidth);
        setScrollProgress(progress);

        const itemWidth = scrollWidth / careerData.length;
        const newIndex = Math.round(scrollLeft / itemWidth);
        setActiveIndex(newIndex);
      }
    };

    scrollRef.current?.addEventListener('scroll', handleScroll);
    return () => scrollRef.current?.removeEventListener('scroll', handleScroll);
  }, [careerData.length]);

  const scrollTo = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (careerData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-secondaryColor dark:bg-primaryColor text-primaryColor dark:text-secondaryColor py-16 px-4 overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-dotted-pattern opacity-10"></div>
      </div>
      <h2 className="text-4xl font-bold text-center mb-12 relative z-10">My Career Journey</h2>
      <div className="relative z-10">
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
      <div className="relative h-1 mt-8">
      <motion.div
        className="absolute top-0 left-0 w-[200px] h-full bg-secondaryColor"
        style={{ scaleX: scrollProgress / 100 + 1, transformOrigin: 'left' }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </div>
    </div>
  );
};

export default CareerTimeline;