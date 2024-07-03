"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { BsArrowUpRight } from "react-icons/bs";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  githubLink: string;
  hostLink: string; 
}

function ProjectsPage() {
  const [showInitialTitle, setShowInitialTitle] = useState(true);
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/project'); // Adjust this endpoint as needed
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialTitle(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      if (latest > 10 && !hasScrolled) {
        setHasScrolled(true);
      }
    });

    return () => unsubscribe();
  }, [scrollY, hasScrolled]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading projects...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  }

  return (
    <div className="relative min-h-screen dark:bg-primaryColor bg-secondaryColor">
      <AnimatePresence>
        {showInitialTitle && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center z-30 dark:bg-primaryColor bg-secondaryColor text-primaryColor dark:text-secondaryColor"
          >
            <motion.h1
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              className="text-7xl font-bold"
            >
              PROJECTS
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="sticky top-0 w-full pt-2 dark:bg-primaryColor bg-secondaryColor text-primaryColor dark:text-secondaryColor z-20 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: hasScrolled ? 0.3 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-4xl font-bold">PROJECTS</h1>
      </motion.div>

      <div className="relative w-full py-2">
        <div className="max-w-full px-4 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {projects.map((project: Project, index: number) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative h-[400px] overflow-hidden dark:border-secondaryColor border-primaryColor border group"
    >
      <Image
        src={project.image}
        alt={project.title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 p-2 group-hover:scale-110"
      />
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <h2 className="text-2xl font-bold mb-2 text-white">{project.title}</h2>
        <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
        <motion.a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex bg-white justify-center text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center gap-2">
            <FaGithub size={24} />
            View on GitHub
          </div>
        </motion.a>
      <motion.a
          href={project.hostLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex absolute top-0 m-6 p-6 right-0 duration-300 bg-white justify-center text-black px-2 py-2 rounded-full hover:bg-gray-200 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="flex items-center gap-2">
            <BsArrowUpRight size={24} />
          </div>
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default ProjectsPage;