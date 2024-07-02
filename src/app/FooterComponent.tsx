import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterComponent = () => {
  const handleEmailClick = () => {
    // Replace with your email handling logic, e.g., opening a mail client or redirecting to a contact form
    window.location.href = 'mailto:youremail@example.com';
  };

  return (
    <footer className="dark:bg-primaryColor bg-secondaryColor py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
        <div
        //   whileHover={{ scale: 1.1 }}
          className="text-primaryColor dark:text-secondaryColor flex items-center"
        >
          <FaGithub size={24} />
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            Github
          </a>
        </div>
        <div
        //   whileHover={{ scale: 1.1 }}
          className="text-primaryColor dark:text-secondaryColor flex items-center"
        >
          <FaLinkedin size={24} />
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            LinkedIn
          </a>
        </div>
        <div
        //   whileHover={{ scale: 1.1 }}
          className="text-primaryColor dark:text-secondaryColor flex items-center"
        >
          <FaTwitter size={24} />
          <a
            href="https://twitter.com/yourtwitter"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            Twitter
          </a>
        </div>
        <div
        //   whileHover={{ scale: 1.1 }}
          className="text-primaryColor dark:text-secondaryColor flex items-center"
        >
          <FaInstagram size={24} />
          <a
            href="https://instagram.com/yourinstagram"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="text-center mt-4 text-xs text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
      </div>
      <div
        
        className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400"
      >
        Connect with me for collaboration opportunities, project inquiries, or just to say hi!
      </div>
    </footer>
  );
};

export default FooterComponent;
