import React, {useReducer} from 'react';
import uuid from 'uuid';
import ProductContext from './productContext';
import productReducer from './productReducer';
import {
    GET_PRODUCT,
    ADD_PRODUCT,
    DELETE_PRODUCT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_PRODUCT,
    FILTER_PRODUCTS,
    CLEAR_PRODUCTS,
    CLEAR_FILTER
} from '../types';

const ProductState = props => {
    const initialState = {
        products: [
            {
                "id": "1",
                "model": "Telecaster",
                "brand": "Fender",
                "specs": "Best guitar ever!",
                "price": "3000",
                "type": "Electric Guitar",
                "pic1": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "pic2": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "pic3": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "user": "5d58228a10ab3d397c7246d5",
                "date": "2019-08-17T16:22:48.157Z",
                "__v": 0
            },
            {
                "id": "2",
                "model": "Stratocaster",
                "brand": "Fender",
                "specs": "Best guitar ever!",
                "price": "3000",
                "type": "Electric Guitar",
                "pic1": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "pic2": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "pic3": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "user": "5d58228a10ab3d397c7246d5",
                "date": "2019-08-17T16:22:48.157Z",
                "__v": 0
            },
            {
                "id": "3",
                "model": "Bazinga",
                "brand": "Fender",
                "specs": "Best guitar ever! Hfdsakjnfdas lajbfdlajbfdsf, fdaljfds, fdsaljbfdalsjfbdalkjfb! akjdfadkfb",
                "price": "3000",
                "type": "Electric Guitar",
                "pic1": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "pic2": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "pic3": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "user": "5d58228a10ab3d397c7246d5",
                "date": "2019-08-17T16:22:48.157Z",
                "__v": 0
            },
            {
                "id": "4",
                "model": "Telecaster",
                "brand": "Fender",
                "specs": "Best guitar ever!",
                "price": "3000",
                "type": "Electric Guitar",
                "pic1": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "pic2": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "pic3": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "user": "5d58228a10ab3d397c7246d5",
                "date": "2019-08-17T16:22:48.157Z",
                "__v": 0
            },
            {
                "id": "5",
                "model": "Telecaster",
                "brand": "Fender",
                "specs": "Best guitar ever!",
                "price": "3000",
                "type": "Electric Guitar",
                "pic1": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "pic2": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "pic3": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "user": "5d58228a10ab3d397c7246d5",
                "date": "2019-08-17T16:22:48.157Z",
                "__v": 0
            },
            {
                "id": "6",
                "model": "Telecaster",
                "brand": "Fender",
                "specs": "Best guitar ever!",
                "price": "3000",
                "type": "Electric Guitar",
                "pic1": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "pic2": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "pic3": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "user": "5d58228a10ab3d397c7246d5",
                "date": "2019-08-17T16:22:48.157Z",
                "__v": 0
            },
            {
                "id": "7",
                "model": "Telecaster",
                "brand": "Fender",
                "specs": "Best guitar ever!",
                "price": "3000",
                "type": "Electric Guitar",
                "pic1": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "pic2": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "pic3": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "user": "5d58228a10ab3d397c7246d5",
                "date": "2019-08-17T16:22:48.157Z",
                "__v": 0
            },
            {
                "id": "8",
                "model": "Telecaster",
                "brand": "Fender",
                "specs": "Best guitar ever!",
                "price": "3000",
                "type": "Electric Guitar",
                "pic1": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "pic2": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "pic3": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "user": "5d58228a10ab3d397c7246d5",
                "date": "2019-08-17T16:22:48.157Z",
                "__v": 0
            },
            {
                "id": "9",
                "model": "Telecaster",
                "brand": "Fender",
                "specs": "Best guitar ever!",
                "price": "3000",
                "type": "Electric Guitar",
                "pic1": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "pic2": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "pic3": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "user": "5d58228a10ab3d397c7246d5",
                "date": "2019-08-17T16:22:48.157Z",
                "__v": 0
            },
        ],
        current: null,
        filtered: null
    };

    const [state, dispatch] = useReducer(productReducer, initialState);

    //Add product
    const addProduct = product => {
        product.id = uuid.v4();
        dispatch({
            type: ADD_PRODUCT,
            payload: product
        });
    };

    //Delete product
    const deleteProduct = id => {
        dispatch({ type: DELETE_PRODUCT, payload: id });
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
    const updateProduct = product => {
        dispatch({ type: UPDATE_PRODUCT, payload: product });
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
                addProduct,
                deleteProduct,
                setCurrent,
                clearCurrent,
                updateProduct,
                filterProducts,
                clearFilter
            }}
        >
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductState;




