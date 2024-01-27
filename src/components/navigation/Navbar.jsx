import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to="/">
          <img src="/assets/logo/logo-no-background.png" alt="logo" />
        </Link>
      </div>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/leadership">Leadership</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/membership">Membership</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/shows">Shows</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/shop">shop</Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
