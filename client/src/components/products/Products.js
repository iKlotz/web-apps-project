import React, {Fragment, useContext} from 'react';
import ProductItem from './ProductItem';
import ProductContext from '../../context/product/productContext';


const Products = () => {
    const productContext = useContext(ProductContext); //init context

    const {products} = productContext; //pulling out products from out context

    return (
        <div style={productStyle}>
            {/*{products.map(product => (*/}
                {/*<ProductItem key={product._id} product={product}/>))}*/}
        </div>
    );
};

const productStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

export default Products;
