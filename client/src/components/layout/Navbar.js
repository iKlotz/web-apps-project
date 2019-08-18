import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../products/SearchBar';
import {Link} from 'react-router-dom';

const Navbar = ({title, icon}) => {
    return (
        <div className='navbar bg-primary'>
            <h1>
                <Link to='/'>
                    <i className={icon}/> {title}
                </Link>
            </h1>
            <ul>
                <li>
                    <Link to='/'> Home </Link>
                </li>
                <li>
                    <Link to='/about'> About </Link>
                </li>
                <li>
                    <Link to='/about'> New </Link>
                </li>
                <li>
                    <Link to='/store'> Store </Link>
                </li>
                <li>
                    <i className="fas fa-user-circle"/>
                    <Link to='/Register'> Register </Link>
                </li>
                <li>
                    {/*<i className="fas fa-user-circle"/>*/}
                    <Link to='/login'> Login </Link>
                </li>
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
    icon: "fas fa-guitar"
};


export default Navbar;