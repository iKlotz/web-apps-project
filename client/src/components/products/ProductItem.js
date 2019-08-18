import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
    const { id, name, pic1 } = product;

    return (
        <div className="card text-center">
            <img
                src={pic1}
                // alt="" className="round-img"
                style={{width: '60px'}}
            />
            <h3>{name}</h3>

            <div>
                <Link to={'./'} className="btn btn-dark btn-sm my-1">
                    More
                </Link>
            </div>
        </div>
    );
}

ProductItem.propTypes = {
    product:PropTypes.object.isRequired,
};
export default ProductItem;