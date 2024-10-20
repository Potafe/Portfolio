import { Link } from "..";
import styles from "./Remarks.module.scss";

const Remarks = () => {
  return (
    <article className={styles["remarks"]}>
      <p>&#169; 2025 Yazat Mishra. All rights reserved.</p>
      <p>
        Crafted in <Link to="https://figma.com/">Figma</Link> and developed with{" "}
        <Link to="https://react.dev/">React</Link>,{" "}
        <Link to="https://vitejs.dev/">Vite</Link>, and{" "}
        <Link to="https://www.typescriptlang.org/">Javascript</Link> in{" "}
        <Link to="https://code.visualstudio.com/">Visual Studio Code</Link>,
        enhanced with <Link to="https://sass-lang.com/">Sass</Link> for styling.
        Hosted on <Link to="https://vercel.com/">Vercel</Link>, with the text
        font being{" "}
        <Link to="https://fonts.google.com/specimen/Fira+Mono">Fira Mono</Link>.
      </p>
    </article>
  );
};

export default Remarks;
