export default function ProjectCard({
  projectTitle,
  projectDescription,
}) {
  const handleClick = () => {
    alert("CARD CLICKED");
    console.log("CARD CLICKED");
  };

  return (
    <div
      className={styles.projectContainer}
      onClick={handleClick}
    >
      <div className={styles.subContainer}>
        <p className={styles.projectTitle}>
          {projectTitle || "project 1"}
        </p>

        <p className={styles.projectArrow}>
          <MoveUpRight />
        </p>
      </div>

      <p className={styles.projectDesc}>
        {projectDescription}
      </p>
    </div>
  );
}