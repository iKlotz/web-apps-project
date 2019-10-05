import React from 'react';
import PropTypes from 'prop-types';
//import ProductContext from '../../context/product/productContext';

const ProductItem = ({ item }) => {

    //const productContext = useContext(ProductContext);

    //const { deleteProduct, setCurrent, clearCurrent } = productContext;

    const { model, price, pic1, quantity } = item;

    return (
        <div className="card">
            <img
                src={pic1}
                className="card-img-top"
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title">{model}</h5>
                <h6>Price: ${price}</h6>
                <h6>QTY: {quantity}</h6>
            </div>
        </div>
    );
};

ProductItem.propTypes = {
    item:PropTypes.object.isRequired,
};
export default ProductItem;

