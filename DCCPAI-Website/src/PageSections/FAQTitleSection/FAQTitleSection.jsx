import FlavorTextMiddle from '../../FlavorTextMiddle/FlavorTextMiddle';
import styles from '../FAQTitleSection/FAQTitleSection.module.css'

function FAQTitleSection() {
    return(
        <>
        <div className={styles.faqTitleContainer}>
            <FlavorTextMiddle mainText='Frequently Asked Questions'/> 
        </div>
        </>
    );
}

export default FAQTitleSection