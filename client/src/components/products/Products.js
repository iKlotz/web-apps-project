import React, {Fragment, useContext, useEffect} from 'react';
import ProductItem from './ProductItem';
import ProductContext from '../../context/product/productContext';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Spinner from '../layout/Spinner';


const Products = () => {
    // const productContext = useContext(ProductContext); //init context
    //
    // const {products} = productContext; //pulling out products from out context

//     const productContext = useContext(ProductContext);
//
//     const {products, getProducts, loading} = productContext;
//
//     useEffect(() => {//basically fills in our products array, sending the request to the DB
//         getProducts();
//         // eslint-disable-next-line
//     },[]);
//
//     if (products !== null && products.length === 0 && !loading) {
//         return <h4>Store is empty...</h4>
//     }
//
//     return (
//         <div style={productStyle}>
//             {/*{products.map(product => (*/}
//                 {/*<ProductItem key={product._id} product={product}/>))}*/}
//                 <h1>?</h1>
//         </div>
//     );
// };

    const productContext = useContext(ProductContext);

    const {products, filtered, getProducts, loading} = productContext;

    useEffect(() => {//basically fills in our products array, sending the request to the DB
        getProducts();
        // eslint-disable-next-line
    },[]);

    if (products !== null && products.length === 0 && !loading) {
        return <h4>The store is empty...</h4>
    }

    return (
        <div className='container'>
                {products !== null && !loading ? (<div className='row'>
                    {filtered !== null
                        ? filtered.map(product => (
                                <div className='col-md-4'>
                                    <ProductItem key="product.id" product={product}/>
                                </div>
                        ))
                        : products.map(product => ( //map returns an array
                                <div className='col-md-4'>
                                    <ProductItem key="product.id" product={product}/>
                                </div>
                        ))}
                </div>) : <Spinner/>}
        </div>
    );
};

//doesn't work :(
const productStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

export default Products;
