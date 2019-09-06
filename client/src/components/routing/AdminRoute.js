import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const AdminRoute = ({component: Component, ...rest}) => {
    const authContext = useContext(AuthContext);
    const {isAdmin, loading} = authContext;

    return (
        <Route {...rest} render={props => (!loading && !isAdmin) ? (
            <Redirect to='/sorrybro'/>
        ) : (
            <Component {...props}/> //if user isAuthenticated just load the component with all its props.
        )}/>
    );
};

export default AdminRoute;