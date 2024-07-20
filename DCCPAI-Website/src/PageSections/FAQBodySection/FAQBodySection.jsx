import styles from './FAQBodySection.module.css';
import FlavorTextLeft from '../../FlavorTextLeft/FlavorTextLeft.jsx'
import FlavorTextMiddle from '../../FlavorTextMiddle/FlavorTextMiddle.jsx';

function FAQBodySection() {
    return(
    <>
    <div className={styles.faqBodyContainer}>

        <div className={styles.searchBarDiv} >
            <h1>Help?</h1>
        <input type="text" placeholder="Search for Similar Issues" className={styles.searchBar}>
        </input>
        </div>

        <div className={styles.commonIssues}>
            <FlavorTextMiddle mainText='Common Issues' subText=''/>
        </div>
        
        <div className={styles.gridContainer}>
        <FlavorTextLeft />
        <FlavorTextLeft />
        <FlavorTextLeft />
        <FlavorTextLeft />
        </div>

    </div>
    </>
    );
}

export default FAQBodySection