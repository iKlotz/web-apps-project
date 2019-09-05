import React, {useContext, useEffect} from 'react';
import ProductsList from '../products/ProductsList';
import ProductForm from '../products/ProductForm';
import ProductFilter from '../products/ProductFilter'
import CartItems from '../cart/CartItems';
import AuthContext from '../../context/auth/authContext';
import CartContext from '../../context/cart/cartContext';
import {Link} from "react-router-dom";
import Checkout from "../cart/Checkout";

const CartCheckout = () => {
    const authContext = useContext(AuthContext);
    const cartContext = useContext(CartContext);

    const {products, cartTotal, setTotal, getProducts, loading} = cartContext;


    useEffect(() => {
        authContext.loadUser();
        getProducts();
        setTotal();
        //    es lint was disabled here previously
    }, [cartTotal]);


    return (
        <Checkout />
    );
};

export default CartCheckout;