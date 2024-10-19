import { ReactNode } from "react";
import styles from "./Link.module.scss";

const Link = ({ to = "/", children = <></> }) => {
  return (
    <a href={to} target="_blank" rel="noreferrer" className={styles["link"]}>
      {children}
    </a>
  );
};

export default Link;
