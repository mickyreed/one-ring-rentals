/**
 * Advanced Search
 *
 * Advanced Search class component for home page
 *
 * FILE NAME:   AdvancedSearch.js
 * Location:    /src/components/homepage
 * Created:     19/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 *
 * REFERENCES:
 * https://bulma.io/documentation/form/textarea/
 *
 */
import React from "react";
// import 'bulma/css/bulma.css';

const AdvancedSearch = () => {
    return (
        <div id="home-advanced-search" className="open has-background-warning pt-6 pb-6">
            <div id="opensearch"></div>
            <div className="container px-6">
                <div className="columns ">
                    <div className="column is-12 is-warning mx-0 px-0">
                        <form>
                            <div className="columns">
                                {/* Arrive On */}
                                <div className="column is-3 ">
                                    <div className="control has-icons-right">
                                        <input
                                            type="text"
                                            className="input"
                                            placeholder="Arrive on..."
                                            data-date-format="DD/MM/YYYY"
                                            id="date-arrived"
                                        />
                                        <span className="icon is-small is-right">
                                                    <i className="fa fa-calendar-alt"></i></span>
                                    </div>
                                </div>

                                {/* Stay */}
                                <div className="column is-2">
                                    <div className="control">
                                        <div className="select is-fullwidth">
                                            <select id="search_status" name="search_status">
                                                <option value="">Stay...</option>
                                                <option value="1">1 Night</option>
                                                <option value="2">2 Nights</option>
                                                <option value="3">3 Nights</option>
                                                <option value="4">4 Nights</option>
                                                <option value="5">5 Nights</option>
                                                <option value="6">6 Nights</option>
                                                <option value="7">7 Nights</option>
                                                <option value="8">8 Nights</option>
                                                <option value="9">9 Nights</option>
                                                <option value="10">10 Nights</option>
                                                <option value="11">11 Nights</option>
                                                <option value="12">12 Nights</option>
                                                <option value="13">13 Nights</option>
                                                <option value="14">14 Nights</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Bedrooms */}
                                <div className="column is-2">
                                    <div className="control">
                                        <div className="select is-fullwidth">
                                            <select id="search_bedrooms" name="search_bedrooms">
                                                <option value="">Bedrooms</option>
                                                <option value="0">0</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="5plus">5+</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="column is-4">
                                    <div className="control">
                                        <input
                                            type="text"
                                            className="input"
                                            name="location"
                                            placeholder="City, State, Country, etc..."
                                            id="location"
                                        />
                                    </div>
                                </div>

                                {/* Search Button */}
                                <div className="column is-1">
                                    <button type="submit" className="button is-fullwidth is-primary">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvancedSearch;