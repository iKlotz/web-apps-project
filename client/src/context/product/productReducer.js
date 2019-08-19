import {
    GET_PRODUCT,
    ADD_PRODUCT,
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
        case GET_PRODUCT:
            return{
                ...state, //state is immutable
                products: action.payload,
                loading: false
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
                loading: false
            };
        case UPDATE_PRODUCT:
            return{
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload.id ? action.payload : product),
                loading: false
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                //filter takes in a function, we filter OUT given products
                products: state.products.filter(
                    contact => contact.id !== action.payload
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
                filtered: state.products.filter(contact => {
                    const regex = new RegExp(`${action.payload}`, 'gi'); //g-global i-case insensitive
                    return contact.name.match(regex) || contact.brand.match(regex);
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