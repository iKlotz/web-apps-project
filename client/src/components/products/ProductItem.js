import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductContext from '../../context/product/productContext';

const ProductItem = ({ product }) => {

    const productContext = useContext(ProductContext);

    const { deleteProduct, setCurrent, clearCurrent } = productContext;

    const { _id, model, brand, type, price, pic1, pic2, pic3, specs } = product;

    return (
        <div className="card text-center">
            <img
                src={pic1}
                // alt="" className="round-img"
                style={{width: '60px'}}
            />
            <h2>{model}</h2>

            <div>
                <Link to={{pathname: `/store/product/${_id}`, state: {id: _id}}}
                      //params={{ product: {model, brand, specs, price, type, pic1} }}
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