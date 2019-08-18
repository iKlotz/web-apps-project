import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../products/SearchBar';
import  { Link } from 'react-router-dom';

const Navbar = ({title, icon}) => {
    return (
        <div className='navbar bg-primary'>
            <h1>
                <i className={icon}/> {title}
            </h1>
            <ul>
                <li>
                    <Link to='/'> Home </Link>
                </li>
                <li>
                    <Link to='/About'> About </Link>
                </li>
                <li>
                    <SearchBar/>
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