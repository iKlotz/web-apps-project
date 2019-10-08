import React from 'react';
import PropTypes from 'prop-types';

const UsersCartItem = ({item}) => {
    const {model, price, pic1, quantity} = item;

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

UsersCartItem.propTypes = {
    item: PropTypes.object.isRequired,
};
export default UsersCartItem;

