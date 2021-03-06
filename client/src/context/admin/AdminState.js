import React, {useReducer} from 'react';
import AdminContext from './adminContext';
import adminReducer from './adminReducer';
import axios from 'axios';

import {
    GET_USERS,
    USER_ERROR,
    DELETE_PRODUCT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_PRODUCT,
    FILTER_USERS,
    CLEAR_PRODUCTS,
    CLEAR_FILTER,
    PRODUCT_ERROR,
    GET_CURRENT_CART,
    GET_CURRENT_ORDERS,
    ADD_ORDERS
} from '../types';

const AdminState = props => {
    const initialState = {
        users: null,
        current: null,
        currentCart: null,
        orders: null,
        filtered: null,
        error: null
    };

    const [state, dispatch] = useReducer(adminReducer, initialState);

    //Get Users
    const getUsers = async () => {
        try {
            const res = await axios.get('/api/admin/users');

            dispatch({
                type: GET_USERS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: USER_ERROR,
                payload: err.response.msg
            });
        }
    };

    //Get Current Cart
    const getCurrentCart = async id => {
        try {
            const res = await axios.get(`/api/admin/users/${id}`);

            dispatch({
                type: GET_CURRENT_CART,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: USER_ERROR,
                payload: err.response.msg
            });
        }
    };

    //Get current users orders
    const getCurrentOrders = async id => {
        try {
            const res = await axios.get(`/api/admin/users/orders/${id}`);

            dispatch({
                type: GET_CURRENT_ORDERS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: USER_ERROR,
                payload: err.response.msg
            });
        }
    };

    //Set current
    const setCurrent = user => {
        dispatch({type: SET_CURRENT, payload: user});
    };

    //Clear current
    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT});
    };

    //Update product
    const updateProduct = async product => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.put(`/api/products/${product._id}`, product, config);

            dispatch({type: UPDATE_PRODUCT, payload: res.data});
        } catch (err) {
            dispatch({
                type: PRODUCT_ERROR,
                payload: err.response.msg
            });
        }
    };

    //Filter
    const filterUsers = text => {
        dispatch({type: FILTER_USERS, payload: text});
    };

    //Clear Filter
    const clearFilter = () => {
        dispatch({type: CLEAR_FILTER}); //set back to default which is null
    };

    return (
        <AdminContext.Provider
            value={{
                users: state.users,
                current: state.current,
                filtered: state.filtered,
                error: state.error,
                currentCart: state.currentCart,
                orders: state.orders,
                //deleteProduct,
                setCurrent,
                clearCurrent,
                updateProduct,
                filterUsers,
                clearFilter,
                getUsers,
                getCurrentCart,
                getCurrentOrders
                //clearProducts,
            }}
        >
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminState;




