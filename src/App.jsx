import { useState, useEffect } from "react";
import "./App.css";
import PageContainer from "./components/pageContainer/pageContainer";
import Navbar from "./components/navbar/Navbar";
import Contact from "./components/Contact/Contact";
import ProjectCard from "./components/projectCard/ProjectCard";
// import About from "./components/About/About";
function App() {
  return (
    <div>
      <Navbar />
      <PageContainer>
        <main className="landingContainer" id="home">
          <p className="landingText">
            I am a developer who <span id="highlight">loves</span>
            <br />
            turning dreams into reality
          </p>
        </main>
        {/* about zection */}
        {/* <About /> */}
        <ProjectCard />
        <Contact />
      </PageContainer>
    </div>
  );
}

export default App;
