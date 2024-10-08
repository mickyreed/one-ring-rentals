/**
 * Top Bar
 *
 * TopBar class component for use across all Pages
 *
 * FILE NAME:   TopBar.js
 * Location:    /src/components
 * Created:     8/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * TODO: create a reusable top bar component for the use on all pages
 *
 *
 */

import React from 'react';

const TopBar = () => {
    return (
        <div id="top-bar">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <ul id="top-buttons">
                            <li>
                                <a href="#"><i className="fa fa-sign-in"></i> Login</a>
                            </li>
                            <li>
                                <a href="#"
                                ><i className="fa fa-pencil-square-o"></i> Register</a
                                >
                            </li>
                            <li className="divider"></li>
                            <li>
                                <div className="language-switcher">
                                    <span><i className="fa fa-globe"></i> English</span>
                                    <ul>
                                        <li><a href="#">Deutsch</a></li>
                                        <li><a href="#">Espa&ntilde;ol</a></li>
                                        <li><a href="#">Fran&ccedil;ais</a></li>
                                        <li><a href="#">Portugu&ecirc;s</a></li>
                                    </ul>
                                </div>
                            </li>

                                {/*<!-- BOOTSTRAP SEARCH BEGINS*/}

                                {/*  <li>*/}
                                {/*  <form id="site-search">*/}
                                {/*      <span><i class="fa fa-search"></i></span>*/}
                                {/*      <input type="text" name="q" placeholder="Search">*/}
                                {/*  </form>	*/}
                                {/*  </li> */}

                                {/*  BOOTSTRAP SEARCH ENDS -->*/}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;