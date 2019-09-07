import React, {useContext, useEffect} from 'react';
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
    }, [cartTotal]);


    return (
            <div className='container'>
            {products !== null && !loading ?
                (<TransitionGroup>
                    {products.map(product => ( //map returns an array
                        <CSSTransition key={product._id} timeout={300} classNames="item">
                            <div>
                                <CartItem key={product._id} product={product}/>
                            </div>
                        </CSSTransition>
                    ))}
                </TransitionGroup>)
                : <Spinner/>}
            </div>
    );
};
export default CartItems;