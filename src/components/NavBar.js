/**
 * Nav Bar
 *
 * NavBar class component for use across all Pages
 *
 * FILE NAME:   NavBar.js
 * Location:    /src/components
 * Created:     8/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * TODO: create a reusable Nav bar component for the use on all pages
 *
 *
 */

import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar">
            <button id="nav-mobile-btn">
                <i className="fa fa-bars"></i>
            </button>

            <ul className="nav navbar-nav">
                <li><a href="index.html">Find a Rental</a></li>
                <li><a href="#">List your rental</a></li>
                <li><a href="#">Travel Guides</a></li>
                <li><a href="regions.html">Regions</a></li>
                <li><a href="news.html">News</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;