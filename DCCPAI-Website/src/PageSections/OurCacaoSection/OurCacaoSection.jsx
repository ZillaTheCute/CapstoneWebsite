import styles from './OurCacaoSection.module.css';
import TextButton from '../../TextButton/TextButton';
import { Link } from "react-router-dom";

function OurCacaoSection() {
  return (
    <div className={styles.ourCacaoSection}>
      <div className={styles.ourCacaoMainText}>
        Our Cacao
      </div>
      <div className={styles.ourCacaoSubText}>
        Distinctly Davao
      </div>
      <div className={styles.buttonContainer}>
      <Link to="/Shop" className="Link">
      <TextButton buttonText="Shop!" className={styles.buttonContainer}></TextButton>
      </Link>
      </div>
    </div>
  );
}

export default OurCacaoSection;
