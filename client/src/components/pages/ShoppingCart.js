import React, {useContext, useEffect} from 'react';
import CartItems from '../cart/CartItems';
import AuthContext from '../../context/auth/authContext';
import CartContext from '../../context/cart/cartContext';
import {Link} from "react-router-dom";

const ShoppingCart = () => {
    const authContext = useContext(AuthContext);
    const cartContext = useContext(CartContext);

    const {products, cartTotal, setTotal, getProducts, loading, clearCart} = cartContext;


    useEffect(() => {
        authContext.loadUser();
        getProducts();
        setTotal();
        // eslint-disable-next-line
    }, []);

    if (products !== null && products.length === 0 && !loading) {
        return (
            <div className="col-md-4">
                <div className="card">
                    <h5 className="card-header">It looks like your cart is empty...</h5>
                    <div className="card-body">
                        <h5 className="card-title">But don't worry!</h5>
                        <p className="card-text">You're just one click away from buying an amazing guitar!</p>
                        <Link to={{pathname: '/store'}}
                              className="btn btn-success"
                        >
                            Go to store
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="row">
            <div>
                <CartItems/>
            </div>
            <div className="col-md-5">
                <div className="card">
                    <h5 className="card-header">Subtotal: $ {cartTotal}</h5>
                    <div className="card-body">
                        <h5 className="card-title">Always remember!</h5>
                        <p className="card-text">You can't buy happiness, but you can buy guitars
                            which is pretty much the same thing!</p>
                        <Link to={{pathname: '/checkout'}}
                              className="btn btn-success"
                              onClick={clearCart}
                        >
                            PLACE ORDER
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;