/**
 * Content
 *
 * Content class component for home page
 *
 * FILE NAME:   Content.js
 * Location:    /src/components
 * Created:     12/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * create a Content component needs the following:
 * Column 2/3 wide large padding on left Content Centered COMPLETE 12/10/24
 * Column 1/3 wide large padding on right Content centered COMPLETE 12/10/24
 * ADD Hard Coded featured property, deals, regions, activity & recent articles COMPLETE 12/10/24
 * TODO: Change to COMPONENTS for hardcoded featured property, deals, regions, activity & recent articles
 * TODO: Continue to adjust styles and classNames to suit react bulma
 *
 */
import React from 'react';
import 'bulma/css/bulma.css';
import FeaturedProperties from "./FeaturedProperties";
import PopularRegions from "./PopularRegions";
import RecentArticles from "./RecentArticles";


const Content = () => {
    return (
        <div className="content has-background-white ">
            <div className="container ">
                <div className="columns">

                    {/*// <!-- BEGIN MAIN CONTENT -->*/}
                    <div className="column is-two-thirds">

                        {/*// <!-- BEGIN FEATURED PROPERTIES -->*/}
                        <FeaturedProperties></FeaturedProperties>
                        {/*// <!-- END FEATURED PROPERTIES -->*/}

                        {/*// <!-- BEGIN POPULAR REGIONS -->*/}
                        <PopularRegions></PopularRegions>
                        {/*// <!-- END POPULAR REGIONS -->*/}

                        {/*// <!-- BEGIN RECENT ARTICLES -->*/}
                        <RecentArticles></RecentArticles>
                        {/*// <!-- END RECENT ARTICLES -->*/}
                    </div>
                    {/*// <!-- END MAIN CONTENT -->*/}

                    {/*// <!-- BEGIN SIDEBAR -->*/}
                    <div className="sidebar column is-one-third">

                        {/*// <!-- BEGIN SIDEBAR ABOUT -->*/}
                        <column className="column">
                            <h3 className="title is-3 has-text-black">Last minute deals</h3>

                            {/*add dividing lines here 2 bars*/}

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
                                <a className="button is-primary" href="#">More deals</a>
                            </p>
                        </column>
                        {/*// <!-- END SIDEBAR ABOUT -->*/}

                        {/*// <!-- BEGIN SIDEBAR ACTIVITY -->*/}
                        <column className="column ml-0 mr-0 pl-0 pr-0">
                            <h3 className="title is-3 has-text-black">Activity</h3>

                            {/*add dividing lines here 2 bars*/}

                            <ul className="activity ml-0 mr-0 pl-0 pr-0 ">
                                <li className="columns">
                                    <column className="column is-half">
                                        <a href="#"
                                        ><img className="has-radius-rounded" src="http://placehold.it/70x70" alt=""
                                        /></a>
                                    </column>

                                    <column className="info column is-half has-text-left">
                                        <h6 className="has-text-black is-size-7 mb-0">
                                            Sam Minnée reviewed
                                            <a href="#"> The House With No Windows</a>
                                        </h6>
                                        <p className="is-size-7 mb-2">
                                            Awesome solitary confinement, mate. Spot on. Sweet as.
                                        </p>
                                        <h6 className="has-text-black is-size-7 mb-1">Just now</h6>
                                    </column>
                                </li>
                                <li className="columns is-flex">
                                    <column className="column is-half">
                                        <a href="#"
                                        ><img className="has-radius-rounded" src="http://placehold.it/70x70" alt=""
                                        /></a>
                                    </column>
                                    <column className="column is-half has-text-left">
                                        <div className="info is-align-items-flex-end">
                                            <h6 className="has-text-black is-size-7 mb-0">
                                                Ingo Schoomer asked a question about
                                                <a href="#"> The Mistake by the Lake</a>
                                            </h6>
                                            <p className="mb-2 is-size-7">Has this house been unit tested?</p>
                                            <h6 className="has-text-black is-size-7 mb-0">37 minutes ago</h6>
                                        </div>
                                    </column>
                                </li>
                            </ul>
                        </column>
                        {/*// <!-- END SIDEBAR ACTIVITY -->*/}

                    </div>
                    {/*// <!-- END SIDEBAR -->*/}
                </div>
            </div>
        </div>
    );
};
export default Content;

