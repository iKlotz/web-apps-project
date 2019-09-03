import {
    GET_PRODUCTS,
    ADD_PRODUCT,
    DELETE_PRODUCT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_PRODUCT,
    PRODUCT_ERROR,
    CLEAR_PRODUCTS,
    SET_TOTAL
} from '../types';

export default (state, action) => {
    switch (action.type) {
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

        case SET_TOTAL:
            return {
                ...state,
                //products: action.payload,
                cartTotal: action.payload.reduce((acc, currVal) =>
                    acc + (currVal.price * currVal.quantity), 0)};

        case PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload //which is an error message
            };

        default:
            return state;
    }
}