import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function About() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.7, 1]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0, 1]
  );

  return (
    <motion.section
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
    </motion.section>
  );
}

export default About;