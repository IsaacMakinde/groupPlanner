import React from "react";
import Introduction from "../components/ui/Introduction";
import About from "../components/ui/About";
import Projects from "../components/ui/Projects";
import ProjectsDisplay from "../components/ui/ProjectsDisplay";

const Home: React.FC = () => {
  return (
    <div className="container homepage is-widescreen">
      <Introduction />
      <About />
      <Projects />
      <ProjectsDisplay />
    </div>
  );
};
export default Home;
