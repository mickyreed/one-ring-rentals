/**
 * Header
 *
 * Header class component for all pages
 *
 * FILE NAME:   Header.js
 * Location:    /src/components
 *
 * TODO: create a reusable header component needs logo and nav links
 * TODO: there is actually a login/register/language header component above this but ill do this later
 *
 *
 */

import React from 'react';

const Header = () => {
    return (
        <header className="navbar">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src="https://placehold.co/30" alt="One Ring Rentals Logo" />
                </a>
            </div>
            <div className="navbar-menu">
                <a className="navbar-item" href="/">Find a Rental</a>
                <a className="navbar-item" href="#">List your rental</a>
                <a className="navbar-item" href="#">Travel Guides</a>
                <a className="navbar-item" href="#">Regions</a>
                <a className="navbar-item" href="#">News</a>
                <a className="navbar-item" href="#">Contact</a>
            </div>
        </header>
    );
};

export default Header;