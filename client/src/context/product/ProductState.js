import React, { useReducer } from 'react';
import uuid from 'uuid';
import ProductContext from './productContext';
import productReducer from './productReducer';
import{
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
                "name": "Telecaster",
                "brand": "Fender",
                "specs": "Best guitar ever!",
                "price": "$3000",
                "type": "Guitar",
                "pic1": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "user": "5d58228a10ab3d397c7246d5",
                "date": "2019-08-17T16:22:48.157Z",
                "__v": 0
            },
            {
                "id": "2",
                "name": "Telecaster",
                "brand": "Fender",
                "specs": "Best guitar ever!",
                "price": "$3000",
                "type": "Guitar",
                "pic1": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "user": "5d58228a10ab3d397c7246d5",
                "date": "2019-08-17T16:22:48.157Z",
                "__v": 0
            },
            {
                "id": "3",
                "name": "Telecaster",
                "brand": "Fender",
                "specs": "Best guitar ever!",
                "price": "$3000",
                "type": "Guitar",
                "pic1": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "user": "5d58228a10ab3d397c7246d5",
                "date": "2019-08-17T16:22:48.157Z",
                "__v": 0
            },
            {
                "id": "4",
                "name": "Telecaster",
                "brand": "Fender",
                "specs": "Best guitar ever!",
                "price": "$3000",
                "type": "Guitar",
                "pic1": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "user": "5d58228a10ab3d397c7246d5",
                "date": "2019-08-17T16:22:48.157Z",
                "__v": 0
            },
            {
                "id": "5",
                "name": "Telecaster",
                "brand": "Fender",
                "specs": "Best guitar ever!",
                "price": "$3000",
                "type": "Guitar",
                "pic1": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "user": "5d58228a10ab3d397c7246d5",
                "date": "2019-08-17T16:22:48.157Z",
                "__v": 0
            },
            {
                "id": "6",
                "name": "Telecaster",
                "brand": "Fender",
                "specs": "Best guitar ever!",
                "price": "$3000",
                "type": "Guitar",
                "pic1": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "user": "5d58228a10ab3d397c7246d5",
                "date": "2019-08-17T16:22:48.157Z",
                "__v": 0
            },
            {
                "id": "7",
                "name": "Telecaster",
                "brand": "Fender",
                "specs": "Best guitar ever!",
                "price": "$3000",
                "type": "Guitar",
                "pic1": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "user": "5d58228a10ab3d397c7246d5",
                "date": "2019-08-17T16:22:48.157Z",
                "__v": 0
            },
            {
                "id": "8",
                "name": "Fender Telecaster",
                "brand": "Fender",
                "specs": "Best guitar ever!",
                "price": "$3000",
                "type": "Guitar",
                "pic1": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "user": "5d58228a10ab3d397c7246d5",
                "date": "2019-08-17T16:22:48.157Z",
                "__v": 0
            },
            {
                "id": "9",
                "name": "Telecaster",
                "brand": "Fender",
                "specs": "Best guitar ever!",
                "price": "$3000",
                "type": "Guitar",
                "pic1": "https://d1aeri3ty3izns.cloudfront.net/media/28/280985/1200/preview.jpg",
                "user": "5d58228a10ab3d397c7246d5",
                "date": "2019-08-17T16:22:48.157Z",
                "__v": 0
            }
        ]
    };

    const [state, dispatch] = useReducer(productReducer, initialState);

    //Add product

    //Delete product

    //Set current

    //Update

    //Filter

    return (
        <ProductContext.Provider
            value={{
                products: state.products
            }}
        >
            {props.children}
        </ProductContext.Provider>
    );
};

export default ProductState;




