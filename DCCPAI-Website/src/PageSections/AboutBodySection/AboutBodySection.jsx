import styles from './AboutBodySection.module.css';
import FlavorTextLeft from '../../FlavorTextLeft/FlavorTextLeft.jsx'
import FlavorTextWithButtonLeft from '../../FlavorTextWithButtonLeft/FlavorTextWithButtonLeft.jsx'
import FlavorTextRight from '../../FlavorTextRight/FlavorTextRight.jsx'
import FlavorTextWithButtonRight from '../../FlavorTextWithButtonRight/FlavorTextWithButtonRight.jsx'
import FlavorTextMiddle from '../../FlavorTextMiddle/FlavorTextMiddle.jsx';

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
            <FlavorTextMiddle />
        </div>

    </div>
    </>
    );
}

export default AboutBodySection