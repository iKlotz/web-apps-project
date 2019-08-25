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
    CLEAR_FILTER,
    PRODUCT_ERROR,
    CLEAR_PRODUCTS
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_PRODUCT_AND_SET_CURRENT: //and set current
            return{
                ...state, //state is immutable
                current: action.payload,
                loading: false
            };
        case GET_PRODUCTS:
            return{
                ...state, //state is immutable
                products: action.payload,
                loading: false
            };
        case ADD_PRODUCT:
            return {
                ...state,
                products: [action.payload, ...state.products],
                loading: false
            };
        case ADD_PRODUCT_TO_CART:
            return {
                ...state,
                cart: [action.payload, ...state.cart],
                loading: false
            };
        case UPDATE_PRODUCT:
            return{
                ...state,
                products: state.products.map(product =>
                    product._id === action.payload._id ? action.payload : product),
                loading: false
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                //filter takes in a function, we filter OUT given products
                products: state.products.filter(
                    product => product._id !== action.payload
                ),
                loading: false
            };
        case CLEAR_PRODUCTS:
            return{
                ...state,
                products: null,
                filtered: null,
                current: null
            };
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            };
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            };
        case FILTER_PRODUCTS:
            return{
                ...state,
                filtered: state.products.filter(product => {
                    const regex = new RegExp(`${action.payload}`, 'gi'); //g-global i-case insensitive
                    return product.model.match(regex) || product.brand.match(regex) || product.type.match(regex);
                })
            };
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            };
        case PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload //which is an error message
            };

        default:
            return state;
    }
}