import styles from './OurCacaoSection.module.css';
import TextButton from '../../TextButton/TextButton';

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
      <TextButton buttonText="Shop!" buttonLink="Shop" className={styles.buttonContainer}></TextButton>
      </div>
    </div>
  );
}

export default OurCacaoSection;
