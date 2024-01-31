import styles from "./Hero.module.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <img
        className={styles.heroImg}
        src="/assets/hanging-gloves.jpg"
        alt="hero image"
      />
      <div className={styles.textButton}>
        <span className={styles.heroText}>
          Welcome to USA Utah Amateur Boxing
        </span>
        <span className={styles.heroButton}>
          <Link to="/about">Find out more</Link>
        </span>
      </div>
    </div>
  );
};

export default Hero;
