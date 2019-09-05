import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductContext from '../../context/product/productContext';

const ProductItem = ({ product }) => {

    const productContext = useContext(ProductContext);

    const { deleteProduct, setCurrent, clearCurrent } = productContext;

    const { _id, model, brand, type, price, pic1, pic2, pic3, specs } = product;

    return (
        <div className="card">
            <img
                src={pic1}
                className="w-100"
                alt="..."
                // style={{height: "190px"}}
            />
            <div className="card-body">
                <h5 className="card-title">{model}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <Link to={{pathname: `/store/product/${_id}`, state: {id: _id}}}
                      className="btn btn-dark btn-sm my-1"
                      onClick={() => setCurrent(product)}>
                    shop now
                </Link>
            </div>
        </div>
    );
}

ProductItem.propTypes = {
    product:PropTypes.object.isRequired,
};
export default ProductItem;

