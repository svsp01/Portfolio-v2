'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AiOutlineArrowRight } from 'react-icons/ai'; 

const AboutSection: React.FC = () => {
  return (
    <section className="flex my-10 mx-10 w-full dark:bg-primaryColor bg-secondaryColor dark:text-secondaryColor">
      <div className="border-2 flex justify-around border-primaryColor dark:border-secondaryColor w-full p-8 rounded-lg">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl font-bold mb-4 text-center dark:text-secondaryColor text-primaryColor"
        >
          Open for Collaboration
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex items-center justify-center space-x-4"
        >
          <motion.p className="text-lg text-center text-gray-600">
            Let's work together!
          </motion.p>
          <motion.div
            className="w-8 h-8 flex items-center justify-center dark:bg-primaryColor border bg-secondaryColor border-primaryColor dark:border-secondaryColor rounded-full cursor-pointer hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AiOutlineArrowRight className="text-white w-6 h-6" />
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default AboutSection;
