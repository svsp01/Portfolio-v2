"use client";

import React from "react";
import { motion } from "framer-motion";
import ChatContact from "./ChatContact";

const ContactSection: React.FC = () => {
  return (
    <div>
      <div>
      <motion.div
        className="sticky top-0 w-full pt-2 py-10 dark:bg-primaryColor bg-secondaryColor text-primaryColor dark:text-secondaryColor z-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity:  0.3  }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-4xl font-bold ">Contact</h1>
      </motion.div>
      </div>
      <ChatContact />
    </div>
  );
};

export default ContactSection;
