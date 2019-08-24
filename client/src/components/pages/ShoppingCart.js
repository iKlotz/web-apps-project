import React, {useContext, useEffect} from 'react';
import ProductsList from '../products/ProductsList';
import ProductForm from '../products/ProductForm';
import ProductFilter from '../products/ProductFilter'
import CartItems from '../cart/CartItems';
import AuthContext from '../../context/auth/authContext';
import CartContext from '../../context/cart/cartContext';

const ShoppingCart = () => {
    const authContext = useContext(AuthContext);
    const cartContext = useContext(CartContext);

    const {products, cartTotal, setTotal, getProducts} = cartContext;


    useEffect(() => {
        authContext.loadUser();
        getProducts();
        setTotal();
        //eslint-disable-next-line
    }, []);

    return (
        <div className="grid-2">
            <div>
                <CartItems/>
            </div>
            <div>
                <h1>Subtotal:</h1>
                <h3>${cartTotal}</h3>
            </div>
        </div>
    );
};

export default ShoppingCart;