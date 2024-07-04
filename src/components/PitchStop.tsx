'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaMedal, FaChartLine } from 'react-icons/fa';

interface PitchStopProps {
  type: 'work' | 'education';
  title: string;
  organization: string;
  duration: string;
  description: string;
  skills: string[];
  score: number;
}

export const PitchStop: React.FC<PitchStopProps> = ({ type, title, organization, duration, description, skills, score }) => {
  const [isHovered, setIsHovered] = useState(false);
  const iconColor = type === 'work' ? 'text-blue-400' : 'text-green-400';
  const bgColor = type === 'work' ? 'bg-blue-900' : 'bg-green-900';

  return (
    <motion.div
      className="w-screen h-screen  bg-secondaryColor dark:bg-primaryColor p-4 sm:p-6 md:p-8 flex-shrink-0 relative overflow-y-auto"
      initial={{ opacity: 0 }}
      style={{ transformStyle: 'preserve-3d' }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full max-w-4xl mx-auto relative z-10 p-4 sm:p-6 md:p-8 lg:p-10"
        whileHover={{ scale: 1.02 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="flex flex-col sm:flex-row items-start">
          <div className={`${bgColor} w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center shadow-lg mb-4 sm:mb-0`}>
            {type === 'work' ? (
              <FaBriefcase className={`${iconColor} text-2xl sm:text-3xl md:text-4xl`} />
            ) : (
              <FaGraduationCap className={`${iconColor} text-2xl sm:text-3xl md:text-4xl`} />
            )}
          </div>
          <div className="sm:ml-6 md:ml-8 flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold dark:text-secondaryColor text-primaryColor tracking-tight">{title}</h2>
            <p className="text-lg sm:text-xl dark:text-secondaryColor text-primaryColor">{organization}</p>
            <p className="text-base sm:text-lg dark:text-secondaryColor text-primaryColor mt-2">{duration}</p>
          </div>
        </div>
        <div className="mt-6 sm:ml-24 md:ml-32 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-green-400"></div>
          <div className="pl-4 sm:pl-6 md:pl-8">
            <p className="text-base sm:text-lg md:text-xl dark:text-secondaryColor text-primaryColor mb-4 sm:mb-6 leading-relaxed">{description}</p>
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-semibold dark:text-secondaryColor text-primaryColor mb-2">Key Skills:</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="px-2 py-1 bg-primaryColor dark:bg-secondaryColor text-secondaryColor dark:text-primaryColor rounded-full text-xs sm:text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-base sm:text-lg dark:text-secondaryColor text-primaryColor gap-2 sm:gap-0">
              <div className="flex items-center">
                <FaMedal className="text-yellow-400 mr-2" />
                <span>Achievement Score: {score}</span>
              </div>
              <div className="flex items-center">
                <FaChartLine className="text-purple-400 mr-2" />
                <span>Growth: +{Math.floor(score / 10)}%</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}