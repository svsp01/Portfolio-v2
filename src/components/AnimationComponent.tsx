"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { PitchStop } from "./PitchStop";
import { motion, useAnimation } from "framer-motion";

interface PitchStopProps {
  type: 'work' | 'education';
  title: string;
  organization: string;
  duration: string;
  description: string;
  skills: string[];
  score: number;
}
function AnimationComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [milestones, setMilestones] = useState<PitchStopProps[]>([]);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/career'); 
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setMilestones(data?.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

    useEffect(() => {
        if (!milestones.length) return;

         if (!sectionRef.current || !triggerRef.current) return;

    const sectionsCount = milestones.length;
    const totalWidth = `${sectionsCount * 100}vw`;
    const translateXValue = `${(sectionsCount - 1) * -100}vw`;

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: translateXValue,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${totalWidth}`,
          scrub: 1, // Increased scrub value for smoother scrolling
          pin: true,
          anticipatePin: 1,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, [milestones.length]);
      

  return (
    <div className="overflow-hidden bg-secondaryColor dark:bg-primaryColor">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className={`h-screen flex items-center pt-32`}
          style={{ width: `${milestones.length * 100}vw`, perspective: "1000px" }}
        >
          {milestones.map((milestone, index) => (
            <PitchStop key={index} {...milestone} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AnimationComponent;
