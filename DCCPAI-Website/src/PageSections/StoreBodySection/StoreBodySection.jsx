import styles from './StoreBodySection.module.css';
import ProductCard from '../../ProductCard/ProductCard.jsx'

function ShopBodySection() {
    return(
    <>
    <div className={styles.shopBodyContainer}>
        <div className={styles.shopBodyLeft}>
        <h1>Categories</h1>
        <h2>All Products</h2>
        <h2>Cacao</h2>
        <ul>
            <li>Product Type 1</li>
            <li>Product Type 2</li>
            <li>Product Type 2</li>
            <li>Product Type 3</li>
        </ul>

        <h2>Non Cacao</h2>
        <ul>
            <li>Product Type 1</li>
            <li>Product Type 2</li>
        </ul>

        </div>
        
        <div className={styles.shopBodyRight}>
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
        <div className={styles.pageList}>
                <div><h2>1</h2></div>
                <div><h2>2</h2></div>
                <div><h2>3</h2></div>
                <div><h2>4</h2></div>
            </div>
        </div>

    </div>
    </>
    );
}

export default ShopBodySection