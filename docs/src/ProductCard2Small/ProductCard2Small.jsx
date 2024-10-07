import React from 'react';
import styles from './ProductCard2Small.module.css';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import TextButton from '../TextButton/TextButton.jsx';
import TextButtonSmall from '../TextButtonSmall/TextButtonSmall.jsx';

function ProductCard2Small(props) {

    return (
        <div className={styles.productCardContainer}>

            <div className={styles.topRow}>
                <div className={styles.productReview}>
                    ★★★★★ 200 Reviews
                </div>
                <div className={styles.productPrice}>
                    ₱250.00
                </div>
            </div>

            <div className={styles.middlePicture}>
                [Picture Goes Here]
            </div>

            <div className={styles.bottomRow}>
                <div className={styles.productName}>
                    Product Name
                </div>
                <div className={styles.addToCart}>
                    <TextButtonSmall buttonText="Add To List" buttonLink="ProductDetails"/>
                </div>
            </div>
        </div>
    );
}

ProductCard2Small.PropTypes = {
    buttonLink: PropTypes.string,
}

ProductCard2Small.defaultProps = {
    buttonLink: "",
}

export default ProductCard2Small;
