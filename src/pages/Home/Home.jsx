import { useState, useRef, useEffect } from "react";
import useRefs from "../../global/hooks/useRefs"
import Experience from "../../components/Experience/Experience"
import Project from "../../components/Project/Project"
import Footer from "../../components/Footer/Footer"
import Navigation from "../../components/Navigation/Navigation";
import Remarks from "../../components/Remarks/Remarks"
import About from "../../components/About/About"
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
  const [isFlipped, setIsFlipped] = useState([]);
  const lettersRef = useRef([]);
  const refObj = useRefs(3);

  const calculateLetterCenter = () => {
    lettersRef.current.forEach((ref) => {
      const span = ref;
      if (span) {
        const rect = span.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        setLetterCenter((prevLetterCenter) => [
          ...prevLetterCenter,
          {
            X: centerX,
            Y: centerY,
          },
        ]);
      }
    });
  };

  const distance = (X1, Y1, X2, Y2) =>
    Math.sqrt((X2 - X1) ** 2 + (Y2 - Y1) ** 2);

  const calculateLetterFlip = (X, Y) => {
    letterCenter.forEach((cen, idx) => {
      const dis = distance(X, Y, cen.X, cen.Y);

      if (dis <= 300) {
        setIsFlipped((prevFlip) => {
          const newFlip = [...prevFlip];
          newFlip[idx] = true;
          return newFlip;
        });
      } else {
        setIsFlipped((prevFlip) => {
          const newFlip = [...prevFlip];
          newFlip[idx] = false;
          return newFlip;
        });
      }
    });
  };

  const handleMouseMove = (event) => {
    const mouseX = event.pageX;
    const mouseY = event.pageY;

    calculateLetterFlip(mouseX, mouseY);
  };

  useEffect(() => {
    if (letterCenter.length !== 9) {
      calculateLetterCenter();
    }
  }, [letterCenter]);

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
        <Education ref = {refObj[1]} />
        <Experience ref={refObj[2]} />
        <Project ref={refObj[3]} />
        <Remarks />
      </section>
    </div>
  );
};

export default Home;
