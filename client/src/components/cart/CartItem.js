import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart/cartContext';

const CartItem = ({ product }) => {

    const cartContext = useContext(CartContext);

    const { deleteProduct, setCurrent, clearCurrent } = cartContext;

    const { _id, model, brand, type, price, pic1, pic2, pic3, specs } = product;

    return (
        <div className="card bg-light">
            <img
                src={pic1}
                alt="" className=""
                style={{width: '60px', float: 'left'}}
            />
            <h2>{model}</h2>
            <h4>{price}</h4>
            <span>QTY:</span>

            <button style={{float: 'right'}}>
                <i className="far fa-trash-alt"></i>
            </button>

            {/*<div>*/}
                {/*<Link to={{pathname: `/store/product/${_id}`, state: {id: _id}}}*/}
                    {/*//params={{ product: {model, brand, specs, price, type, pic1} }}*/}
                      {/*className="btn btn-dark btn-sm my-1"*/}
                      {/*onClick={() => setCurrent(product)}>*/}
                    {/*shop now*/}
                {/*</Link>*/}
            {/*</div>*/}
        </div>
    );
}

CartItem.propTypes = {
    product:PropTypes.object.isRequired,
};
export default CartItem;