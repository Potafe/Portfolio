import { useState, useRef, useEffect } from "react";
import useRefs from "../../global/hooks/useRefs"
import Experience from "../../components/Experience/Experience"
import Project from "../../components/Project/Project"

import styles from "./Home.module.scss";

const nameData = [
  { content: "P", hoverContent: "c" },
  { content: "r", hoverContent: "o" },
  { content: "a", hoverContent: "d" },
  { content: "t", hoverContent: "a" },
  { content: "i", hoverContent: "d" },
  { content: "k", hoverContent: "e" },
  { content: String.fromCharCode(0xa0), hoverContent: "p" },
  { content: "M", hoverContent: "t" },
  { content: ".", hoverContent: "." },
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
      <section className={styles["right"]}>
        <Experience ref={refObj[1]} />
        <Project ref={refObj[2]} />
      </section>
    </div>
  );
};

export default Home;
