import { useState, useEffect } from "react";
import "./App.css";
import ProjectCard from "./components/projectCard/projectCard";
import PageContainer from "./components/pageContainer/pageContainer";
import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <div>
      <PageContainer>
        <Navbar />

        <main className="landingContainer" id="home">
          <p className="landingText">
            I am a developer who <span>loves</span>
            <br />
            turning dreams into reality
          </p>
        </main>
        {/* about zection */}
        <section className="landingContainer" id="about">
          <p className="landingText">
            I am a developer who <span>loves</span>
            <br />
            turning dreams into reality
          </p>
        </section>
        {/* projects zection */}
         <section className="landingContainer" id="project">
          <p className="landingText">
            I am a developer who <span>loves</span>
            <br />
            turning dreams into reality
          </p>
        </section>
        {/* contact section */}
         <section className="landingContainer" id="contact">
          <p className="contactTitle">contact me</p>
          <p className="landingText">
            I am a developer who <span>loves</span>
            <br />
            turning dreams into reality
          </p>
        </section>
      </PageContainer>
    </div>
  );
}

export default App;
