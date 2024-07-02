"use client";
import React, { useEffect, useState } from "react";
import {
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaRocket,
  FaCog,
  FaLightbulb,
} from "react-icons/fa";
import card1 from "../../../assets/ed.png";
import card2 from "../../../assets/Image.png";
import card3 from "../../../assets/OneThing.png";

import Image from "next/image";

function HeroComponent() {
  const items = [
    { icon: FaCode, text: "Web Development" },
    { icon: FaPalette, text: "UI/UX Design" },
    { icon: FaMobileAlt, text: "Mobile Apps" },
    { icon: FaRocket, text: "Fast Performance" },
    { icon: FaCog, text: "Custom Solutions" },
    { icon: FaLightbulb, text: "Innovative Ideas" },
  ];
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX + 13, y: e.clientY + 13 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div className="w-full ">
      <div className="relative min-h-screen bg-secondaryColor dark:bg-primaryColor overflow-hidden perspective-1000">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="w-full md:w-1/2 text-primaryColor dark:text-secondaryColor transform transition-transform duration-500 hover:scale-105">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 relative">
              <span className="inline-block  dark:hover:text-blue-300 transition-colors duration-300 transform hover:translate-z-10 hover:scale-110">
                Hi, I'm
              </span>{" "}
              <span className="inline-block  dark:hover:text-blue-300 transition-colors duration-300 transform hover:translate-z-10 hover:scale-110">
                Sakthi Vignesh,
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fadeIn relative">
              A Web Developer specializing in web and mobile app development,
              solution technology consulting, and more.
            </p>
            <button
              className="relative bg-primaryColor dark:bg-secondaryColor dark:text-primaryColor text-secondaryColor px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg"
              style={{
                transform: isHovered
                  ? `translate3d(${
                      (mousePosition.x - window.innerWidth / 2) / 50
                    }px, ${
                      (mousePosition.y - window.innerHeight / 2) / 50
                    }px, 20px)`
                  : "none",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Get in Touch
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300"></span>
            </button>
          </div>
          <div className="w-full md:w-1/2 mt-12 md:mt-0 relative">
            <div className="w-96 h-96 mx-auto relative transform-style-3d animate-float">
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg shadow-2xl"
                style={{
                  transform: `rotateX(${mousePosition.y / 40}deg) rotateY(${
                    mousePosition.x / 40
                  }deg)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                <Image
                 src={card3}
                  className="w-full h-full "
                  alt="card image 3"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-30 rounded-lg"></div>
              </div>
              <div
                className="absolute inset-0 bg-gradient-to-l from-purple-400 to-pink-500 rounded-lg shadow-2xl transform translate-z-20"
                style={{
                  transform: `rotateX(${mousePosition.y / 40}deg) rotateY(${
                    mousePosition.x / 40
                  }deg) translateZ(100px)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                <Image
                  src={card1}
                  className="w-full h-full "
                  alt="card image 3"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-30 rounded-lg"></div>
              </div>
              <div
                className="absolute inset-0 bg-gradient-to-tr from-green-400 to-teal-500 rounded-lg shadow-2xl transform translate-z-40"
                style={{
                  transform: `rotateX(${mousePosition.y / 40}deg) rotateY(${
                    mousePosition.x / 40
                  }deg) translateZ(200px)`,
                  transition: "transform 0.1s ease-out",
                }}
              >
                <Image
                  src={card2}
                  className="w-full h-full "
                  alt="card image 3"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-30 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-red-500 dark:bg-white rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-20 w-20 h-20 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-20 h-20 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative  overflow-hidden h-32 w-full flex justify-center items-center border-y border-primaryColor dark:border-secondaryColor bg-secondaryColor dark:bg-primaryColor">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="flex animate-scroll">
          {[...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center space-x-3 mx-8 group">
              <div className="relative">
                <item.icon className="text-5xl text-primaryColor dark:text-secondaryColor transition-all duration-300 group-hover:scale-110 group-hover:text-primary-300" />
                <div className="absolute -inset-1 bg-secondaryColor dark:bg-primaryColor rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <span className="text-3xl font-mono text-primaryColor dark:text-secondaryColor group-hover:text-primary-300 transition-colors duration-300 whitespace-nowrap">
                {item.text}
              </span>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent ml-4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
