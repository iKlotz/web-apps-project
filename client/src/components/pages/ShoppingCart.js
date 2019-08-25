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

            <div className="row">
                <div>
                    <CartItems/>
                </div>
                <div className="col-md-5">
                    {/*<h1>Subtotal:</h1>*/}
                    {/*<h3>${cartTotal}</h3>*/}
                    <div className="card">
                        <h5 className="card-header">Subtotal: $ {cartTotal}</h5>
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional
                                content.</p>
                            <button type="button" className="btn btn-success">PLACE ORDER</button>
                            {/*<a href="#" className="btn btn-primary">PLACE ORDER</a>*/}
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default ShoppingCart;