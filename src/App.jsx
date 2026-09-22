import { useState, useEffect } from "react";
import "./App.css";
import ProjectCard from "./components/projectCard/projectCard";
import PageContainer from "./components/pageContainer/pageContainer";
import Navbar from "./components/navbar/Navbar";
import { MoveUpRight } from "lucide-react";
function App() {
  return (
    <div>
      <PageContainer>
        <Navbar />

        <main className="landingContainer" id="home">
          <p className="landingText">
            I am a developer who <span id="highlight">loves</span>
            <br />
            turning dreams into reality
          </p>
        </main>
        {/* about zection */}
        <section className="sectionContainer" id="about">
          <p className="landingText">
            I am a developer who <span  id="highlight">loves</span>
            <br />
            turning dreams into reality
          </p>
        </section>
        {/* projects zection */}
        <section className="sectionContainer" id="project">
          <p className="landingText">
            I am a developer who <span  id="highlight">loves</span>
            <br />
            turning dreams into reality
          </p>
        </section>
        {/* contact section */}
        <section className="sectionContainer" id="contact">
          <p className="sectionTitle">contact me</p>
          <div className="contactSub">
            <img src="./src/assets/github-profile.png" alt="profile" />
            <ul className="navLi">
              <li>
                <a href="#home">
                  <span>
                    github <MoveUpRight />
                  </span>
                  {/* github */}
                </a>
              </li>
              <li>
                <a href="#about" target="_blank" rel="noopener">
                  <span>kailasm917@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="#project">
                  <span>
                    linkedin <MoveUpRight />
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <p className="footer">2026 M Kailasnath. All rights reserved</p>
        </section>
      </PageContainer>
    </div>
  );
}

export default App;
