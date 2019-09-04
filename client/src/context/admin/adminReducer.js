import {
    GET_PRODUCT_AND_SET_CURRENT,
    GET_USERS,
    ADD_PRODUCT,
    ADD_PRODUCT_TO_CART,
    DELETE_PRODUCT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_PRODUCT,
    FILTER_USERS,
    CLEAR_FILTER,
    USER_ERROR,
    CLEAR_PRODUCTS,
    GET_CURRENT_CART
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case GET_CURRENT_CART: //and set current
            return{
                ...state, //state is immutable
                currentCart: action.payload,
                loading: false
            };
        case GET_USERS:
            return{
                ...state, //state is immutable
                users: action.payload,
                loading: false
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
        case FILTER_USERS:
            return{
                ...state,
                filtered: state.users.filter(user => {
                    const regex = new RegExp(`${action.payload}`, 'gi'); //g-global i-case insensitive
                    return user.firstname.match(regex) || user.lastname.match(regex);
                })
            };
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            };
        case USER_ERROR:
            return {
                ...state,
                error: action.payload //which is an error message
            };

        default:
            return state;
    }
}