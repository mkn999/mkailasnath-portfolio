import React from "react";
import styles from "./navbar.module.css";
export default function Navbar() {
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
