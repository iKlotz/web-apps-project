import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';
import CartContext from '../../context/cart/cartContext';
import {Link} from "react-router-dom";

const Checkout = () => {
    const authContext = useContext(AuthContext);
    const cartContext = useContext(CartContext);

    const {products, cartTotal, setTotal, getProducts, loading} = cartContext;


    // useEffect(() => {
    //     authContext.loadUser();
    //     getProducts();
    //     setTotal();
    //     //    es lint was disabled here previously
    // }, []);


    return (
        <div className="col-md-6">
            <div className="card">
                <h5 className="card-header">Your order is on its way!</h5>
                <div className="card-body">
                    <h5 className="card-title">We are so excited for you!</h5>
                    <p className="card-text">But well, we all know that there is no such thing as too many guitars, so...</p>
                    <Link to={{pathname: '/store'}}
                          className="btn btn-success"
                    >
                        Just take a look ;)
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Checkout;