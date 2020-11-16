import styles from "../styles/Banner.module.css";

const Banner = (props) => {
  return (
    <>
      <h1 className={styles.header}>Pujas.live</h1>
      <p className={styles.links}>
        <a className={styles.link} href="/chanting/">
          Chanting Books
        </a>
      </p>
    </>
  );
};

export default Banner;
