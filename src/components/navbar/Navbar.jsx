import React, { useEffect } from "react";
import styles from "./navbar.module.css";
import { client } from "../../sanity/client";
import { projectsQuery } from "../../sanity/queries";
export default function Navbar() {
  useEffect(() => {
    async function getProjects() {
      try {
        const data = await client.fetch(projectsQuery);
        console.log("sanity data:", data);
      } catch (error) {
        console.error("sanity error:", error);
      }
    }

    getProjects();
  }, []);

  return (
    <div className={styles.navCont}>
      <ul className={styles.navLi}>
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#about">about</a>
        </li>
        <li>
          <a href="#project">projects</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </div>
  );
}
