import styles from "./EducationCard.module.scss";

const EducationCard = ({
  school,
  degree,
  endDate,
  keyPoints,
  startDate,
  link,
  imgSrc,
  cgpa
}) => {
  const isPercentage = parseFloat(cgpa) > 10;
  return (
    
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={styles["education-card"]}
    >
      <div className={styles["left"]}>
        <p
          className={styles["duration"]}
          title={(
            ((endDate === "present"
              ? new Date().getFullYear()
              : endDate.getFullYear()) -
              startDate.getFullYear()) *
              12 +
            ((endDate === "present"
              ? new Date().getMonth()
              : endDate.getMonth()) -
              startDate.getMonth())
          ).toString() + " Months"}
        >
          <span className={styles["start"]}>
            {startDate.toLocaleString("en-US", {
              month: "long",
              year: "numeric",
            })}{" "}
          </span>{" "}
          to{" "}
          <span className={styles["end"]}>
            {endDate === "present"
              ? "Present"
              : endDate.toLocaleString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
          </span>
        </p>
        <img src={imgSrc} alt={school} className={styles["school-logo"]} />
      </div>
      <div className={styles["right"]}>
        <p className={styles["education"]}>
          {degree} &middot; {school} &#8599;
        </p>
        <p className={styles["cgpa"]}>
          {isPercentage ? "Percentage" : "CGPA"}: {cgpa}
        </p>
        <div className={styles["education-desc"]}>
          <ul>
            {keyPoints.map((key, idx) => (
              <li key={idx}>{key}</li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
};

export default EducationCard;
