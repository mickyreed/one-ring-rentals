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


const Content = () => {
    return (
        <div className="content has-background-white ">
            <div className="container ">
                <div className="columns">

                    {/*// <!-- BEGIN MAIN CONTENT -->*/}
                    <div className="column is-two-thirds">

                        {/*// <!-- BEGIN FEATURED PROPERTIES -->*/}
                        <h2 className="title is-2 has-text-black">Featured Properties</h2>
                        <div className="columns">
                            <div className="column is-one-third">
                                <column className="item">
                                    <div className="image">
                                        <a href="properties-detail.html">
                                            <h4 className="title is-4 has-text-black">Luxury Apartment with great
                                                views</h4>
                                            <span className="location">Upper East Side, New York</span>
                                        </a>
                                        <img src="http://placehold.it/760x670" alt=""/>
                                    </div>
                                    <div className="price">
                                        <span>$950</span>
                                        <p>per night</p>
                                    </div>
                                    <ul className="amenities">
                                        <li><i className="icon-bedrooms"></i> 4</li>
                                        <li><i className="icon-bathrooms"></i> 3</li>
                                    </ul>
                                </column>
                                <column className="item">
                                    <div className="image">
                                        <a href="properties-detail.html">
                                            <h4 className="title is-4 has-text-black">Modern construction with parking
                                                space</h4>
                                            <span className="location">Midtown, New York</span>
                                        </a>
                                        <img src="http://placehold.it/760x670" alt=""/>
                                    </div>
                                    <div className="price">
                                        <span>$85</span>
                                        <p>per night</p>
                                    </div>
                                    <ul className="amenities">
                                        <li><i className="icon-bedrooms"></i> 1</li>
                                        <li><i className="icon-bathrooms"></i> 2</li>
                                    </ul>
                                </column>
                            </div>
                            <div className="column is-one-third">
                                <div className="item">
                                    <div className="image">
                                        <a href="properties-detail.html">
                                            <h4 className="title is-4 has-text-black">Stunning Villa with 5
                                                bedrooms</h4>
                                            <span className="location">Miami Beach, Florida</span>
                                        </a>
                                        <img src="http://placehold.it/760x670" alt=""/>
                                    </div>
                                    <div className="price">
                                        <span>$1,300</span>
                                        <p>per night</p>
                                    </div>
                                    <ul className="amenities">
                                        <li><i className="icon-bedrooms"></i> 5</li>
                                        <li><i className="icon-bathrooms"></i> 2</li>
                                    </ul>
                                </div>
                                <div className="item">
                                    <div className="image">
                                        <a href="properties-detail.html">
                                            <h4 className="title is-4 has-text-black">Single Family Townhouse</h4>
                                            <span className="location">Cobble Hill, New York</span>
                                        </a>
                                        <img src="http://placehold.it/760x670" alt=""/>
                                    </div>
                                    <div className="price">
                                        <span>$840</span>
                                        <p>per night</p>
                                    </div>
                                    <ul className="amenities">
                                        <li><i className="icon-bedrooms"></i> 2</li>
                                        <li><i className="icon-bathrooms"></i> 2</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="column is-one-third">
                                <div className="item">
                                    <div className="image">
                                        <a href="properties-detail.html">
                                            <h4 className="title is-4 has-text-black">Recent construction with 3
                                                bedrooms</h4>
                                            <span className="location">Park Slope, New York</span>
                                        </a>
                                        <img src="http://placehold.it/760x670" alt=""/>
                                    </div>
                                    <div className="price">
                                        <span>$560</span>
                                        <p>per night</p>
                                    </div>
                                    <ul className="amenities">
                                        <li><i className="icon-bedrooms"></i> 3</li>
                                        <li><i className="icon-bathrooms"></i> 2</li>
                                    </ul>
                                </div>
                                <div className="item">
                                    <div className="image">
                                        <a href="properties-detail.html">
                                            <h4 className="title is-4 has-text-black">3 bedroom villa with garage for
                                                rent</h4>
                                            <span className="location">Bal Harbour, Florida</span>
                                        </a>
                                        <img src="http://placehold.it/760x670" alt=""/>
                                    </div>
                                    <div className="price">
                                        <span>$150</span>
                                        <p>per night</p>
                                    </div>
                                    <ul className="amenities">
                                        <li><i className="icon-bedrooms"></i> 3</li>
                                        <li><i className="icon-bathrooms"></i> 2</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*// <!-- END FEATURED PROPERTIES -->*/}

                        {/*// <!-- BEGIN POPULAR REGIONS -->*/}
                        <h2 className="title is-2 has-text-black">Popular Regions</h2>
                        <div className="columns" id="regions">
                            <div className="column is-one-third">
                                <div className="item">
                                    <a href="#">
                                        <img src="http://placehold.it/194x194" alt=""/>
                                        <h4 className="title is-4 has-text-black">Rhovanion</h4>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="#">
                                        <img src="http://placehold.it/194x194" alt=""/>
                                        <h4 className="title is-4 has-text-black">Mordor</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="column is-one-third">
                                <div className="item">
                                    <a href="#">
                                        <img src="http://placehold.it/194x194" alt=""/>
                                        <h4 className="title is-4 has-text-black">Eriador</h4>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="#">
                                        <img src="http://placehold.it/194x194" alt=""/>
                                        <h4 className="title is-4 has-text-black">The Southwest</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="column is-one-third">
                                <div className="item">
                                    <a href="#">
                                        <img src="http://placehold.it/194x194" alt=""/>
                                        <h4 className="title is-4 has-text-black">Bay of Belfalas</h4>
                                    </a>
                                </div>
                                <div className="item">
                                    <a href="#">
                                        <img src="http://placehold.it/194x194" alt=""/>
                                        <h4 className="title is-4 has-text-black">Arnor</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/*// <!-- END POPULAR REGIONS -->*/}

                        {/*// <!-- BEGIN RECENT ARTICLES -->*/}
                        <h2 className="title is-2 has-text-black">Recent Articles</h2>
                        <div className="columns">
                            <div className="column is-one-third">
                                <div className="image">
                                    <a href="#">
                                      <span className="btn btn-default"
                                      ><i className="fa fa-file-o"></i> Read More</span
                                      >
                                    </a>
                                    <img src="http://placehold.it/766x515" alt=""/>
                                </div>
                                <div className="tag"><i className="fa fa-file-text"></i></div>
                                <div className="info-blog">
                                    <ul className="top-info">
                                        <li><i className="fa fa-calendar"></i> July 30, 2014</li>
                                        <li><i className="fa fa-comments-o"></i> 2</li>
                                        <li>
                                            <i className="fa fa-tags"></i> Properties, Prices, best
                                            deals
                                        </li>
                                    </ul>
                                    <h3>
                                        <a href="#"
                                        >How to get your dream property for the best price?</a
                                        >
                                    </h3>
                                    <p>
                                        Sed rutrum urna id tellus euismod gravida. Praesent
                                        placerat, mauris ac pellentesque fringilla, tortor libero
                                        condimen.
                                    </p>
                                </div>
                            </div>
                            <div className="column is-one-third">
                                <div className="image">
                                    <a href="#">
                                      <span className="btn btn-default"
                                      ><i className="fa fa-file-o"></i> Read More</span
                                      >
                                    </a>
                                    <img src="http://placehold.it/766x515" alt=""/>
                                </div>
                                <div className="tag"><i className="fa fa-film"></i></div>
                                <div className="info-blog">
                                    <ul className="top-info">
                                        <li><i className="fa fa-calendar"></i> July 24, 2014</li>
                                        <li><i className="fa fa-comments-o"></i> 4</li>
                                        <li><i className="fa fa-tags"></i> Tips, Mortgage</li>
                                    </ul>
                                    <h3>
                                        <a href="#">7 tips to get the best mortgage.</a>
                                    </h3>
                                    <p>
                                        Sed rutrum urna id tellus euismod gravida. Praesent
                                        placerat, mauris ac pellentesque fringilla, tortor libero
                                        condimen.
                                    </p>
                                </div>
                            </div>
                            <div className="column is-one-third">
                                <div className="image">
                                    <a href="#">
                                      <span className="btn btn-default"
                                      ><i className="fa fa-file-o"></i> Read More</span
                                      >
                                    </a>
                                    <img src="http://placehold.it/766x515" alt=""/>
                                </div>
                                <div className="tag"><i className="fa fa-file-text"></i></div>
                                <div className="info-blog">
                                    <ul className="top-info">
                                        <li><i className="fa fa-calendar"></i> July 05, 2014</li>
                                        <li><i className="fa fa-comments-o"></i> 1</li>
                                        <li><i className="fa fa-tags"></i> Location, Price, House</li>
                                    </ul>
                                    <h3>
                                        <a href="#"
                                        >House, location or price: What's the most important
                                            factor?</a
                                        >
                                    </h3>
                                    <p>
                                        Sed rutrum urna id tellus euismod gravida. Praesent
                                        placerat, mauris ac pellentesque fringilla, tortor libero
                                        condimen.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="center">
                            <a href="#" className="button is-primary">View All News</a>
                        </div>
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
                                                <a  href="#"> The House With No Windows</a>
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

