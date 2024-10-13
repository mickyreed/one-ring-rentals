/**
 * Recent Articles
 *
 * Recent Articles class component for home page
 *
 * FILE NAME:   RecentArticles.js
 * Location:    /src/components
 * Created:     13/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * TODO: create a Recent Articles component needs the following:
 * TODO: Column suits 2/3 wide Title is centred and double underline
 * TODO: import 3 Article cards into 3 columns of 1 (or grid)
 * TODO: under this is a rectangular button "VIEW ALL NEWS" rounded corners border and tranparent background
 * TODO: Article cards (will be another component props for Title, Summary, Availability, Tags, CommentCount, image, articleLink
 *
 * REFERENCES:
 */
import React from 'react';
import 'bulma/css/bulma.css';


const RecentArticles = () => {
    return (
        <div>
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
        </div>
    );
};
export default RecentArticles;