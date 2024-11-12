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
 * REFERENCES:
 * dropdowns    - https://dev.to/eclecticcoding/bulma-navbar-toogle-with-react-hooks-18ek
 *              - https://bulma.io/documentation/components/dropdown/#
 *              - https://www.freecodecamp.org/news/build-a-dynamic-dropdown-component/
 *              - https://codesandbox.io/p/sandbox/react-context-dropdown-example-jt1fs?file=%2Fsrc%2FApp.tsx%3A14%2C34
 */

import React, {useState} from 'react';
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TopBar = ({ languages }) => {

    const [isDropDownActive, setIsDropDownActive] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // Default is first language

    //Toggle dropdown for mobile
    const toggleDropDown = () => {
        setIsDropDownActive(!isDropDownActive);
    };

    // Handle language selection
    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language); // Update selected language
        setIsDropDownActive(false); // Close the dropdown after selection
    };

    return (
        <div id="top-bar" className="has-background-light is-flex  py-2 pr-2 pl-2">
            <div className="container ">
                <div className="columns is-mobile is-justify-content-flex-end">
                    <div className="column is-narrow">
                        <ul id="top-buttons" className="is-flex is-align-items-center">
                            <li className="mr-4">
                                <a href="/index"><i className="fa fa-sign-in"></i> Login</a>
                            </li>
                            <li className="mr-4">
                                <a href="/index"
                                ><i className="fa fa-pencil-square-o"></i> Register</a
                                >
                            </li>
                            <li className="mr-4 ml-4"><span>|</span></li>
                            <li className="mr-4">
                                <div className={`dropdown is-centered is-hoverable ${isDropDownActive ? 'is-active' : ''}`}
                                     onMouseEnter={() => setIsDropDownActive(true)} // For desktop hover
                                     onMouseLeave={() => setIsDropDownActive(false)} // For desktop hover
                                     onClick={toggleDropDown} // For mobile click/tap
                                    >
                                    <div className="dropdown-trigger control">
                                        <span className="is-flex is-align-items-center">
                                            <i className="fa fa-globe ml-4 mr-2 "></i>{selectedLanguage}
                                            <i className="faChevronDown pl-2 "><FontAwesomeIcon icon={faChevronDown}/></i>
                                        </span>
                                    </div>
                                    <div className="dropdown-menu pr-6" id="dropdown-menu"  role="menu">
                                        <div className="dropdown-content has-background-white">
                                            {languages.map((language, index) => (
                                                <a
                                                    key={index}
                                                    href="/index"
                                                    className="dropdown-item has-background-white has-text-black"
                                                    onClick={() => handleLanguageSelect(language)}
                                                >
                                                    {language}
                                                </a>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;