import React from 'react';
import Products from '../products/Products';
import ProductFilter from '../products/ProductFilter';

const Store = () => {
    return (
        <div>
            <ProductFilter/>
            <Products/>
        </div>
    );
};

export default Store;