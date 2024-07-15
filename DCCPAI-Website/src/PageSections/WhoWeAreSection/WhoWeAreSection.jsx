import styles from './WhoWeAreSection.module.css'
import FlavorTextWithButton from './FlavorTextWithButton/FlavorTextWithButton.jsx'
import WhoWeAreImage from './WhoWeAreImage/WhoWeAreImage.jsx'

function WhoWeAreSection() {
    return(
        <div className={styles.whoWeAreSection}>
            <WhoWeAreImage />
            <FlavorTextWithButton />
        </div>
    );
}

export default WhoWeAreSection