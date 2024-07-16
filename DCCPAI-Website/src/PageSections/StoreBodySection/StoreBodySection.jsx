import styles from './StoreBodySection.module.css';
import ProductCard from '../../ProductCard/ProductCard.jsx'

function ShopBodySection() {
    return(
    <>
    <div className={styles.storeBodyContainer}>
        <div className={styles.storeBodyLeft}>
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
        
        <div className={styles.storeBodyRight}>
        <div className={styles.storeBodyGrid}>
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
                 <div>1</div> {/*find a way to make it show the highlighted page */}
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </div>
        </div>

    </div>
    </>
    );
}

export default ShopBodySection