import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerImg}>
        <Link to="/">
          <img src="/assets/logo/logo-no-background.png" alt="footer logo" />
        </Link>
      </div>
      <div className={styles.footerContact}>
        <div className={styles.footerContactDetails}>
          <h4>Address</h4>
          <address>
            <a href="https://www.google.com/maps/place/Fullmer+Brothers+Boxing+Gym/@39.6806197,-114.8817122,7z/data=!4m10!1m2!2m1!1sutah+amateur+boxing!3m6!1s0x875286093fc63deb:0x49a5fcfb1de33af8!8m2!3d40.5544014!4d-111.9477036!15sChN1dGFoIGFtYXRldXIgYm94aW5nkgEKYm94aW5nX2d5beABAA!16s%2Fg%2F11f0kvd36n?entry=ttu">
              11000 2200 W, South Jordan, UT 84095
            </a>
          </address>
        </div>
        <div className={styles.footerContactDetails}>
          <h4>Email</h4>
          <span>abc@yahoo.com</span>
          <span>abc@gmail.com</span>
        </div>
        <div className={styles.footerContactDetails}>
          <h4>Phone</h4>
          <span>+(1) 322.156.4567</span>
          <span>+(1) 322.178.7987</span>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <span>
          Copyright &copy; 2024 | USA Utah Amateur Boxing | All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
