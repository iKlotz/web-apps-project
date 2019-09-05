import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ProductContext from '../../context/product/productContext';

const ProductListItem = ({ product }) => {
    const productContext = useContext(ProductContext);

    const { deleteProduct, setCurrent, clearCurrent } = productContext;

    const { _id, model, brand, type, price, pic1, pic2, pic3, specs, quantity } = product;

    const onDelete = () => {
        deleteProduct(_id);
        clearCurrent();
    };

    return (
        <div className='card bg-light'>
            <h3 className="">
                {model}{' '}
            </h3>
            <span style={{float: 'right'}}
                  className={'badge ' + (type === 'Electric Guitar' ?
                      'badge-success' : 'badge-primary')}
            >
                {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>

            <ul className="list">
                {brand && (<li>
                    <i className="fas fa-skull"></i>{' ' + brand}
                </li>)}
                {type && (<li>
                    <i className="fas fa-guitar"></i>{' ' + type}
                </li>)}
                {price && (<li>
                    <i className="fas fa-dollar-sign"></i>{' ' + price}
                </li>)}
                {pic1 && (<li>
                    <i className="fas fa-link"></i>{' ' + pic1}
                </li>)}
                {pic2 && (<li>
                    <i className="fas fa-link"></i>{' ' + pic1}
                </li>)}
                {pic3 && (<li>
                    <i className="fas fa-link"></i>{' ' + pic1}
                </li>)}
                {specs && (<li>
                    <i className="fas fa-cogs"></i>{' ' + specs}
                </li>)}
                {quantity && (<li>
                    <i className="fas fa-cogs"></i>{' ' + quantity}
                </li>)}
                <p>
                    <button className="btn-dark btn-sm" onClick={() => setCurrent(product)}>Edit</button>
                    <button className="btn-danger btn-sm" onClick={onDelete}>Delete</button>
                </p>
            </ul>
        </div>
    );
};

ProductListItem.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductListItem;