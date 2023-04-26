import React from 'react';

const ProductPage = () => {

    

    return (
        <div className="container mx-auto py-8">
            <img className="mx-auto w-96" src="./assets/images/product1.png" alt="Product" />
            <h1 className="text-3xl font-bold mt-8">Product Title</h1>
            <p className="text-lg mt-4">Description of the product goes here</p>
            <h2 className="text-2xl font-bold mt-4">$99.99</h2>
        </div>
    );
};



export default ProductPage;