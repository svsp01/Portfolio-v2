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
      className="w-[100vw] h-screen pt-32  bg-secondaryColor dark:bg-primaryColor p-8 flex-shrink-0 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      
      <motion.div
        className="w-full max-w-4xl mx-auto relative z-10 p-10"
        whileHover={{ scale: 1.02 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="flex items-start">
          <div className={`${bgColor} w-24 h-24 rounded-full flex items-center justify-center shadow-lg`}>
            {type === 'work' ? (
              <FaBriefcase className={`${iconColor} text-4xl`} />
            ) : (
              <FaGraduationCap className={`${iconColor} text-4xl`} />
            )}
          </div>
          <div className="ml-8 flex-1">
            <h2 className="text-3xl font-bold text-white tracking-tight">{title}</h2>
            <p className="text-xl text-gray-300">{organization}</p>
            <p className="text-lg text-gray-400 mt-2">{duration}</p>
          </div>
        </div>
        <div className="mt-6 ml-32 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-green-400"></div>
          <div className="pl-8">
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">{description}</p>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">Key Skills:</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center text-lg text-gray-200">
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
};