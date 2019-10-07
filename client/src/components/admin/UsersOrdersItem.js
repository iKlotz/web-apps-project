import React, {useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import OrderContext from '../../context/order/orderContext';

const UsersOrderItem = ({ item }) => {

    const orderContext = useContext(OrderContext);

    const { markAsShipped, setCurrent } = orderContext;

    const { model, price, pic1, quantity, status, date } = item;

    useEffect(() => {//basically fills in our products array, sending the request to the DB

        setCurrent(item);
        // eslint-disable-next-line
    },[]);

    const setAsShipped = async () => {
        markAsShipped(item);
        setCurrent(item);
        //find a way to update status to sipped
    };

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
                <h6>Status: {status}</h6>
                <h6>Ordered on: {date}</h6>
            </div>
            {status == "in-process" ?
            <button type="button"
                    className="btn btn-success"
                    onClick={setAsShipped}
            >
                Mark as shipped
            </button> : <span className="badge badge-pill badge-danger">{status}</span>}
        </div>
    );
};

UsersOrderItem.propTypes = {
    item:PropTypes.object.isRequired,
};
export default UsersOrderItem;

