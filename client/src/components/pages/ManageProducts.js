import React from 'react';
import ProductsList from '../products/ProductsList';
import ProductForm from '../products/ProductForm';
import ProductFilter from '../products/ProductFilter'

const ManageProducts = () => {
    return (
        <div className="grid-2">
            <div>
                <ProductForm />
            </div>
            <div>
                <ProductFilter />
                <ProductsList />
            </div>
        </div>
    );
};

export default ManageProducts;