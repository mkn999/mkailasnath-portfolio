import { div, p, style } from "framer-motion/client";
import styles from "./projectCard.module.css";
import { MoveUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { client } from "../../sanity/client";
import { projectsQuery } from "../../sanity/queries";
import Loader from "../Loader/Loader";
export default function ProjectCard() {
  const handleClick = (link) => {
    window.open(link, "_blank", "noopener");
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getProjects() {
      try {
        setLoading(true);
        const data = await client.fetch(projectsQuery);
        setData(data);
        console.log("sanity data:", data);
      } catch (error) {
        console.error("sanity error:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }

    getProjects();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.projectMain} id="project">
      <p className={styles.projectSectionTitle}>works</p>
      <div className={styles.projectWrapper}>
        {data.map((dayta) => (
          <div
            className={styles.projectContainer}
            onClick={() => {
              handleClick(dayta?.projectUrl);
            }}
          >
            <div className={styles.subContainer}>
              <p className={styles.projectTitle} id="projectName">
                {dayta?.projectName}
              </p>

              <p className={styles.projectArrow}>
                {/* <a href={dayta?.projectUrl} target="_blank" rel="noopener"> */}
                <MoveUpRight />
                {/* </a> */}
              </p>
            </div>

            <p className={styles.projectDesc}>{dayta?.projectDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
