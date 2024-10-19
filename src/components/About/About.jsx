import { forwardRef, useState, useEffect } from "react";
import { Link } from "..";
import styles from "./About.module.scss";

const About = (_props, ref) => {
  const [showFullContent, setShowFullContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  const initialParagraph = (
    <p>
     Hi, I'm Yazat Mishra, a tech enthusiast 
     and software developer with a passion 
     for full-stack development and AI-based projects.{" "}
      {isMobile && !showFullContent && (
        <span onClick={toggleContent} className={styles["read-more"]}>
          Read more...
        </span>
      )}
    </p>
  );

  const expandedParagraphs = (
    <>
      <p>
        My focus on Software Development 
        led me to delve into both Frontend and 
        Backend technologies. 
        I have hands-on experience with frameworks and 
        libraries like React for building dynamic user interfaces, 
        as well as Node.js and Express for creating robust server-side applications. 
        This blend of skills allows me to understand and
         tackle challenges across the entire development stack.
      </p>
      <p>
        Internship experiences at institutes like NTRO 
        provided invaluable exposure to large-scale software development processes, 
        further enhancing my skills and understanding of industry practices. 
        Working on projects like anomaly detection in hyperspectral 
        images and developing an offline Q&A bot equipped me with practical insights 
        into AI applications and collaborative project environments.
      </p>
    </>  
  );

  return (
    <article ref={ref} className={styles["about"]}>
      <h1>About</h1>
      {isMobile ? (
        <>
          {initialParagraph}
          {showFullContent && expandedParagraphs}
          {isMobile && showFullContent && (
            <span onClick={toggleContent} className={styles["read-less"]}>
              Read less...
            </span>
          )}
        </>
      ) : (
        <>
          {initialParagraph}
          {expandedParagraphs}
        </>
      )}
    </article>
  );
};

const ForwardedRefAbout = forwardRef(About);

export default ForwardedRefAbout;
