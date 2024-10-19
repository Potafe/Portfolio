import styles from "./ProjectCard.module.scss";

const ProjectCard= ({
  description,
  imageSrc,
  name,
  skills,
  link,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={styles["project-card"]}
    >
      <div className={styles["left"]}>
        <img src={imageSrc} alt={name} />
      </div>
      <div className={styles["right"]}>
        <p className={styles["project-name"]}>{name} &#8599;</p>
        <div className={styles["project-desc"]}>
          <ul>
            {description.map((key, idx) => (
              <li key={idx}>{key}</li>
            ))}
          </ul>
          </div>
          <div className={styles["project-skills"]}>
          {skills.map((skill, idx) => (
            <span key={idx}>
              <a
                href={skill.link}
                target="_blank"
                rel="noreferrer"
                className={styles["skill-link"]}
              >
                {skill.name}
              </a>
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
