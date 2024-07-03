"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { IconType } from "react-icons";
import { FaCode, FaPalette, FaMobileAlt, FaRocket, FaCog, FaLightbulb } from "react-icons/fa";

import card1 from "../../../assets/ed.png";
import card2 from "../../../assets/Image.png";
import card3 from "../../../assets/OneThing.png";
interface HomeData {
  title: string;
  description: string;
  items: Array<{
    icon: string;
    text: string;
  }>;
}

const iconMap: { [key: string]: IconType } = {
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaRocket,
  FaCog,
  FaLightbulb,
};

const HeroComponent: React.FC = () => {
  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const fetchHomeData = useCallback(async () => {
    try {
      const response = await fetch('/api/home');
      const data = await response.json();
      if (data.success) {
        setHomeData(data.data[0]);
      } else {
        console.error('Failed to fetch home data:', data.error);
      }
    } catch (error) {
      console.error('Error fetching home data:', error);
    }
  }, []);

  useEffect(() => {
    fetchHomeData();

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX + 13, y: e.clientY + 13 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [fetchHomeData]);

  const buttonStyle = useMemo(() => ({
    transform: isHovered
      ? `translate3d(${(mousePosition.x - window.innerWidth / 2) / 50}px, ${
          (mousePosition.y - window.innerHeight / 2) / 50
        }px, 20px)`
      : "none",
  }), [isHovered, mousePosition.x, mousePosition.y]);

  if (!homeData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      <div className="relative min-h-screen bg-secondaryColor dark:bg-primaryColor overflow-hidden perspective-1000">
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="w-full md:w-1/2 text-primaryColor dark:text-secondaryColor transform transition-transform duration-500 hover:scale-105">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 relative">
              <span className="inline-block dark:hover:text-blue-300 transition-colors duration-300 transform ">
                {homeData.title}
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fadeIn relative">
              {homeData.description}
            </p>
            <button
              className="relative bg-primaryColor dark:bg-secondaryColor dark:text-primaryColor text-secondaryColor px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 hover:shadow-lg"
              style={buttonStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Get in Touch
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300"></span>
            </button>
          </div>
          <div className="w-full md:w-1/2 mt-12 md:mt-0 relative">
            <div className="w-96 h-96 mx-auto relative transform-style-3d animate-float">
              {[card3, card1, card2].map((CardImage, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 bg-gradient-to-r rounded-xl shadow-2xl ${
                    index === 0 ? 'from-blue-400 to-indigo-500' :
                    index === 1 ? 'from-purple-400 to-pink-500' :
                    'from-green-400 to-teal-500'
                  }`}
                  style={{
                    transform: `rotateX(${mousePosition.y / 40}deg) rotateY(${
                      mousePosition.x / 40
                    }deg) translateZ(${index * 100}px)`,
                    transition: "transform 0.1s ease-out",
                  }}
                >
                  <Image
                    src={CardImage}
                    className="w-full h-full rounded-xl"
                    alt={`card image ${index + 1}`}
                    layout="responsive"
                    width={384}
                    height={384}
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-30 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-0">
          {['red-500', 'green-400', 'blue-300'].map((color, index) => (
            <div
              key={index}
              className={`absolute w-20 h-20 bg-${color} dark:bg-white rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${
                index === 1 ? 'animation-delay-2000' :
                index === 2 ? 'animation-delay-4000' : ''
              }`}
              style={{
                top: index === 0 ? '5rem' : index === 1 ? '10rem' : 'auto',
                left: index === 0 ? '2.5rem' : index === 2 ? '50%' : 'auto',
                right: index === 1 ? '5rem' : 'auto',
                bottom: index === 2 ? '5rem' : 'auto',
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden h-32 w-full flex justify-center items-center border-y border-primaryColor dark:border-secondaryColor bg-secondaryColor dark:bg-primaryColor">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="flex animate-scroll">
          {[...homeData.items, ...homeData.items].map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div key={index} className="flex items-center space-x-3 mx-8 group">
                <div className="relative">
                  <IconComponent className="text-5xl text-primaryColor dark:text-secondaryColor transition-all duration-300 group-hover:scale-110 group-hover:text-primary-300" />
                  <div className="absolute -inset-1 bg-secondaryColor dark:bg-primaryColor rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <span className="text-3xl font-mono text-primaryColor dark:text-secondaryColor group-hover:text-primary-300 transition-colors duration-300 whitespace-nowrap">
                  {item.text}
                </span>
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent ml-4"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;