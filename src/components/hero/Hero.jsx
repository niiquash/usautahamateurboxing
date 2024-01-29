import styles from "./Hero.module.css";

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
        <span className={styles.heroButton}>Find out more</span>
      </div>
    </div>
  );
};

export default Hero;
