import React from 'react';

const SearchBar = () => {
    return (
        <form className="search">
            <div className="search-box">
                <input className="search-txt" type="text" placeholder="Type to search"/>
                <a className="search-btn">
                    <i className="fas fa-search"></i>
                </a>
            </div>
        </form>
    );
}

export default SearchBar;