import React from "react";
import webApplication from "@/assets/Image.jpg";
import webApplication1 from "@/assets/UI.jpg";

import Image from "next/image";
import {
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaRocket,
  FaCog,
  FaLightbulb,
} from "react-icons/fa";
import Link from "next/link";

function HeroComponent() {
  const items = [
    { icon: FaCode, text: "Web Development" },
    { icon: FaPalette, text: "UI/UX Design" },
    { icon: FaMobileAlt, text: "Mobile Apps" },
    { icon: FaRocket, text: "Fast Performance" },
    { icon: FaCog, text: "Custom Solutions" },
    { icon: FaLightbulb, text: "Innovative Ideas" },
  ];
  return (
    <div className="w-full md:py-6">
      <div className="flex flex-col px-16 md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2">
          <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-mono leading-tight mb-6 transition-all duration-300 ease-in-out">
            <span className="inline-block hover:text-primary-500 hover:transform hover:translate-y-[-1px]">
              Hi, I'm
            </span>{" "}
            <span className="inline-block hover:text-primary-500 hover:transform hover:translate-y-[-1px]">
              Sakthi Vignesh,
            </span>{" "}
            <span className="inline-block font-sans text-sm hover:text-primary-500 hover:transform hover:translate-y-[-1px]">
                a Web Developer. Specializing in web and mobile app development,solution technology
              consulting,
            </span>{" "}
            <span className="inline-block font-sans text-sm hover:text-primary-500 hover:transform hover:translate-y-[-1px]">
              and more.
            </span>
          </h1>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative overflow-hidden rounded-3xl shadow-xl group">
            <div className="absolute inset-0 bg-gradient-to-r from-primaryColor to-secondaryColor opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
            <div className="transition-all duration-500 ease-in-out transform perspective-1000 group-hover:scale-105 group-hover:translate-y-4">
              <Image
                src={webApplication}
                alt="web application UI"
                width={300}
                height={350}
                layout="responsive"
                className="transition-all duration-500 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex px-16 flex-col md:flex-row items-center justify-between  my-24 gap-8 md:gap-12">
        <div className="w-full md:w-1/2">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-r from-primaryColor to-secondaryColor opacity-0 group-hover:opacity-30 transition-opacity duration-300 ease-in-out z-10"></div>
            <div className="transform flex transition-all duration-300 ease-in-out group-hover:scale-105">
              <Image
                src={webApplication}
                alt="Portfolio showcase"
                width={300}
                height={200}
                // layout="responsive"
                className="transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <Image
                src={webApplication1}
                alt="Portfolio showcase"
                width={300}
                height={200}
                // layout="responsive"
                className="transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primaryColor dark:text-secondaryColor">
            <span className="block hover:text-indigo-600 transition-colors duration-300 ease-in-out">
              Creative
            </span>
            <span className="block hover:text-indigo-600 transition-colors duration-300 ease-in-out">
              Developer
            </span>
            <span className="block hover:text-indigo-600 transition-colors duration-300 ease-in-out">
              Designer
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Crafting digital experiences that blend innovation with
            functionality.
          </p>
          <div className="flex flex-wrap gap-2 md:gap-4">
            <span className="px-3 py-1 md:px-4 md:py-2 bg-indigo-100 text-indigo-800 rounded-full text-xs md:text-sm font-semibold">
              Web Development
            </span>
            <span className="px-3 py-1 md:px-4 md:py-2 bg-purple-100 text-purple-800 rounded-full text-xs md:text-sm font-semibold">
              UI/UX Design
            </span>
            <span className="px-3 py-1 md:px-4 md:py-2 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-semibold">
              Mobile Apps
            </span>
            <span className="px-3 py-1 md:px-4 md:py-2 bg-green-100 text-green-800 rounded-full text-xs md:text-sm font-semibold">
              Brand Strategy
            </span>
          </div>
          <Link
            href="/projects"
            className="inline-block px-6 py-2 md:px-8 md:py-3 bg-primaryColor dark:bg-secondaryColor dark:text-primaryColor text-secondaryColor rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300 ease-in-out text-sm md:text-base"
          >
            View My Work
          </Link>
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
