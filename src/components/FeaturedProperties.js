/**
 * Featured Properties
 *
 * Featured Properties class component for home page
 *
 * FILE NAME:   FeaturedProperties.js
 * Location:    /src/components
 * Created:     13/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * create a Featured Properties component needs the following: COMPLETE 13/10/24
 * Column suits 2/3 wide Title is centred COMPLETE 13/10/24
 * TODO: Add double underline
 * TODO: import 6 property cards into 3 columns of 2 (or grid)
 * TODO: Properties cards (will be another component props for title, subtitle(location), cost per night, beds, bath, image
 * TODO: images have the title and subtitle that appears on hover
 *
 * REFERENCES:
 *
 */
import React from 'react';
import PropertyCard from "./PropertyCard";
import 'bulma/css/bulma.css';


const FeaturedProperties = () => {
    return (
        <div><h3 className="title is-3 has-text-black mt-6 mb-6 pt-0">Featured Properties</h3>

            {/*add dividing lines here 2 bars*/}

            <div className="columns">
                <div className="column is-one-third">
                    <div className="item">
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
                    </div>
                    <div className="item">
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
                    </div>
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
        </div>
    );
};
export default FeaturedProperties;