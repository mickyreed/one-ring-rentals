/**
 * Popular Regions
 *
 * Popular Regions class component for home page
 *
 * FILE NAME:   PopularRegions.js
 * Location:    /src/components
 * Created:     13/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * create a Popular Regions component needs the following: COMPLETE 13/10/24
 * Column suits 2/3 wide Title is centred COMPLETE 13/10/24
 * TODO: Add double underline
 * TODO: import 6 region cards into 3 columns of 2 (or grid)
 * TODO: Region cards (will be another component props for regionName, image
 *
 * REFERENCES:
 */
import React from 'react';
import 'bulma/css/bulma.css';


const PopularRegions = () => {
    return (
        <div>
            <h3 className="title is-3 has-text-black mt-6 mb-6">Popular Regions</h3>

            {/*add dividing lines here 2 bars*/}

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
        </div>
    );
};
export default PopularRegions;