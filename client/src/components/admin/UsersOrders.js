import React, {useContext, useEffect} from 'react';
import AdminContext from '../../context/admin/adminContext';
import Spinner from '../layout/Spinner';
import UsersOrdersItem from "./UsersOrdersItem";


const UsersOrders = () => {

    const adminContext = useContext(AdminContext);

    const {currentCart, getCurrentCart, loading, setCurrent, getCurrentOrders, orders} = adminContext;

    useEffect(() => {//basically fills in our products array, sending the request to the DB
        const id = window.location.pathname.split("/").pop(); //get id from the URL
        getCurrentCart(id);
        getCurrentOrders(id);
        setCurrent(id);
        // eslint-disable-next-line
    },[]);

    if (orders !== null && orders.length === 0 && !loading) {
        return <h4>               There are no orders for this user.</h4>
    }

    return (
        <div className='container'>
            {orders !== null && !loading ? (
                <div className='row'>
                    {orders.map(item => (
                        <div className='col-md-4'>
                            <UsersOrdersItem key={item._id} item={item}/>
                        </div>
                    ))}
                </div>) : <Spinner/>}
        </div>
    );
};



export default UsersOrders;
