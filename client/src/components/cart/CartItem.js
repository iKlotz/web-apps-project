import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart/cartContext';

const CartItem = ({ product }) => {

    const cartContext = useContext(CartContext);

    const { deleteProduct, setCurrent, clearCurrent, current, setTotal} = cartContext;

    const { _id, model, brand, type, price, pic1, pic2, pic3, specs } = product;

    const onRemove = () => {
        deleteProduct(_id);
        setTotal();
    };

    return (

        <div className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={pic1} className="card-img" alt="..."/>
                </div>

                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{model}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            <div className="qty mt-5 " >
                <button className="minus bg-success text-center" >
                    <i className="fas fa-minus-circle"></i>
                </button>
                <input type="number" className="count text-center" name="qty" style={{position: 'relative'}} value="1"/>
                <button className="plus bg-success text-center">
                    <i className="fas fa-plus-circle"></i>
                </button>
                <button className="btn btn-outline-dark"
                        onClick={onRemove}
                        style={{position: "absolute", top: 0, right: 0, borderRadius: "50%" }}>
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>
         </div>
    );
};

CartItem.propTypes = {
    product:PropTypes.object.isRequired,
};
export default CartItem;