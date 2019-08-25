import React, {useContext, useEffect, Fragment} from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../products/SearchBar';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ProductContext from '../../context/product/productContext';


const Navbar = ({title, icon}) => {
    const authContext = useContext(AuthContext);
    const productContext = useContext(ProductContext);

    const {isAuthenticated, logout, user} = authContext;
    const {clearProducts, getProducts} = productContext;

    useEffect(() => {//basically fills in our products array, sending the request to the DB
        getProducts();
        // eslint-disable-next-line
    },[]);

    const onLogout = () => {
        logout();
        clearProducts();
    };


    const authLinks = (
        <Fragment>
            <li>
                <Link to='/'> Home </Link>
            </li>
            <li>
                <Link to='/store'> Store </Link>
            </li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
                <li className='nav-item'>
                    <Link to='/'> Home </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/store'> Store </Link>
                </li>
        </Fragment>
    );

    const guestLinksRight = (
        <Fragment>
            <li className='nav-item'>
            <i className="fas fa-user-circle"/>
            <Link to='/register'> Register </Link>
            </li>
            <li className='nav-item'>
            {/*<i className="fas fa-user-circle"/>*/}
            <Link to='/login'>
                Login
            {/*<button type="button" className="btn btn-outline-dark">Login</button>*/}
            </Link>
            </li>

        </Fragment>
    );

    const authLinksRight = (
        <Fragment>
            <li>Hello {user && user.firstname}</li>
            <li>
                <Link to='/shopping-cart'>
                    <i className="fas fa-shopping-cart"/>
                </Link>
            </li>
            <li>
                <a onClick={onLogout} href="#!">
                    <i className="fas fa-sign-out-alt"/>
                    <span className="hide-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    );

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to='/' className="navbar-brand">
                {/*<i className={icon}/>*/}
                <span>{title}</span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>


            <div className="collapse navbar-collapse my-search-box" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {isAuthenticated ? authLinks : guestLinks}
                </ul>
                <div className="my-search-input">
                    <form className="form-inline search">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                </div>
                <ul className="form-inline my-2 my-lg-0">
                    {isAuthenticated ? authLinksRight : guestLinksRight}
                    {/*{authLinksRight}*/}

                </ul>
            </div>
        </nav>
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