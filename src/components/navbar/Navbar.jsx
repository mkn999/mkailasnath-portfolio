import React, { useEffect } from "react";
import styles from "./navbar.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
export default function Navbar() {
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 500],
    ["rgba(10, 10, 10, 0.1)", "rgba(10, 10, 10, 1)"],
  );

  return (
    <motion.div className={styles.navCont} style={{ backgroundColor }}>
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
    </motion.div>
  );
}
