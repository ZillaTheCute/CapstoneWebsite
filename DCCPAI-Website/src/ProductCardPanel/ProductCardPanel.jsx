import React from 'react';
import styles from './ProductCardPanel.module.css';
import TextButton from '../TextButton/TextButton';
import { Link } from "react-router-dom";


function ProductCardPanel() {

    return (
        <>
        <div className={styles.panelContainer}>

            <div className={styles.topRow}>
                <button className={styles.xButton}>&times;</button>
            </div>

            <div className={styles.productCardPanelGrid}>

            <div className={styles.leftSideTop}>

                <div className={styles.imagePreview}>
                    <h1>Image Preview Here</h1>
                </div>

            </div>
            
            <div className={styles.rightSide}> 

                <div className={styles.panelInputDiv} >
                    <input type="text" placeholder="Name" className={styles.panelInput}>
                    </input>
                </div>

                <div className={styles.panelInputDiv} >
                    <input type="text" placeholder="Description" className={styles.panelInput}>
                    </input>
                </div>

                <div className={styles.panelInputDiv} >
                    <input type="text" placeholder="Category" className={styles.panelInput}>
                    </input>
                </div>

            </div>

            <div className={styles.leftSideBottom}>

                    <div className={styles.nameAndPrice}>
                        <h1>Name/Price</h1>
                    </div>
                    <div className={styles.price}>
                        <h1>Price</h1>
                    </div>

                </div>

            </div>

            <div className={styles.bottomButtons}>  
                <TextButton buttonText="Cancel" /> 
                <TextButton buttonText="Add" /> 
            </div>

        </div>
        </>
    );
}


export default ProductCardPanel;
