import FlavorTextMiddle from '../../FlavorTextMiddle/FlavorTextMiddle';
import styles from '../PrivacyPolicyTitleSection/PrivacyPolicyTitleSection.module.css'

function PrivacyPolicyTitleSection() {
    return(
        <>
        <div className={styles.privacyPolicyTitleContainer}>
            <FlavorTextMiddle mainText="Privacy Policy" />
        </div>
        </>
    );
}

export default PrivacyPolicyTitleSection