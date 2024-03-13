'use client'

import React, { useState, useEffect } from 'react';
import Accordion from './accordion';
import StackProjects from './stack-projects';
import projectsData from '../../../projectData/projectData.json';

interface DesktopProps {
  isDesktop: boolean;
}

export default function ProjectServerSide({ isDesktop: initialIsDesktop }: DesktopProps) {
  const [isDesktop, setIsDesktop] = useState<boolean>(initialIsDesktop);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleResize = () => {
      const newIsDesktop = window.innerWidth > 768; // Adjust the threshold as needed
      setIsDesktop(newIsDesktop);
      
      // Close any open accordion on mobile
      if (!newIsDesktop) {
        setOpenIndex(null);
      }
    };

    // Attach the resize event listener
    window.addEventListener('resize', handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to generate a random color in hex format
  const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {projectsData.map((project, index) => {
        const iconSvg = project.icon && project.icon ? project.icon : '';

        // Check if there is a background image, if not, use a random color
        const backgroundImage = project.image ? project.image : getRandomColor();

        return isDesktop ? (
          <Accordion
            key={index}
            title={project.title}
            overview={project.overview}
            background={project.background}
            features={project.features}
            technologies={project.technologies}
            icon={project.icon ?? ''}
            backgroundImage={backgroundImage}
            isInitiallyOpen={index === openIndex}
            onToggle={() => handleToggle(index)}
            index={index}
          />
        ) : (
          <StackProjects 
            key={index}
            title={project.title}
            overview={project.overview}
            background={project.background}
            features={project.features}
            technologies={project.technologies}
            icon={project.icon ?? ''}
            backgroundImage={backgroundImage}
          />
        );
      })}
    </div>
  );
}
