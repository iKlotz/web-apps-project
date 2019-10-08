import React, {useContext, useEffect} from 'react';
import AdminContext from '../../context/admin/adminContext';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';


const Users = () => {
    const adminContext = useContext(AdminContext);
    const {users, filtered, getUsers, loading} = adminContext;

    useEffect(() => {
        getUsers();
        // eslint-disable-next-line
    }, []);

    if (users !== null && users.length === 0 && !loading) {
        return <h4> No customers </h4>
    }

    return (
        <div className='container'>
            {users !== null && !loading ? (
                <div className='row'>
                    {filtered !== null
                        ? filtered.map(user => (
                            <div key={user._id} className='col-md-4'>
                                <UserItem key={user._id} user={user}/>
                            </div>
                        ))
                        : users.map(user => ( //map returns an array
                            <div key={user._id} className='col-md-4'>
                                <UserItem key={user._id} user={user}/>
                            </div>
                        ))}
                </div>) : <Spinner/>}
        </div>
    );
};

export default Users;
