/**
 * Search Bar
 *
 * SearchBar class component for Home Page
 *
 * FILE NAME:   SearchBar.js
 * Location:    /src/components
 * Created:     8/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * TODO: create a reusable search bar component for the main page
 *
 *
 */

import React from 'react';

const SearchBar = () => {
    return (
        <div id="sb-search" className="sb-search">
            <form>
                <input
                    className="sb-search-input"
                    placeholder="Search..."
                    type="text"
                    value=""
                    name="search"
                    id="search"
                />
                <input className="sb-search-submit" type="submit" value="" />
                <i className="fa fa-search sb-icon-search"></i>
            </form>
        </div>
    );
};

export default SearchBar;