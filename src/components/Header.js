/**
 * Header
 *
 * Header class component for all pages
 *
 * FILE NAME:   Header.js
 * Location:    /src/components
 * Created:     7/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * TODO: create a reusable header component needs logo and nav links
 * TODO: there is actually a login/register/language header component above this but ill do this later
 *
 *
 */

import React from 'react';
import TopBar from './TopBar';
import NavBar from './NavBar';
import SearchBar from "./SearchBar"

const Header = () => {
    return (
        <header className="header" id="header">
            <TopBar></TopBar>
            <div id="nav-section">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <a href="index.html" className="nav-logo"
                            ><img src="images/logo.png" alt="One Ring Rentals"
                            /></a>
                            <SearchBar></SearchBar>
                            <NavBar></NavBar>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;