import styles from '../Footer/Footer.module.css';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLogoText}>
        <Link to="/" className="Link">
          DCCPAI LOGOTEXT
        </Link>
        </div>
        <div className={`${styles.footerFirstColumn} ${styles.footerColumn}`}>
          <ul className={styles.footerList}>
          <Link to="/" className="Link"><li>Shop</li></Link>
          <Link to="/" className="Link"><li>Find Us</li></Link>
          <Link to="/" className="Link"><li>About Us</li></Link>
          <Link to="/" className="Link"><li>Privacy Policy</li></Link>
          </ul>
        </div>
        <div className={`${styles.footerSecondColumn} ${styles.footerColumn}`}>
          <ul className={styles.footerList}>
          <Link to="/" className="Link"><li>Help & FAQ</li></Link>
          <Link to="/" className="Link"><li>Delivery</li></Link>
          <Link to="/" className="Link"><li>Returns</li></Link>
          <Link to="/" className="Link"><li>Payment Methods</li></Link>
          <Link to="/" className="Link"><li>Terms & Conditions</li></Link>
          </ul>
        </div>
        <div className={styles.footerContactText}>
          Questions? Want to see your state? Send us a message at [insert link]. We'd love to hear from you.
          Contact us: 855-443-8144
        </div>
      </div>
    </footer>
  );
}

export default Footer;
