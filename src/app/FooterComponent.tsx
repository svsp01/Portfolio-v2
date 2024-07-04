import React from 'react';
import { FaGithub, FaLinkedin,  FaInstagram,  } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

const FooterComponent = () => {
 

  return (
    <footer className="dark:bg-primaryColor bg-secondaryColor py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
        <div
          className="text-primaryColor dark:text-secondaryColor flex items-center"
        >
          <FaGithub size={24} />
          <a
            href="https://github.com/svsp01"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            Github
          </a>
        </div>
        <div
          className="text-primaryColor dark:text-secondaryColor flex items-center"
        >
          <FaLinkedin size={24} />
          <a
            href="https://linkedin.com/in/sakthi-vignesh-6a2447165"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            LinkedIn
          </a>
        </div>
        <div
          className="text-primaryColor dark:text-secondaryColor flex items-center"
        >
          <SiGmail size={24} />
          <a
            href="mailto:sakthisvsp01@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            Gmail
          </a>
        </div>
        <div
          className="text-primaryColor dark:text-secondaryColor flex items-center"
        >
          <FaInstagram size={24} />
          <a
            href="https://instagram.com/vanta_moonn"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="text-center mt-4 text-xs text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Sakthi Vignesh. All Rights Reserved.
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
