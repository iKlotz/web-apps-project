import React, {useContext, Fragment} from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../products/SearchBar';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({title, icon}) => {
    const authContext = useContext(AuthContext);

    const { isAuthenticated, logout, user } = authContext;

    const onLogout = () => {
        logout();
    };


    const authLinks = (
        <Fragment>
            <li>Hello {user && user.firstname}</li>
            <li>
                <a onClick={onLogout} href="#!">
                    <i className="fas fa-sign-out-alt"/>
                    <span className="hide-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <ul>
                <li>
                    <Link to='/'> Home </Link>
                </li>
                <li>
                    <Link to='/store'> Store </Link>
                </li>
                <li>
                    <i className="fas fa-user-circle"/>
                    <Link to='/register'> Register </Link>
                </li>
                <li>
                    {/*<i className="fas fa-user-circle"/>*/}
                    <Link to='/login'> Login </Link>
                </li>
            </ul>

        </Fragment>
    );

    return (
        <div className='navbar bg-primary'>
            <h1>
                <Link to='/'>
                    <i className={icon}/> {title}
                </Link>
            </h1>
            <ul>
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </div>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: 'Guitar World',
    // icon: "fas fa-skull-crossbones"
    icon: "fas fa-fire-alt"
};


export default Navbar;