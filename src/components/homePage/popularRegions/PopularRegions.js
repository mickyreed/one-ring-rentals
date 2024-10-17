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
 * Add double underline COMPLETED 15/10/24
 * import 6 region cards into 3 columns of 2 (or grid) COMPLETED 15/10/24
 * Region cards (will be another component props for regionName, image COMPLETED 15/10/24
 *
 * REFERENCES:
 */
import React, {useEffect, useState} from 'react';
import 'bulma/css/bulma.css';
import RegionsCard from "./RegionsCard";
import {fetchAPIData} from "../../../fetchAPIData";


const PopularRegions = () => {

    const [regions, setRegions] = useState([]);  // Empty array initially to hold the fetched data
    const [loading, setLoading] = useState(true);  // Loading state
    const [error, setError] = useState(null); // Error state

    // Simulate an API call with fetch to load properties from JSON
    useEffect(() => {
        const loadRegions = async () => {
            try {
                const regions = await fetchAPIData('/regionsData.json');  // Call the helper function
                setRegions(regions);  // Store the fetched data in state
                setLoading(false);  // Set loading to false once data is fetched
            } catch (err) {
                setError(err.message);  // Set error message if something goes wrong
                setLoading(false);
            }
        };

        loadRegions();
    }, []);

    if (loading) {
        return <div>Loading regions...</div>;  // Show a loading state while fetching data
    }

    if (error) {
        return <div>Error: {error}</div>;  // Show error if fetching fails
    }

    // Split into 3 columns using slice()
    const column1 = regions.slice(0, 2); // First 2 items
    const column2 = regions.slice(2, 4); // Next 2 items
    const column3 = regions.slice(4, 6); // Last 2 items

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