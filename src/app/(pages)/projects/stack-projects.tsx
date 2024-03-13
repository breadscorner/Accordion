// Assuming StackProjects is a functional component
import React from 'react';

interface StackProjectsProps {
  title: string;
  overview: string;
  background: string;
  features: string[];
  technologies: string[];
  icon?: string;
  backgroundImage: string;
}

const StackProjects: React.FC<StackProjectsProps> = ({
  title,
  overview,
  background,
  features,
  technologies,
  icon,
  backgroundImage,
}) => {
  // Your component logic goes here
  return (
    <div className="flex flex-col">
        <div className="overflow-auto bg-white opacity-90 m-4 px-4 py-2 rounded-xl text-black">
          <div className="flex my-4 font-semibold justify-center">{title}</div>
          <div className="my-4">{overview}</div>
          <div className="my-4">
            <p className="font-semibold">About The Project</p>
            {background}
          </div>
          <div className="my-4">
            <p className="font-semibold">Features</p>
            {features}
          </div>
          <div className="my-4">
            <p className="font-semibold">Technologies</p>
            {technologies}
          </div>
        </div>    </div>
  );
};

export default StackProjects;
