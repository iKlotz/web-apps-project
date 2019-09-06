import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart/cartContext';
import ProductContext from '../../context/product/productContext';

const CartItem = ({ product }) => {

    const cartContext = useContext(CartContext);

    const productContext = useContext(ProductContext);

    const { deleteProduct, setTotal, updateProduct} = cartContext;

    const { setCurrent } = productContext;

    const { _id, model, brand, pic1, quantity } = product;


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
                        <p className="card-text">{brand} is known as a brand that makes an amazing guitars. That look, sound and feel amazing</p>
                        <p className="card-text"><small className="text-muted">Take me home!</small></p>
                    </div>
                </div>
            </div>
            <div className="qty mt-5 " >
                <button className="minus bg-success text-center" onClick={()=> onMinus(product)}>
                    <i className="fas fa-minus-circle"/>
                </button>
                <input type="number"
                       className="count text-center cart-qty"
                       name="qty"
                       style={{position: 'relative'}}
                       value={quantity}
                />
                <button className="plus bg-success text-center" onClick={()=> onPlus(product)}>
                    <i className="fas fa-plus-circle"/>
                </button>
                <button className="btn btn-light"
                        onClick={onRemove}
                        style={{position: "absolute", top: 0, right: 0, borderRadius: "50%"}}>
                    <i className="far fa-trash-alt"/>
                </button>
                <Link to={{pathname: `/store/product/${_id}`, state: {id: _id}}}
                      className="btn btn-light"
                      onClick={() => setCurrent(product)}
                      style={{position: "absolute", bottom: "15px", right: 0}}
                >
                    View Item
                </Link>
            </div>
         </div>
    );
};

CartItem.propTypes = {
    product:PropTypes.object.isRequired,
};
export default CartItem;