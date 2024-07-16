import styles from './WhoWeAreSection.module.css'
import FlavorTextWithButtonRight from '../../FlavorTextWithButtonRight/FlavorTextWithButtonRight.jsx'
import WhoWeAreImage from './WhoWeAreImage/WhoWeAreImage.jsx'

function WhoWeAreSection() {
    return(
        <div className={styles.whoWeAreSection}>
            <WhoWeAreImage />
            <FlavorTextWithButtonRight />
        </div>
    );
}

export default WhoWeAreSection