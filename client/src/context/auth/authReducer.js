import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from "../types";

export default (state, action) => {
    switch(action.type){
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload,
                isAdmin: action.payload.admin
            };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token); //token (cookie, well kind of)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isAdmin: action.payload.admin,
                loading: false
            };

        case AUTH_ERROR: //we handle both cases exactly the same way
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT:
            localStorage.removeItem('token'); //remove the token if failed
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null,
                error: action.payload //that already sent in dispatch
            };
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null
            };
        default:
            return state;
    }
}