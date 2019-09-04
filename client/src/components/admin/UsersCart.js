import React, {Fragment, useContext, useEffect} from 'react';
import AdminContext from '../../context/admin/adminContext';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Spinner from '../layout/Spinner';
import ProductItem from "../products/ProductItem";
import UsersCartItem from "./UsersCartItem";


const UsersCart = () => {

    const adminContext = useContext(AdminContext);

    const {current, currentCart, getCurrentCart, loading, setCurrent} = adminContext;

    useEffect(() => {//basically fills in our products array, sending the request to the DB
        const id = window.location.pathname.split("/").pop(); //get id from the URL
        getCurrentCart(id);
        setCurrent(id);
        // eslint-disable-next-line
    },[]);

    if (currentCart !== null && currentCart.length === 0 && !loading) {
        return <h4>               Users cart is empty...</h4>
    }

    return (
        <div className='container'>
            {currentCart !== null && !loading ? (
                <div className='row'>
                    <h5></h5>
                    {currentCart.map(item => ( //map returns an array
                            <div className='col-md-4'>
                                <UsersCartItem key={item._id} item={item}/>
                            </div>
                        ))}
                </div>) : <Spinner/>}
        </div>
    );
};



export default UsersCart;
