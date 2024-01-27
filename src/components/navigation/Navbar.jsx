import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to="/">
          <img src="/assets/logo/logo-no-background.png" alt="logo" />
        </Link>
      </div>
      <div className={styles.mobileMenu} onClick={handleCloseMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={mobileMenuOpen ? styles.open : ""}>
        <li className={styles.menuItem}>
          <Link to="/" onClick={handleCloseMenu}>
            Home
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/leadership" onClick={handleCloseMenu}>
            Leadership
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/membership" onClick={handleCloseMenu}>
            Membership
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/shows" onClick={handleCloseMenu}>
            Shows
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/shop" onClick={handleCloseMenu}>
            shop
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link to="/contact" onClick={handleCloseMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
