import styles from '../HeroTitleSection/HeroTitleSection.module.css';
import TextButton from '../../TextButton/TextButton';
import { Link } from "react-router-dom";

function HeroTitleSection() {
  return (
    <div className={styles.heroImageSection}>
      <div className={styles.heroImageContainer}>
        <div className={styles.heroImageContainerText}>
          <div className={styles.heroText}>The Chocolate Capital of <br></br> the Philippines.</div>
          <div className={styles.heroSubText}>Davao City Chocolate Processors Association Incorporated</div>
        </div>
        <div className={styles.buttonContainer}>
          <Link to="/" className="Link">
            <TextButton buttonText="Shop!" className={styles.buttonContainer}></TextButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroTitleSection;
