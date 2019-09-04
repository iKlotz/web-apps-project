import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductContext from '../../context/product/productContext';

const ProductItem = ({ item }) => {

    const productContext = useContext(ProductContext);

    const { deleteProduct, setCurrent, clearCurrent } = productContext;

    const { _id, model, price, pic1, quantity } = item;

    return (
        <div className="card">
            <img
                src={pic1}
                className="card-img-top"
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title">{model}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <h6>Price: ${price}</h6>
                <h6>QTY: {quantity}</h6>
            </div>
        </div>
    );
};

ProductItem.propTypes = {
    product:PropTypes.object.isRequired,
};
export default ProductItem;
