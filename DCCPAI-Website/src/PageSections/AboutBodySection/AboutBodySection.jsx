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
            <FlavorTextWithButtonLeft mainText="Testing Left Text w/ Button Link" buttonLabel="yahoo" buttonLeadsTo="Shop"/>
        </div>
        
        <div className={styles.rightText}>
            <FlavorTextWithButtonRight mainText="Testing Right Text" buttonLabel="Frequently Asked Questions" buttonLeadsTo="FAQ"/>
        </div>
        
        <div className={styles.bottomText}>
            <FlavorTextMiddle />
        </div>

    </div>
    </>
    );
}

export default AboutBodySection