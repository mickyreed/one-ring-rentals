/**
 * Last Minutes Deals
 *
 * Last Minute Deals class component for home page
 *
 * FILE NAME:   LastMinuteDeals.js
 * Location:    /src/components
 * Created:     13/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * create a Last Minute Deals component needs the following: COMPLETE 13/10/24
 * Column suits 1/3 wide Title is centred COMPLETE 13/10/24
 * TODO: Add double underline
 * TODO: import 4 Deal cards into 1 columns (cards are 2 columns)
 * under this is a rectangular button "MORE DEALS" rounded corners border white text on black background COMPLETE 13/10/24
 * TODO: Deal cards (will be another component props for Availability, Title, Location, image, articleLink
 *
 * REFERENCES:
 */
import React from 'react';
import 'bulma/css/bulma.css';


const LastMinuteDeals = () => {
    return (
        <div>
            <column className="column mt-0 pt-0">
                <h3 className="title is-3 has-text-black mt-6 mb-6 pt-0">Last minute deals</h3>

                {/*add dividing lines here 2 bars*/}
                <div className="double-underline mb-6 has-text-center"></div>

                <ul className="latest-news has-text-left">
                    <li className="columns ">
                        <column className="image column is-half">
                            <a href="blog-detail.html"></a>
                            <img alt="" src="http://placehold.it/100x100"/>
                        </column>
                        <column className="column is-half">
                            <div className="is-size-7 mb-0 pr-2 ">
                                <div><i className="fa fa-calendar pr-2"></i>Available Now</div>
                            </div>

                            <h4 className="has-text-black is-size-6 mb-0">
                                <a href="blog-detail.html">Private Beach</a>
                                <p>Lossarnach, Eriado</p>
                            </h4>
                        </column>
                    </li>
                    <li className="columns">
                        <column className="image column is-half">
                            <a href="blog-detail.html"></a>
                            <img alt="" src="http://placehold.it/100x100"/>
                        </column>
                        <column className="column is-half">
                            <div className="is-size-7 mb-0 pr-2">
                                <div>
                                    <i className="fa fa-calendar pr-2"></i>Available on 24 July
                                </div>
                            </div>

                            <h4 className="has-text-black is-size-6 mb-0">
                                <a href="blog-detail.html">Mountain views</a>
                                <p>Hyarnustar, Rhovanion</p>
                            </h4>
                        </column>
                    </li>
                    <li className="columns">
                        <column className="image column is-half">
                            <a href="blog-detail.html"></a>
                            <img alt="" src="http://placehold.it/100x100"/>
                        </column>
                        <column className="column is-half">
                            <div className="is-size-7 mb-0 pr-2">
                                <div><i className="fa fa-calendar pr-2"></i>Available 5 July</div>
                            </div>

                            <h4 className="has-text-black is-size-6 mb-0">
                                <a href="blog-detail.html">Heart of the village</a>
                                <p>Minhiriath, Eriador</p>
                            </h4>
                        </column>
                    </li>
                    <li className="columns">
                        <column className="image column is-half">
                            <a href="blog-detail.html"></a>
                            <img alt="" src="http://placehold.it/100x100"/>
                        </column>
                        <column className="column is-half">
                            <div className="is-size-7 mb-0 pr-2">
                                <div><i className="fa fa-calendar pr-2"></i>Available 6 July</div>
                            </div>

                            <h4 className="has-text-black is-size-6 mb-0">
                                <a href="blog-detail.html">The city life</a>
                                <p>West Beleriand, Mordor</p>
                            </h4>
                        </column>
                    </li>
                </ul>
                <p className="center">
                    <a className="button is-black mt-6 mb-6" href="#">More deals</a>
                </p>
            </column>
        </div>
    );
};
export default LastMinuteDeals;