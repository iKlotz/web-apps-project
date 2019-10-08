import React, {useContext, useEffect} from 'react';
import AdminContext from '../../context/admin/adminContext';
import Spinner from '../layout/Spinner';
import UsersCartItem from "./UsersCartItem";

const UsersCart = () => {
    const adminContext = useContext(AdminContext);
    const {currentCart, getCurrentCart, loading, setCurrent} = adminContext;
    useEffect(() => {//basically fills in our products array, sending the request to the DB
        const id = window.location.pathname.split("/").pop(); //get id from the URL
        getCurrentCart(id);
        setCurrent(id);
        // eslint-disable-next-line
    }, []);

    if (currentCart !== null && currentCart.length === 0 && !loading) {
        return <h4> Users cart is empty...</h4>
    }

    return (
        <div className='container'>
            {currentCart !== null && !loading ? (
                <div className='row'>
                    {currentCart.map(item => (
                        <div className='col-md-4' key={item._id}>
                            <UsersCartItem item={item}/>
                        </div>
                    ))}
                </div>) : <Spinner/>}
        </div>
    );
};

export default UsersCart;
