// Import necessary libraries and components
import { Metadata } from "next";
import ProjectServerSide from "./project";

export const metadata: Metadata = {
  title: "Brett Gill | Projects",
  description: "Recent projects.",
};

export default function Projects() {
  const isDesktop = true;

  return (
    <div>
      <ProjectServerSide isDesktop={isDesktop} />
    </div>
  );
}
