import React, {Fragment, useContext, useEffect} from 'react';
// import {CSSTransition, TransitionGroup} from "react-transition-group";
import ProductContext from '../../context/product/productContext';
// import Spinner from '../layout/Spinner';
import ProductListItem from './ProductListItem';
import ProductItem from "./ProductItem";

const ProductsList = () => {
    const productContext = useContext(ProductContext);

    const {products, filtered} = productContext;

    // useEffect(() => {//basically fills in our products array, sending the request to the DB
    //     getContacts();
    //     // eslint-disable-next-line
    // },[]);
    //
    // if (products !== null && products.length === 0 && !loading) {
    //     return <h4>Please add a contact</h4>
    // }

    return (
        <Fragment>
            {/*{products !== null && !loading ? (<TransitionGroup>*/}
                {/*{filtered !== null*/}
                    {/*? filtered.map(contact => (*/}
                        {/*<CSSTransition key={product._id} timeout={100} classNames="item">*/}
                            {/*<ContactItem contact={contact}/>*/}
                        {/*</CSSTransition>*/}
                    {/*))*/}
                    {/*: products.map(contact => ( //map returns an array*/}
                        {/*<CSSTransition key={contact._id} timeout={500} classNames="item">*/}
                            {/*<ContactItem contact={contact}/>*/}
                        {/*</CSSTransition>*/}
                    {/*))}*/}
            {/*</TransitionGroup>) : <Spinner/>}*/}

            {filtered !== null
                ? filtered.map(product =>(
                <ProductListItem key={product.id} product={product}/>
                ))
                : products.map(product => (
                <ProductListItem key={product.id} product={product}/>
                ))}
        </Fragment>
    );
};
export default ProductsList;