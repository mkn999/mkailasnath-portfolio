import { useState, useEffect } from "react";
import "./App.css";
// import ProjectCard from "./components/projectCard/projectCard";
import PageContainer from "./components/pageContainer/pageContainer";
import Navbar from "./components/navbar/Navbar";
// import { MoveUpRight } from "lucide-react";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
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
        <About />
        {/* <section
          // initial={{ opacity: 0, scale: 0 }}
          // whileInView={{ opacity: 1, scale: 1 }}
          // transition={{ duration: 1 }}
          className="sectionContainer"
          id="about"
        >
          <p className="landingText">
            I am a developer who <span id="highlight">loves</span>
            <br />
            turning dreams into reality
          </p>
        </section> */}
        {/* <motion.section
          ref={sectionRef}
          style={{ scale, opacity }}
          className="sectionContainer"
          id="about"
        >
          <p className="landingText">
            I am a developer who <span id="highlight">loves</span>
            <br />
            turning dreams into reality
          </p>
        </motion.section> */}
        {/* projects zection */}
        {/* contact section */}
        <Contact />
      </PageContainer>
    </div>
  );
}

export default App;
