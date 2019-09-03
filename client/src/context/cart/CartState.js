import React, {useReducer} from 'react';
import CartContext from './cartContext';
import cartReducer from './cartReducer';
import axios from 'axios';

import {
    GET_PRODUCTS,
    ADD_PRODUCT,
    DELETE_PRODUCT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_PRODUCT,
    CLEAR_PRODUCTS,
    PRODUCT_ERROR,
    SET_TOTAL
} from '../types';

const CartState = props => {
    const initialState = {
        products: null,
        current: null,
        cartTotal: 0,
        error: null
    };

    const [state, dispatch] = useReducer(cartReducer, initialState);

    //Get Products
    const getProducts = async () => {
        try{
            const res = await axios.get('/api/shopping-cart');

            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            }); //all the products in stock
        } catch (err) {
            dispatch({
                type: PRODUCT_ERROR,
                payload: err.response.msg
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

        try{
            const res = await axios.post('/api/shopping-cart', product, config);

            dispatch({ type: ADD_PRODUCT, payload: res.data }); //new added product to our database
        } catch (err) {
            dispatch({
                type: PRODUCT_ERROR,
                payload: err.response.msg //changed from response
            });
        }
    };

    //Delete product
    const deleteProduct = async id => {

        try{
            await axios.delete(`/api/shopping-cart/${id}`);

            dispatch({ type: DELETE_PRODUCT, payload: id });
        } catch (err) {
            dispatch({
                type: PRODUCT_ERROR,
                payload: err.response.msg
            });
        }
    };

    //Clear products
    const clearProducts = () => {
        dispatch({ type: CLEAR_PRODUCTS });
    };


    //Set current
    const setCurrent = product => {
        dispatch({ type: SET_CURRENT, payload: product });
    };

    //Clear current
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    };

    //Set carts total value
    const setTotal = async () => {
        //dispatch({ type: SET_TOTAL });
        try{
            const res = await axios.get('/api/shopping-cart');

            dispatch({
                type: SET_TOTAL,
                payload: res.data
            }); //all the products in stock
        } catch (err) {
            dispatch({
                type: PRODUCT_ERROR,
                payload: err.response.msg
            });
        }
    };

    //Update product
    const updateProduct = async product => {


        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try{
            const res = await axios.put(`/api/shopping-cart/${product._id}`, product, config);

            dispatch({ type: UPDATE_PRODUCT, payload: res.data });
        } catch (err) {
            dispatch({
                type: PRODUCT_ERROR,
                payload: err.response.msg
            });
        }
    };

    return (
        <CartContext.Provider
            value={{
                products: state.products,
                current: state.current,
                cartTotal: state.cartTotal,
                error: state.error,
                addProduct,
                deleteProduct,
                setCurrent,
                clearCurrent,
                updateProduct,
                getProducts,
                clearProducts,
                setTotal
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartState;




