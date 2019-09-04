import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart/cartContext';

const CartItem = ({ product }) => {

    const cartContext = useContext(CartContext);

    const { deleteProduct, setCurrent, clearCurrent, current, setTotal, updateProduct} = cartContext;

    const { _id, model, brand, type, price, pic1, pic2, pic3, specs, quantity } = product;


    const onRemove = () => {
        deleteProduct(_id);
        setTotal();
    };

    const onPlus = (product) => {
        let temp = product;
        temp.quantity++;
        updateProduct(temp);
        setTotal();
    };

    const onMinus = (product) => {
        let temp = product;
        if(temp.quantity > 1){
            temp.quantity--;
        };
        updateProduct(temp);
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
                <button className="minus bg-success text-center" onClick={()=> onMinus(product)}>
                    <i className="fas fa-minus-circle"/>
                </button>
                <input type="number"
                       className="count text-center"
                       name="qty"
                       style={{position: 'relative'}}
                       value={quantity}
                />
                <button className="plus bg-success text-center" onClick={()=> onPlus(product)}>
                    <i className="fas fa-plus-circle"/>
                </button>
                <button className="btn btn-light"
                        style={{position: "absolute", bottom: "15px", right: 0}}
                >Update</button>
                <button className="btn btn-light"
                        onClick={onRemove}
                        style={{position: "absolute", top: 0, right: 0, borderRadius: "50%"}}>
                    <i className="far fa-trash-alt"/>
                </button>
            </div>
         </div>
    );
};

CartItem.propTypes = {
    product:PropTypes.object.isRequired,
};
export default CartItem;