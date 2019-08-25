import React, {Fragment, useContext, useEffect} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import CartContext from '../../context/cart/cartContext';
import Spinner from '../layout/Spinner';
import CartItem from './CartItem';

const CartItems = () => {
    const cartContext = useContext(CartContext);

    const {products, getProducts, loading, cartTotal, setTotal} = cartContext;

    //basically fills in our products array, sending the request to the DB
    useEffect( () => {
        getProducts();
        // eslint-disable-next-line
    }, []);

    if (products !== null && products.length === 0 && !loading) {
        return <h4>The cart is empty...</h4>
    }

    return (
        <Fragment>
            {products !== null && !loading ?
                (<TransitionGroup>
                    {products.map(product => ( //map returns an array
                        <CSSTransition key={product._id} timeout={100} classNames="item">
                            <CartItem product={product}/>
                        </CSSTransition>
                    ))}
                </TransitionGroup>)
                : <Spinner/>}
        </Fragment>
    );
};
export default CartItems;