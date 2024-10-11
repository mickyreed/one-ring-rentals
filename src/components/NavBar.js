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

import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import SearchBar from "./SearchBar";

const NavBar = () => {

    const [isActive, setIsActive] = useState(false);

    const toggleBurgerMenu = () => {
        setIsActive(!isActive);

    };

    return (

        // ORIGINAL CODE USES public/css styling
        // <nav className="navbar"
        //      role="navigation"
        //      aria-label="main navigation">
        //     <button id="nav-mobile-btn">
        //         <i className="fa fa-bars"></i>
        //     </button>
        //
        //     <ul className="nav navbar-nav">
        //         <li><a href="index.html">Find a Rental</a></li>
        //         <li><a href="#">List your rental</a></li>
        //         <li><a href="#">Travel Guides</a></li>
        //         <li><a href="regions.html">Regions</a></li>
        //         <li><a href="news.html">News</a></li>
        //         <li><a href="contact.html">Contact</a></li>
        //     </ul>
        // </nav>

        <nav className="navbar is-light is-display-flex" role="navigation" aria-label="main navigation">
            <div className="container is-display-flex is-align-items-center mr-3 ml-3 pr-6 pl-6"
                 style={{justifyContent: "space-between", padding: "0 1rem"}}>
                <div className="navbar-brand">
                    <div className="nav-logo is-display-flex">
                        <a href="/home"
                        ><img src="/images/logo.png" alt="One Ring Rentals"
                        /></a>
                    </div>
                </div>

                <div id="navMenu" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                    <div className="navbar-end">
                        <a className="navbar-item" href="/home">Find a Rental</a>
                        <a className="navbar-item" href="#">List your rental</a>
                        <a className="navbar-item" href="#">Travel Guides</a>
                        <a className="navbar-item" href="/regions">Regions</a>
                        <a className="navbar-item" href="/news">News</a>
                        <a className="navbar-item" href="/contact">Contact</a>
                        <div id="search-bar" className="navbar-item">
                            <SearchBar></SearchBar>
                        </div>
                    </div>
                </div>

                {/*Burger Menu*/}
                <a role="button" className={`navbar-burger ${isActive ? 'is-active' : ''}`}
                   aria-label="menu" aria-expanded="false" data-target="navMenu"
                   onClick={toggleBurgerMenu} style={{marginLeft: "auto"}}>
                    <div className="box is-align-content-top p-auto">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </div>
                </a>
            </div>

        </nav>
    );
};

export default NavBar;