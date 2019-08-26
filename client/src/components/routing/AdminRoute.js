import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const AdminRoute = ({component: Component, ...rest}) => {
    const authContext = useContext(AuthContext);
    const {isAdmin, isAuthenticated, loading} = authContext;

    return (
        <Route {...rest} render={props => (!isAdmin && !loading) ? (
            <Redirect to='/login'/>
        ) : (
            <Component {...props}/> //if user isAuthenticated just load the component with all its props.
        )}/>
    );
};

export default AdminRoute;