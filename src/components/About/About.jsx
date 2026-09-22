import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function About() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ scale, opacity }}
      className="sectionContainer"
      id="about"
    >
      <p className="sectionTitle">about me</p>
      <div className="aboutSubContainer">
        <div className="aboutSCF">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since 1966, when designers at Letraset and James Mosley, the
            librarian at St Bride Printing Library in London, took a 1914 Cicero
            translation and scrambled it to make dummy text for Letraset's Body
            Type sheets. It has survived not only many decades, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised thanks to these sheets and more recently with
            desktop publishing software like Aldus PageMaker and Microsoft Word
            including versions of Lorem Ipsum sum is what is sum what is.
          </p>
        </div>
        <div className="aboutSCS">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since 1966, when designers at Letraset and James Mosley, the
            librarian at St Bride Printing Library in London, took a 1914 Cicero
            translation and scrambled it to make dummy text for Letraset's Body
            Type sheets. It has survived not only many decades, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised thanks to these sheets and more recently with
            desktop publishing software like Aldus PageMaker and Microsoft Word
            including versions of Lorem Ipsum sum is what is sum what is.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
