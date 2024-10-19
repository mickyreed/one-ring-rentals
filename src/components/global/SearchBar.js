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
 * Create a reusable search bar component for the main page COMPLETE
 *
 * REFERENCE:
 *  - toggle    - https://dev.to/eclecticcoding/bulma-navbar-toogle-with-react-hooks-18ek
 *              - https://github.com/eclectic-coding/article_react-bulma-navbar
 *              - https://www.freecodecamp.org/news/react-router-tutorial/
 *
 *
 */

import React, { useState } from 'react';

const SearchBar = () => {

    // State for search bar visibility
    const [isOpen, setIsOpen] = useState(false);

    // toggle search bar to be open or closed
    const toggleSearch = () => {
        setIsOpen(prevState => !prevState);
    }

    return (
        <div id="sb-search" className="sb-search">
            <form className={`search-form ${isOpen ? 'is-active' : ''}`}>
                {isOpen && (
                    <input
                        className="sb-search-input"
                        placeholder="Search..."
                        type="text"
                        value=""
                        name="search"
                        id="search"
                    />
                )}
                <i
                    className="fa fa-search sb-icon-search"
                    onClick={toggleSearch}
                    style={{cursor: 'pointer'}}
                ></i>
            </form>
        </div>
    );
};

export default SearchBar;