import { forwardRef } from "react";
import EducationCard from "./EducationCard";
import education from "../../assets/education.json";
import styles from "./Education.module.scss";

const Education = (_props, ref) => {
  return (
    <article ref={ref} className={styles["edu"]}>
      <h1>Education</h1>
      {education.map((e, idx) => (
        <EducationCard
          school={e.school}
          degree={e.degree}
          endDate={e.endDate === "present" ? "present" : new Date(e.endDate)}
          startDate={new Date(e.startDate)}
          link={e.link}
          keyPoints={e.keyPoints || []}
          cgpa={e.CGPA}
          key={idx}
          imgSrc={e.imgSrc}
        />
      ))}
    </article>
  );
};

const ForwardedRefEducation = forwardRef(Education);

export default ForwardedRefEducation;
