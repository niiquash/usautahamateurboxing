import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.aboutDetails}>
        <p>
          Welcome to USA Utah Amateur Boxing, the ultimate hub for the thriving
          amateur boxing community in the state of Utah! We are a passionate
          group of boxing enthusiasts who have come together to celebrate the
          spirit of amateur boxing and foster camaraderie among gyms across the
          region.
        </p>
      </div>
      <div className={styles.aboutDetails}>
        <h3>Who We Are</h3>
        <p>
          At USA Utah Amateur Boxing, we are dedicated to showcasing the talent
          and determination of amateur boxers from various gyms in Utah. Our
          platform serves as a collaborative space where boxing enthusiasts,
          athletes, and gyms unite to organize thrilling shows and friendly
          competitions.
        </p>
      </div>
      <div className={styles.aboutDetails}>
        <h3>What We Do</h3>
        <p>
          We bring together the vibrant boxing community of Utah to highlight
          the skills and dedication of amateur boxers. From the grit of the
          training sessions to the excitement of the ring, our platform is a
          testament to the passion that fuels the sport. Here, you'll find
          information about upcoming events, participating gyms, and the
          incredible athletes who make Utah's amateur boxing scene so dynamic.
        </p>
      </div>
      <div className={styles.aboutDetails}>
        <h3>Our Mission</h3>
        <p>
          Our mission is to promote unity, sportsmanship, and skill development
          within the amateur boxing community of Utah. Through collaboration and
          friendly competition, we aim to create an environment where athletes
          can showcase their talents, build lasting connections, and contribute
          to the growth of amateur boxing in the state.
        </p>
      </div>
      <div className={styles.aboutDetails}>
        <h3>Get Involved</h3>
        <p>
          Whether you're a seasoned boxer, a gym owner, or a fan of the sport,
          there's a place for you at USA Utah Amateur Boxing. Explore our site
          to discover upcoming events, learn more about participating gyms, and
          connect with like-minded individuals who share your passion for
          amateur boxing. Join us in celebrating the heart and soul of amateur
          boxing in Utah. Together, let's make every round count!
        </p>
      </div>
    </section>
  );
};

export default About;
