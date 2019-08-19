import React, { useContext, useRef, useEffect } from 'react';
import ProductContext from '../../context/product/productContext';

const ProductFilter = () => {
    const productContext = useContext(ProductContext);
    const text = useRef('');

    const {filterProducts, clearFilter, filtered } = productContext;

    useEffect(() => {
        if(filtered === null){
            text.current.value = '';
        }
    });

    const onChange = e => {
        if(text.current.value !== ''){
            filterProducts(e.target.value); //which is the actual text
        } else {
            clearFilter();
        }
    };

    return (
        <form>
            <input ref={text} type="text" placeholder="Search products..." onChange=
                {onChange}/>
        </form>
    );
};

export default ProductFilter;