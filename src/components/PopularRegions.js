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
import RegionsCard from "./RegionsCard";


const PopularRegions = () => {

    // Add properties props
    const properties = [
        {location: "Rhovanion",
            image: "http://placehold.it/194x194",
            link: "#"},
        {location: "Mordor",
            image: "http://placehold.it/194x194",
            link: "#"},
        {location: "Eriador",
            image: "http://placehold.it/194x194",
            link: "#"},
        {location: "The Southwest",
            image: "http://placehold.it/194x194",
            link: "#"},
        {location: "Bay of Belfalas",
            image: "http://placehold.it/194x194",
            link: "#"},
        {location: "Arnor",
            image: "http://placehold.it/194x194",
            link: "#"},
    ];


    // Split into 3 columns using slice()
    const column1 = properties.slice(0, 2); // First 2 items
    const column2 = properties.slice(2, 4); // Next 2 items
    const column3 = properties.slice(4, 6); // Last 2 items

    return (
        <div>
            <h3 className="title is-3 has-text-black mt-6 mb-6">Popular Regions</h3>

            {/*add dividing lines here 2 bars*/}
            <div className="double-underline mb-6 has-text-center"></div>

            <div className="columns" id="regions">
                <div className="column is-one-third">
                    {column1.map((property, index) => (
                        <RegionsCard key={index} {...property} />
                    ))}
                </div>
                <div className="column is-one-third">
                    {column2.map((property, index) => (
                        <RegionsCard key={index} {...property} />
                    ))}
                </div>
                <div className="column is-one-third">
                    {column3.map((property, index) => (
                        <RegionsCard key={index} {...property} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default PopularRegions;