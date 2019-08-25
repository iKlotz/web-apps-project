import React, {useReducer} from 'react';
import ProductContext from './productContext';
import productReducer from './productReducer';
import axios from 'axios';

import {
    GET_PRODUCT_AND_SET_CURRENT,
    GET_PRODUCTS,
    ADD_PRODUCT,
    ADD_PRODUCT_TO_CART,
    DELETE_PRODUCT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_PRODUCT,
    FILTER_PRODUCTS,
    CLEAR_PRODUCTS,
    CLEAR_FILTER, PRODUCT_ERROR
} from '../types';

const ProductState = props => {
    const initialState = {
        products: null,
        current: null,
        filtered: null,
        error: null
    };

    const [state, dispatch] = useReducer(productReducer, initialState);

    //Get Products
    const getProducts = async () => {
        try{
            const res = await axios.get('/api/products');

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

    const getProductAndSetCurrent = async id => {

        try{
            const res = await axios.get(`/api/products/${id}`);

            dispatch({ type: GET_PRODUCT_AND_SET_CURRENT, payload: res.data });
        } catch (err) {
            console.log(err);
            dispatch({
                type: PRODUCT_ERROR,
                payload: err.response.msg,
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
            const res = await axios.post('/api/products', product, config);

            dispatch({ type: ADD_PRODUCT, payload: res.data }); //new added product to our database
        } catch (err) {
            dispatch({
                type: PRODUCT_ERROR,
                payload: err.response.msg
            });
        }
    };

    // const addProductToCart = async product => {
    //     const config = {
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     };
    //
    //     try{
    //         const res = await axios.post('/api/shopping-cart', product, config);
    //
    //         dispatch({ type: ADD_PRODUCT_TO_CART, payload: res.data }); //new added product to cart
    //     } catch (err) {
    //         dispatch({
    //             type: PRODUCT_ERROR,
    //             payload: err.response.msg
    //         });
    //     }
    // };


    //Delete product
    const deleteProduct = async id => {

        try{
            await axios.delete(`/api/products/${id}`);

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

    //Update product
    const updateProduct = async product => {


        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try{
            const res = await axios.put(`/api/products/${product._id}`, product, config);

            dispatch({ type: UPDATE_PRODUCT, payload: res.data });
        } catch (err) {
            dispatch({
                type: PRODUCT_ERROR,
                payload: err.response.msg
            });
        }
    };

    //Filter
    const filterProducts = text => {
        dispatch({ type: FILTER_PRODUCTS, payload: text });
    };

    //Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER }); //set back to default which is null
    };



    return (
        <ProductContext.Provider
            value={{
                products: state.products,
                current: state.current,
                filtered: state.filtered,
                error: state.error,
                cart: state.cart,
                addProduct,
                deleteProduct,
                setCurrent,
                clearCurrent,
                updateProduct,
                filterProducts,
                clearFilter,
                getProductAndSetCurrent,
                getProducts,
                clearProducts
            }}
        >
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductState;




