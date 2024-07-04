
import React from 'react';
import AboutSection from './AboutSection';
import AnimationComponent from '@/components/AnimationComponent';

const AboutComponent: React.FC = () => {
  return (
    <div className=" ">
      <AboutSection />
      <div className='font-bold flex justify-center items-center text-3xl py-4 bg-secondaryColor dark:bg-primaryColor'>
        My Journey
      </div>
      <AnimationComponent/>
    </div>
  );
};

export default AboutComponent;
