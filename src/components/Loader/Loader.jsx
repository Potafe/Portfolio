import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <article className={styles["parent-loader"]}>
      <div className={styles["loader"]}>
        <span className={styles["letter"]}>Y</span>
        <span className={styles["letter"]}>A</span>
        <span className={styles["letter"]}>Z</span>
        <span className={styles["letter"]}>A</span>
        <span className={styles["letter"]}>T</span>
      </div>
      <p>2025 Yazat Mishra. All rights reserved.</p>
    </article>
  );
};

export default Loader;
