"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { PitchStop } from "./PitchStop";

function AnimationComponent() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);
  interface PitchStopProps {

    type: 'work' | 'education';
    title: string;
    organization: string;
    duration: string;
    description: string;
    skills: string[];
    score: number;
}

  const milestones:PitchStopProps[] = [
    {
      type: "education",
      title: "Bachelor's in Computer Science",
      organization: "Tech University",
      duration: "2016 - 2020",
      description:
        "Gained a strong foundation in programming, algorithms, and software development.",
      skills: ["Java", "Python", "Data Structures", "Algorithms"],
      score: 85,
    },
    {
      type: "work",
      title: "Junior Software Developer",
      organization: "InnovateTech Solutions",
      duration: "2020 - 2022",
      description:
        "Worked on various web development projects and improved coding skills.",
      skills: ["JavaScript", "React", "Node.js", "MongoDB"],
      score: 78,
    },
    {
      type: "education",
      title: "Machine Learning Certification",
      organization: "AI Institute",
      duration: "2022 (6 months)",
      description:
        "Specialized in machine learning algorithms and their practical applications.",
      skills: [
        "Machine Learning",
        "TensorFlow",
        "Data Analysis",
        "Neural Networks",
      ],
      score: 92,
    },
    {
      type: "work",
      title: "Senior Full-Stack Developer",
      organization: "FutureTech Corp",
      duration: "2022 - Present",
      description:
        "Leading development teams and architecting complex web applications.",
      skills: ["TypeScript", "Next.js", "GraphQL", "AWS"],
      score: 88,
    },
  ];
  return (
    <div>
      <div className=" overflow-hidden ">
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            className="h-screen text-white w-[400vw] flex justify-center items-center"
          >
            {milestones.map((milestone, index) => (
              <PitchStop key={index} {...milestone} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimationComponent;
