// @ts-nocheck

// React Imports
import React from "react";
import Projects from "./(pages)/projects/page";

// Next Imports
import Image from "next/image";

export const metadata: Metadata = {
  title: "Brett Gill | Home",
};

export default function HomePage(): React.FC {
  return (
    <div>
    <div className="h-screen flex items-center justify-center">
        <Projects />
      </div>
    </div>
  );
}
