"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "./projectsData";

function ProjectsHero() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="relative min-h-screen dark:bg-primaryColor dark:text-secondaryColor text-primaryColor overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-6 grid-rows-6">
        {[...Array(36)].map((_, i) => (
          <div key={i} className="border-[0.5px] dark:border-secondaryColor border-primaryColor opacity-20" />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-16 text-center"
        >
          Featured Projects
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              index={index}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/projects" passHref legacyBehavior>
            <motion.a
              className="inline-block dark:bg-secondaryColor bg-primaryColor dark:text-primaryColor text-secondaryColor px-8 py-4 rounded-none text-lg font-semibold dark:hover:bg-secondaryColor hover:bg-primaryColor transition-colors border-2 border-secondaryColor"
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(255,255,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Projects
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

function FeaturedProjectCard({
  project,
  index,
  setHoveredIndex,
}: {
  project: Project;
  index: number;
  setHoveredIndex: (index: number | null) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative dark:bg-primaryColor bg-secondaryColor border-2 dark:border-secondaryColor border-primaryColor overflow-hidden"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <motion.div
        className="relative h-64"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={project.image}
          alt={project.title}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 dark:bg-primaryColor bg-secondaryColor opacity-30 group-hover:opacity-0 transition-opacity duration-300" />
      </motion.div>
      <div className="relative p-6">
        <h2 className="text-2xl font-bold mb-2 dark:group-hover:text-secondaryColor transition-colors">
          {project.title}
        </h2>
        <p className="dark:text-gray-300 text-gray-600 mb-4 line-clamp-2">{project.description}</p>
        <motion.a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block dark:bg-secondaryColor bg-primaryColor text-secondaryColor dark:text-primaryColor px-4 py-2 rounded-none text-sm hover:bg-opacity-80 transition-colors border border-secondaryColor"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View on GitHub
        </motion.a>
      </div>
    </motion.div>
  );
}

export default ProjectsHero;