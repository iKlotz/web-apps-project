import React, {useReducer} from 'react';
import OrderContext from './orderContext';
import orderReducer from './orderReducer';
import axios from 'axios';

import {
    GET_PRODUCTS,
    ADD_PRODUCT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_PRODUCT,
    PRODUCT_ERROR,
    SET_TOTAL
} from '../types';

const OrderState = props => {
    const initialState = {
        products: [],
        current: null,
        ordersTotal: 0,
        error: null
    };

    const [state, dispatch] = useReducer(orderReducer, initialState);

    //Get Products
    const getProducts = async () => {
        try {
            const res = await axios.get('/api/orders');

            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: PRODUCT_ERROR,
                payload: err.res.msg
            });
        }
    };

    //Add product
    const addProduct = async product => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post('/api/orders', product, config);

            dispatch({type: ADD_PRODUCT, payload: res.data}); //new added product to our database
        } catch (err) {
            dispatch({
                type: PRODUCT_ERROR,
                payload: err.data
            });
        }
    };

    const addProducts = products => {
        products.forEach(addProduct);
    };

    //Set current
    const setCurrent = product => {
        dispatch({type: SET_CURRENT, payload: product});
    };

    //Clear current
    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT});
    };

    //Set order total value
    const setTotal = async () => {
        try {
            const res = await axios.get('/api/orders');

            dispatch({
                type: SET_TOTAL,
                payload: res.data
            }); //users orders
        } catch (err) {
            dispatch({
                type: PRODUCT_ERROR,
                payload: err.data.response.msg
            });
        }
    };

    //Mark as shipped
    const markAsShipped = async product => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };


        try {
            const res = await axios.put(`/api/orders/${product._id}`, product, config);

            dispatch({type: UPDATE_PRODUCT, payload: res.data});
        } catch (err) {
            dispatch({
                type: PRODUCT_ERROR,
                payload: err.data
            });
        }
    };

    return (
        <OrderContext.Provider
            value={{
                products: state.products,
                current: state.current,
                ordersTotal: state.ordersTotal,
                error: state.error,
                addProduct,
                addProducts,
                setCurrent,
                markAsShipped,
                getProducts,
                clearCurrent,
                setTotal
            }}
        >
            {props.children}
        </OrderContext.Provider>
    );
};

export default OrderState;




