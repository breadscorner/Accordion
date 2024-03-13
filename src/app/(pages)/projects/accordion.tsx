import React, { useState, useEffect, useCallback } from "react";

interface AccordionProps {
  title: string;
  overview: string;
  background: string;
  features: string[];
  technologies: string[];
  icon?: string;
  backgroundImage: string;
  isInitiallyOpen: boolean;
  onToggle: (index: number) => void;
  index: number;
}

const Accordion: React.FC<AccordionProps> = React.memo(
  ({
    title,
    overview,
    background,
    features,
    technologies,
    icon,
    backgroundImage,
    isInitiallyOpen,
    onToggle,
    index,
  }) => {
    const [isOpen, setIsOpen] = useState(() => isInitiallyOpen);

    useEffect(() => {
      setIsOpen(isInitiallyOpen);
    }, [isInitiallyOpen]);

    const toggleAccordion = useCallback(() => {
      onToggle(index);
      setIsOpen((prevIsOpen) => !prevIsOpen);
    }, [onToggle, index]);

    const iconMarkup = icon ? (
      <div
        className="svg-icon w-8 h-8 text-white"
        dangerouslySetInnerHTML={{ __html: icon }}
      />
    ) : (
      <div className="text-xl">{isOpen ? "-" : "+"}</div>
    );

    return (
      <div
        className={`transition-all duration-300 ease-in-out flex flex-col rounded-xl my-4 ${
          isOpen ? "flex-grow" : "flex-none"
        } mx-2`}
        style={{
          height: "80vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          flexBasis: isOpen ? "0" : "10%",
          flexGrow: isOpen ? 1 : 0,
          maxWidth: isOpen ? "90%" : "10%",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <div
          className="p-4 cursor-pointer flex justify-between items-center text-white"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={toggleAccordion}
        >
          {isOpen ? <h2 className="text-xl">{title}</h2> : iconMarkup}
        </div>

        {isOpen && (
          <div className="overflow-auto bg-white opacity-90 m-4 px-4 py-2 rounded-xl text-black">
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
          </div>
        )}
      </div>
    );
  }
);

// Set display name for the Accordion component
Accordion.displayName = "Accordion";

export default Accordion;
