import styles from './AboutBodySection.module.css';
import FlavorTextLeft from '../../FlavorTextLeft/FlavorTextLeft.jsx'
import FlavorTextWithButtonLeft from '../../FlavorTextWithButtonLeft/FlavorTextWithButtonLeft.jsx'
import FlavorTextRight from '../../FlavorTextRight/FlavorTextRight.jsx'
import FlavorTextWithButtonRight from '../../FlavorTextWithButtonRight/FlavorTextWithButtonRight.jsx'

function AboutBodySection() {
    return(
    <>
    <div className={styles.aboutBodyContainer}>

        <div className={styles.leftText}>
            <FlavorTextLeft />
        </div>

        <div className={styles.rightText}>
            <FlavorTextRight />
        </div>
        
        <div className={styles.leftText}>
            <FlavorTextWithButtonLeft />
        </div>
        
        <div className={styles.rightText}>
        <FlavorTextWithButtonRight />
        </div>
        
        <div className={styles.bottomText}>
            <h1>Meet Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac auctor augue mauris augue neque gravida. Ipsum dolor sit amet consectetur adipiscing elit ut.</p>
        </div>

    </div>
    </>
    );
}

export default AboutBodySection