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
 * TODO: create a Content component needs the following:
 * TODO: Column 2/3 wide large padding on left Content Centered
 * TODO: Column 1/3 wide large padding on right Content centered
 * TODO: ADD COMPONENTS featured property, deals, regions, activity & recent articles
 *
 *
 */
import React from 'react';
import 'bulma/css/bulma.css';


const Content = () => {
    return (
        <div className="content">
            <div className="container">
                <div className="row">
                    {/*// <!-- BEGIN MAIN CONTENT -->*/}
                    <div className="main col-sm-8">
                        <h1 className="section-title">Featured Properties</h1>

                        <div className="grid-style1 clearfix">
                            <div className="item col-md-4">
                                <div className="image">
                                    <a href="properties-detail.html">
                                        <h3>Luxury Apartment with great views</h3>
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
                            </div>

                            <div className="item col-md-4">
                                <div className="image">
                                    <a href="properties-detail.html">
                                        <h3>Stunning Villa with 5 bedrooms</h3>
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

                            <div className="item col-md-4">
                                <div className="image">
                                    <a href="properties-detail.html">
                                        <h3>Recent construction with 3 bedrooms</h3>
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

                            <div className="item col-md-4">
                                <div className="image">
                                    <a href="properties-detail.html">
                                        <h3>Modern construction with parking space</h3>
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
                            </div>

                            <div className="item col-md-4">
                                <div className="image">
                                    <a href="properties-detail.html">
                                        <h3>Single Family Townhouse</h3>
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

                            <div className="item col-md-4">
                                <div className="image">
                                    <a href="properties-detail.html">
                                        <h3>3 bedroom villa with garage for rent</h3>
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

                        <div className="row">
                            <div className="col-sm-12">
                                <h1 className="section-title">Popular Regions</h1>
                                <div id="regions">
                                    <div className="item">
                                        <a href="#">
                                            <img src="http://placehold.it/194x194" alt=""/>
                                            <h3>Rhovanion</h3>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#">
                                            <img src="http://placehold.it/194x194" alt=""/>
                                            <h3>Eriador</h3>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#">
                                            <img src="http://placehold.it/194x194" alt=""/>
                                            <h3>Bay of Belfalas</h3>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#">
                                            <img src="http://placehold.it/194x194" alt=""/>
                                            <h3>Mordor</h3>
                                        </a>
                                    </div>

                                    <div className="item">
                                        <a href="#">
                                            <img src="http://placehold.it/194x194" alt=""/>
                                            <h3>The Southwest</h3>
                                        </a>
                                    </div>
                                    <div className="item">
                                        <a href="#">
                                            <img src="http://placehold.it/194x194" alt=""/>
                                            <h3>Arnor</h3>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h1 className="section-title">Recent Articles</h1>
                        <div className="grid-style1">
                            <div className="item col-md-4">
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
                            <div className="item col-md-4">
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
                            <div className="item col-md-4">
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
                            <a href="#" className="btn btn-default-color">View All News</a>
                        </div>
                    </div>
                    {/*// <!-- END MAIN CONTENT -->*/}

                    {/*// <!-- BEGIN SIDEBAR -->*/}
                    <div className="sidebar col-sm-4">
                        {/*// <!-- BEGIN SIDEBAR ABOUT -->*/}
                        <div className="col-sm-12">
                            <h2 className="section-title">Last minute deals</h2>
                            <ul className="latest-news">
                                <li className="col-md-12">
                                    <div className="image">
                                        <a href="blog-detail.html"></a>
                                        <img alt="" src="http://placehold.it/100x100"/>
                                    </div>

                                    <ul className="top-info">
                                        <li><i className="fa fa-calendar"></i>Available Now</li>
                                    </ul>

                                    <h4>
                                        <a href="blog-detail.html">Private Beach</a>
                                        <p>Lossarnach, Eriado</p>
                                    </h4>
                                </li>
                                <li className="col-md-12">
                                    <div className="image">
                                        <a href="blog-detail.html"></a>
                                        <img alt="" src="http://placehold.it/100x100"/>
                                    </div>

                                    <ul className="top-info">
                                        <li>
                                            <i className="fa fa-calendar"></i>Available on 24 July
                                        </li>
                                    </ul>

                                    <h4>
                                        <a href="blog-detail.html">Mountain views</a>
                                        <p>Hyarnustar, Rhovanion</p>
                                    </h4>
                                </li>
                                <li className="col-md-12">
                                    <div className="image">
                                        <a href="blog-detail.html"></a>
                                        <img alt="" src="http://placehold.it/100x100"/>
                                    </div>

                                    <ul className="top-info">
                                        <li><i className="fa fa-calendar"></i>Available 5 July</li>
                                    </ul>

                                    <h4>
                                        <a href="blog-detail.html">Heart of the village</a>
                                        <p>Minhiriath, Eriador</p>
                                    </h4>
                                </li>
                                <li className="col-md-12">
                                    <div className="image">
                                        <a href="blog-detail.html"></a>
                                        <img alt="" src="http://placehold.it/100x100"/>
                                    </div>

                                    <ul className="top-info">
                                        <li><i className="fa fa-calendar"></i>Available 6 July</li>
                                    </ul>

                                    <h4>
                                        <a href="blog-detail.html">The city life</a>
                                        <p>West Beleriand, Mordor</p>
                                    </h4>
                                </li>
                            </ul>
                            <p className="center">
                                <a className="btn btn-fullcolor" href="#">More deals</a>
                            </p>
                        </div>
                        {/*// <!-- END SIDEBAR ABOUT -->*/}

                        <div className="col-sm-12">
                            <h2 className="section-title">Activity</h2>
                            <ul className="activity">
                                <li className="col-lg-12">
                                    <a href="#"
                                    ><img src="http://placehold.it/70x70" alt=""
                                    /></a>
                                    <div className="info">
                                        <h5>
                                            Sam Minnée reviewed
                                            <a href="#">The House With No Windows</a>
                                        </h5>
                                        <p>
                                            Awesome solitary confinement, mate. Spot on. Sweet as.
                                        </p>
                                        <h6>Just now</h6>
                                    </div>
                                </li>
                                <li className="col-lg-12">
                                    <a href="#"
                                    ><img src="http://placehold.it/70x70" alt=""
                                    /></a>
                                    <div className="info">
                                        <h5>
                                            Ingo Schoomer asked a question about
                                            <a href="#">The Mistake by the Lake</a>
                                        </h5>
                                        <p>Has this house been unit tested?</p>
                                        <h6>37 minutes ago</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*// <!-- END SIDEBAR -->*/}
                </div>
            </div>
        </div>
    );
};
export default Content;

