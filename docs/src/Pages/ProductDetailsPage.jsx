import NavBar from '../PageSections/NavBar/NavBar.jsx'
import Footer from '../PageSections/Footer/Footer.jsx'
import ProductDetailsBodySection from '../PageSections/ProductDetailsBodySection/ProductDetailsBodySection.jsx'
import React, { useEffect } from 'react';

function ProductDetailsPage() {

    useEffect(() => {
        document.title = '[Insert Product Name Here]'; // Change this text as needed
    }, []);

    return (
        <>
        <NavBar />
        <ProductDetailsBodySection />
        <Footer /> 
        </>
    )
}

export default ProductDetailsPage