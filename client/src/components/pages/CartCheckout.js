import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';
import CartContext from '../../context/cart/cartContext';
import Checkout from "../cart/Checkout";

const CartCheckout = () => {
    const authContext = useContext(AuthContext);
    const cartContext = useContext(CartContext);

    const {cartTotal, setTotal, getProducts} = cartContext;


    useEffect(() => {
        authContext.loadUser();
        getProducts();
        setTotal();
        //cart total
        // eslint-disable-next-line
    }, []);

    return (
        <Checkout />
    );
};

export default CartCheckout;