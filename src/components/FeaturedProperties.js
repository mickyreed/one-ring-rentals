/**
 * Featured Properties
 *
 * Featured Properties class component for home page
 *
 * FILE NAME:   FeaturedProperties.js
 * Location:    /src/components
 * Created:     12/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * TODO: create a Featured Properties component needs the following:
 * TODO: Column 2/3 wide large padding on left Title is centred and double underline
 * TODO: import 6 property cards into 3 columns of 2 (or grid)
 * TODO: Properties cards (will be another component props for title, subtitle(location), cost per night, beds, bath, image
 * TODO: images have a title and subtitle that appears on hover
 *
 * TODO: create a Last Minute Deals column on the right column is 1/3 with Title centred and double underline
 * TODO: create card components for each deal with props title, subtitle(location), availability(bool or date) and image
 * TODO: import 4 deals cards into a list featuring 2 columns image on the left and availability and details on the right
 * TODO: under this i need a button MORE DEALS is-black rounded Corners is-centred horizontally
 *
 * REFERENCES:
 *
 *
 */
import React from 'react';
import 'bulma/css/bulma.css';


const FeaturedProperties = () => {
    return (
        <div className="wrapper has-background-white has-text-black">
            <div className="columns">
                <div className="column is-two-thirds">
                    <h3 className="title is-3 has-text-black">Featured Properties</h3>
                    <div className="column is-flex text-center">
                        <div className="column is-one-third">Column1
                            <div>Item 1</div>
                            <div>Item 2</div>
                        </div>
                        <div className="column is-one-third">Column2
                            <div>Item 1</div>
                            <div>Item 2</div>
                        </div>
                        <div className="column is-one-third">Column3
                            <div>Item 1</div>
                            <div>Item 2</div>
                        </div>
                    </div>
                </div>
                <div className="column is-one-third is-flex-end">
                    <h3 className="title is-3 has-text-black">Last Minute Deals</h3>
                    <div className="columns">
                        <div className="column is-flex is-one-third pl-6 pr-0 is-align-content-center">
                            <div className="column is-one-half pl-6 pr-0 is-align-content-center">
                                <div className="image">
                                    <a href="#"
                                    ><img style={{width: 60, height: 60}} src="http://placehold.it/760x670"
                                          alt=""
                                    /></a>
                                </div>
                            </div>
                        </div>
                        <div className="column is-flex is-one-third pl-0 pr-0 is-align-content-center">
                            <div className="column is-one-half pl-0 pr-0">
                                <div className="is-text is-small">Availability Date</div>
                                <div>Description</div>
                                <div>Location Location</div>
                            </div>
                        </div>
                        <div className="column is-flex is-one-third pl-6 pr-0 is-align-content-center"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default FeaturedProperties;