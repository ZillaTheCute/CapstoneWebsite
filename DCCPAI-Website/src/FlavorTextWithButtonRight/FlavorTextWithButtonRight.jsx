import styles from '.././FlavorTextWithButtonRight/FlavorTextWithButtonRight.module.css';
import TextButton from '../TextButton/TextButton.jsx';
import { Link } from "react-router-dom";

function FlavorTextWithButtonRight() {
    return (
        <div className={styles.whoWeAreTextContainer}>
            <div className={`${styles.whoWeAreMainText} ${styles.whoWeAreText}`}>Who we are</div>
            <div className={`${styles.whoWeAreSubText} ${styles.whoWeAreText}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac. Elementum facilisis leo vel fringilla est ullamcorper eget. Dignissim suspendisse in est ante in nibh mauris. Tincidunt eget nullam non nisi est.
            </div>
            <div className={styles.buttonContainer}>
                <Link to="/pageUnderConstruction" className="Link">
                <TextButton className={`${styles.button} ${styles.shopButton}`} buttonText="About" />
                </Link>
            </div>
        </div>
    );
}

export default FlavorTextWithButtonRight;
