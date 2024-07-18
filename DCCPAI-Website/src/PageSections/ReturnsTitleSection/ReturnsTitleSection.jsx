import FlavorTextMiddle from '../../FlavorTextMiddle/FlavorTextMiddle';
import styles from '../ReturnsTitleSection/ReturnsTitleSection.module.css'

function ReturnsTitleSection() {
    return(
        <>
        <div className={styles.returnsTitleContainer}>
            <FlavorTextMiddle mainText="Returns" />
        </div>
        </>
    );
}

export default ReturnsTitleSection