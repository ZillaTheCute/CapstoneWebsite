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
            <FlavorTextLeft mainText="The Vision" subText="Insert Vision or other text Here"/>
        </div>

        <div className={styles.rightText}>
            <FlavorTextRight mainText="The Mission" subText="Insert Mission or other text Here"/>
        </div>
        
        <div className={styles.leftText}>
            <FlavorTextWithButtonLeft mainText="The Process (tentative)" buttonLabel="yahoo"/>
        </div>
        
        <div className={styles.rightText}>
            <FlavorTextWithButtonRight mainText="The Source (tentative)" buttonLabel="Frequently Asked Questions"/>
        </div>
        
        <div className={styles.bottomText}>
            <FlavorTextMiddle />
        </div>

    </div>
    </>
    );
}

export default AboutBodySection