import { div, p } from "framer-motion/client";
import styles from "./projectCard.module.css";
import { MoveUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { client } from "../../sanity/client";
import { projectsQuery } from "../../sanity/queries";
export default function ProjectCard() {
  const handleClick = () => {
    alert("CARD CLICKED");
    console.log("CARD CLICKED");
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getProjects() {
      try {
        const data = await client.fetch(projectsQuery);
        setData(data);
        console.log("sanity data:", data);
      } catch (error) {
        console.error("sanity error:", error);
      }
    }

    getProjects();
  }, []);

  return (
    <div className={styles.projectMain}>
      <p className={styles.projectSectionTitle}>works</p>
      {data.map((dayta) => (
        <div className={styles.projectContainer}>
          <div className={styles.subContainer}>
            <p className={styles.projectTitle}>{dayta?.projectName}</p>

            <p className={styles.projectArrow}>
              <a href={dayta?.projectUrl} target="_blank" rel="noopener">
                <MoveUpRight />
              </a>
            </p>
          </div>

          <p className={styles.projectDesc}>{dayta?.projectDescription}</p>
        </div>
      ))}
    </div>
  );
}
