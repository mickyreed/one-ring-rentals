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
 * create a reusable top bar component for the use on all pages COMPLETE
 *  TODO: add down CHEVRON to rh side of dropdown
 *  TODO: add little symbols on letters as per original dropdown
 *  TODO: remove Languages and just make this English
 *  TODO: pass in props for Languages
 *
 */

import React from 'react';

const TopBar = () => {
    return (
        <div id="top-bar" className="has-background-light is-flex  py-2 pr-2 pl-2">
            <div className="container">
                <div className="columns is-mobile is-justify-content-flex-end">
                    <div className="column is-narrow">
                        <ul id="top-buttons" className="is-flex is-align-items-center">
                            <li className="mr-4">
                                <a href="#"><i className="fa fa-sign-in"></i> Login</a>
                            </li>
                            <li className="mr-4">
                                <a href="#"
                                ><i className="fa fa-pencil-square-o"></i> Register</a
                                >
                            </li>
                            <li className="mr-4 ml-4"><span>|</span></li>
                            <li className="mr-4">
                                <div className="dropdown is-centered is-hoverable">
                                    <div className="dropdown-trigger">
                                        <span className="is-flex is-align-items-center">
                                            <i className="fa fa-globe ml-4 mr-2"></i>Language
                                        </span>
                                    </div>
                                    <div className="dropdown-menu pr-6" id="dropdown-menu"  role="menu">
                                        <div className="dropdown-content has-background-white">
                                            <a href="#" className="dropdown-item has-background-white has-text-black">English</a>
                                            <a href="#" className="dropdown-item has-background-white has-text-black">Deutsch</a>
                                            <a href="#" className="dropdown-item has-background-white has-text-black">Espanol</a>
                                            <a href="#" className="dropdown-item has-background-white has-text-black">Francais</a>
                                            <a href="#" className="dropdown-item has-background-white has-text-black">Portugues</a>
                                        </div>
                                    </div>
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