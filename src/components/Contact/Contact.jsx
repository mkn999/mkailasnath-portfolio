import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MoveUpRight } from "lucide-react";

function Contact() {
  const sectionRefC = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRefC,
    offset: ["start end", "center center"],
  });

  const scaleC = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  const opacityC = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.section
      ref={sectionRefC}
      style={{
        scale: scaleC,
        opacity: opacityC,
      }}
      className="sectionContainer"
      id="contact"
    >
      <p className="sectionTitle">contact me</p>

      <div className="contactSub">
        <img src="./src/assets/github-profile.png" alt="profile" />

        <ul className="navLi">
          <li>
            <a href="https://github.com/mkn999" target="_blank" rel="noopener">
              <span>
                github <MoveUpRight />
              </span>
            </a>
          </li>

          <li>
            <a href="mailto:kailasm917@gmail.com" target="_blank" rel="noopener">
              <span>kailasm917@gmail.com</span>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/mkn999/"
              target="_blank"
              rel="noopener"
            >
              <span>
                linkedin <MoveUpRight />
              </span>
            </a>
          </li>
        </ul>
      </div>

      <p className="footer">2026 M Kailasnath. All rights reserved</p>
    </motion.section>
  );
}

export default Contact;
