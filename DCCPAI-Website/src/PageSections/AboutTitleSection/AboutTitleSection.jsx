import styles from '../AboutTitleSection/AboutTitleSection.module.css'
import FlavorTextMiddle from '../../FlavorTextMiddle/FlavorTextMiddle';

function AboutTitleSection() {
    return(
        <>
        <div className={styles.aboutTitleContainer}>
            <FlavorTextMiddle mainText='About Us'/> 
        </div>
        </>
    );
}

export default AboutTitleSection