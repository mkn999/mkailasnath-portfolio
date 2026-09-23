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
    <section
      // ref={sectionRef}
      // style={{ scale, opacity }}
      className="sectionContainer"
      id="about"
    >
      <p className="sectionTitle">about me</p>
      <div className="aboutSubContainer">
        <div className="aboutSCF">
          <p>
            I’m <span id="highlight-none">M Kailasnath</span>, a curious
            programmer who enjoys turning ideas into things people can use. I
            love to build, break, rebuild, and learn how the pieces work behind
            the screen. For me, engineering is not just about writing code; it
            is about understanding existing systems, asking better questions,
            and creating something a little smarter each time. I started my
            journey at the University of Kerala where I completed my bachelor’s,
            and later took the next step with my master’s at Kristu Jayanti
            College. Now I’m exploring the web, experimenting with ideas, and
            engineering my way through whatever comes next, because curiosity
            keeps each project interesting too.
          </p>
        </div>
        <div className="aboutSCS">
          <p>
            I work mainly with the MERN stack, building web applications that
            turn ideas into useful experiences. Along the way, I have also
            worked with Python, Java, and other technologies whenever a project
            needs them. One project close to me is a{" "}
            <span id="highlight-none">Hostel Management App</span>, an idea that
            came directly from my own experience of staying at a hostel while
            pursuing my master’s. I enjoy building things that solve problems I
            have seen. Beyond web development, I’m curious about robotics and
            game development too, because engineering becomes even more exciting
            when software can that feel alive and genuinely fun,
            creative-problem-solver.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
