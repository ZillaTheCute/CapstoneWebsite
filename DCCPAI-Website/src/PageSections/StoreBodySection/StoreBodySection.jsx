import styles from './StoreBodySection.module.css';
import ProductCard from '../../ProductCard/ProductCard.jsx'

function ShopBodySection() {
    return(
    <>
    <div className={styles.shopBodyContainer}>

        <h1>Categories</h1>
        <ul>
            <li>Cacao</li>
            <li>Non-Cacao</li>
        </ul>

        <div className={styles.shopBodyGrid}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
    </>
    );
}

export default ShopBodySection