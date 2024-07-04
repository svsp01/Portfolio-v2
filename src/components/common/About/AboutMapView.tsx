"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const AboutMapView: React.FC = () => {
  interface CareerItem {
    year: string;
    title: string;
    organization: string;
    description: string;
    location: string;
  }
  const [careerData, setCareerData] = useState<CareerItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCardPosition, setActiveCardPosition] = useState({
    top: 0,
    height: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const detailsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef });
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 90,
  });

  const fetchCareerData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/career');
      if (!response.ok) {
        throw new Error('Failed to fetch career data');
      }
      const data = await response.json();
      const sortedData = data.data.sort((a: CareerItem, b: CareerItem) => parseInt(a.year) - parseInt(b.year));
      setCareerData(sortedData);
    } catch (error) {
      console.error('Error fetching career data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCareerData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setActiveIndex(index);
              const rect = entry.target.getBoundingClientRect();
              const sectionRect = sectionRef.current?.getBoundingClientRect();
              if (sectionRect) {
                setActiveCardPosition({
                  top: rect.top - (sectionRect.top ) ,
                  height: rect.height,
                });
              }
            }
          }
        });
      },
      { threshold: 0.5, rootMargin: "-20% 0px -20% 0px" }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [careerData]);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div
      id="about-map-view"
      ref={sectionRef}
      className="relative w-full dark:bg-primaryColor bg-secondaryColor min-h-screen py-20 overflow-hidden"
    >
      <div className="h-[calc(100vh-1rem)] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 flex hide-scrollbar overflow-y-auto">
          <div className="w-1/4 md:w-1/3">
            {careerData.map((item, index) => (
              <motion.div
                key={`year-${index}`}
                className="text-right pr-2 py-1 md:pr-4 md:py-8"
                initial={{ opacity: 0.3 }}
                animate={{ opacity: activeIndex >= index ? 1 : 0.3 }}
              >
                <p className="text-sm md:text-lg font-bold text-primaryColor dark:text-secondaryColor">
                  {item.year}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="w-1/12 relative">
            <motion.div
              className="absolute left-1/2 top-0 w-0.5 h-full dark:bg-secondaryColor bg-primaryColor"
              style={{ scaleY: pathLength }}
            />
          </div>
          <div className="w-2/3 md:w-7/12">
            {careerData.map((item, index) => (
              <motion.div
                key={`card-${index}`}
                ref={(el: any) => (cardRefs.current[index] = el)}
                className="border-2 rounded-lg overflow-hidden mb-16 p-2 md:p-4 border-primaryColor dark:border-secondaryColor"
                initial={{ opacity: 0.3, y: 20 }}
                animate={{
                  opacity: activeIndex >= index ? 1 : 0.3,
                  y: activeIndex >= index ? 0 : 20,
                }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-sm md:text-xl font-bold mb-1 md:mb-2 dark:text-secondaryColor text-primaryColor">
                  {item.title}
                </h2>
                <p className="text-xs md:text-sm dark:text-secondaryColor text-primaryColor">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="hidden md:block w-1/2 p-8 relative">
          {careerData[activeIndex] && (
            <motion.div
              key={`active-${activeIndex}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="border-primaryColor dark:border-secondaryColor p-6 rounded-lg shadow-lg absolute border-2"
              ref={detailsRef}
              style={{
                top: `${activeCardPosition.top -120}px`,
                right: "2rem",
                width: "calc(100% - 4rem)",
                maxHeight: "calc(100vh - 1rem)",
                overflow: "auto",
              }}
            >
              <h2 className="text-2xl font-bold mb-4 dark:text-secondaryColor text-primaryColor">
                {careerData[activeIndex].title}
              </h2>
              <p className="text-lg mb-4 dark:text-secondaryColor text-primaryColor">
                {careerData[activeIndex].year}
              </p>
              <p className="text-base dark:text-secondaryColor text-primaryColor">
                {careerData[activeIndex].description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutMapView;