import { useState, useRef, useEffect, useCallback } from "react";
import useRefs from "../../global/hooks/useRefs";
import Experience from "../../components/Experience/Experience";
import Project from "../../components/Project/Project";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";
import Remarks from "../../components/Remarks/Remarks";
import About from "../../components/About/About";
import Education from "../../components/Education/Education";

import styles from "./Home.module.scss";

const nameData = [
  { content: "Y", hoverContent: "P" },
  { content: "a", hoverContent: "o" },
  { content: "z", hoverContent: "t" },
  { content: "a", hoverContent: "a" },
  { content: "t", hoverContent: "f" },
  { content: String.fromCharCode(0xa0), hoverContent: "" },
  { content: "M", hoverContent: "e" },
  { content: ".", hoverContent: "" },
];

const Home = () => {
  const [letterCenter, setLetterCenter] = useState([]);
  const [isFlipped, setIsFlipped] = useState(Array(nameData.length).fill(false));
  const lettersRef = useRef([]);
  const refObj = useRefs(3);

  const calculateLetterCenter = useCallback(() => {
    const newCenters = lettersRef.current.map((ref) => {
      const span = ref;
      if (span) {
        const rect = span.getBoundingClientRect();
        return {
          X: rect.left + rect.width / 2,
          Y: rect.top + rect.height / 2,
        };
      }
      return { X: 0, Y: 0 };
    });
    setLetterCenter(newCenters);
  }, []);

  const distance = (X1, Y1, X2, Y2) =>
    Math.sqrt((X2 - X1) ** 2 + (Y2 - Y1) ** 2);

  const calculateLetterFlip = useCallback(
    (X, Y) => {
      const newFlip = letterCenter.map((cen) => {
        const dis = distance(X, Y, cen.X, cen.Y);
        return dis <= 300;
      });
      setIsFlipped(newFlip);
    },
    [letterCenter]
  );

  const handleMouseMove = useCallback(
    (event) => {
      const mouseX = event.pageX;
      const mouseY = event.pageY;
      calculateLetterFlip(mouseX, mouseY);
    },
    [calculateLetterFlip]
  );

  useEffect(() => {
    if (lettersRef.current.length > 0 && letterCenter.length === 0) {
      calculateLetterCenter();
    }
  }, [lettersRef, calculateLetterCenter]);

  return (
    <div className={styles["home"]} onMouseMove={handleMouseMove}>
      <section className={styles["left"]}>
        <Navigation
          imgSrc="/images/self.png"
          nav={["About", "Education", "Experience", "Projects"]}
          refObj={refObj}
        />
        <div className={styles["name"]}>
          <h1>
            <a
              href="https://drive.google.com/file/d/1p87bQepGcU3bncvxb6eILXqPNUKq4-OU/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              {nameData.map((n, idx) => (
                <span
                  className={isFlipped[idx] ? styles["flip"] : ""}
                  data-content={n.content}
                  data-hover-content={n.hoverContent}
                  ref={(element) => (lettersRef.current[idx] = element)}
                  key={idx}
                ></span>
              ))}
            </a>
          </h1>
          <h4>Software Developer</h4>
        </div>
        <Footer />
      </section>
      <section className={styles["right"]}>
        <About ref={refObj[0]} />
        <Education ref={refObj[1]} />
        <Experience ref={refObj[2]} />
        <Project ref={refObj[3]} />
        <Remarks />
      </section>
    </div>
  );
};

export default Home;
