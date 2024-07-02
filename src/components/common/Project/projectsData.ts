
import { StaticImageData } from 'next/image';
import ed from '@/assets/ed.png';
import image from '@/assets/Image.jpg';
import UI from '@/assets/UI.jpg';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  githubLink: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    description: "This is a description for Project 1. It showcases my skills in...",
    image: ed,
    githubLink: "https://github.com/yourusername/project1"
  },
  {
    id: 2,
    title: "Project 2",
    description: "Project 2 is an innovative solution for...",
    image: image,
    githubLink: "https://github.com/yourusername/project2"
  },
  {
    id: 3,
    title: "Project 3",
    description: "With Project 3, I explored the possibilities of...",
    image: UI,
    githubLink: "https://github.com/yourusername/project3"
  },
  {
    id: 1,
    title: "Project 1",
    description: "This is a description for Project 1. It showcases my skills in...",
    image: ed,
    githubLink: "https://github.com/yourusername/project1"
  },
  {
    id: 2,
    title: "Project 2",
    description: "Project 2 is an innovative solution for...",
    image: image,
    githubLink: "https://github.com/yourusername/project2"
  },
  {
    id: 3,
    title: "Project 3",
    description: "With Project 3, I explored the possibilities of...",
    image: UI,
    githubLink: "https://github.com/yourusername/project3"
  },
  {
    id: 1,
    title: "Project 1",
    description: "This is a description for Project 1. It showcases my skills in...",
    image: ed,
    githubLink: "https://github.com/yourusername/project1"
  },
  {
    id: 2,
    title: "Project 2",
    description: "Project 2 is an innovative solution for...",
    image: image,
    githubLink: "https://github.com/yourusername/project2"
  },
  {
    id: 3,
    title: "Project 3",
    description: "With Project 3, I explored the possibilities of...",
    image: UI,
    githubLink: "https://github.com/yourusername/project3"
  },
  // Add more projects as needed
];