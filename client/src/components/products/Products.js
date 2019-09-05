import React, {Fragment, useContext, useEffect} from 'react';
import ProductItem from './ProductItem';
import ProductContext from '../../context/product/productContext';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Spinner from '../layout/Spinner';


const Products = () => {

    const productContext = useContext(ProductContext);

    const {products, filtered, getProducts, loading} = productContext;

    useEffect(() => {//basically fills in our products array, sending the request to the DB
        getProducts();
        // eslint-disable-next-line
    },[]);

    if (products !== null && products.length === 0 && !loading) {
        return <h4>               The store is empty...</h4>
    }

    return (
        <div className='container'>
                {products !== null && !loading ? (
                    <div className='row'>
                    {filtered !== null
                        ? filtered.map(product => (
                                <div key={product._id} className='col-md-4'>
                                    <ProductItem key={product._id} product={product}/>
                                </div>
                        ))
                        : products.map(product => ( //map returns an array
                                <div key={product._id} className='col-md-4'>
                                    <ProductItem key={product._id} product={product}/>
                                </div>
                        ))}
                </div>) : <Spinner/>}
        </div>
    );
};



export default Products;
