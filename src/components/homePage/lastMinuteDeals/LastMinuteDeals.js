/**
 * Last Minutes deals
 *
 * Last Minute deals class component for home page
 *
 * FILE NAME:   LastMinuteDeals.js
 * Location:    /src/components
 * Created:     13/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * create a Last Minute deals component needs the following: COMPLETE 13/10/24
 * Column suits 1/3 wide Title is centred COMPLETE 13/10/24
 * Add double underline COMPLETED 15/10/24
 * import 4 Deal cards into 1 columns (cards are 2 columns) COMPLETED 15/10/24
 * under this is a rectangular button "MORE DEALS" rounded corners border white text on black background COMPLETE 13/10/24
 * Deal cards (will be another component) props for Availability, Title, Location, image, articleLink COMPLETED 15/10/24
 *
 * REFERENCES:
 */
import React, {useEffect, useState} from 'react';
// import 'bulma/css/bulma.css';
import DealsCard from "./DealsCard";
import {fetchAPIData} from "../../../js/fetchAPIData";

const LastMinuteDeals = () => {
    const [deals, setDeals] = useState([]);  // Empty array initially to hold the fetched data
    const [loading, setLoading] = useState(true);  // Loading state
    const [error, setError] = useState(null); // Error state

    // Simulate an API call with fetch to load properties from JSON
    useEffect(() => {
        const loadDeals = async () => {
            try {
                const deals = await fetchAPIData('/dealsData.json');  // Call the helper function
                setDeals(deals);  // Store the fetched data in state
                setLoading(false);  // Set loading to false once data is fetched
            } catch (err) {
                setError(err.message);  // Set error message if something goes wrong
                setLoading(false);
            }
        };

        loadDeals();
    }, []);

    if (loading) {
        return <div>Loading deals...</div>;  // Show a loading state while fetching data
    }

    if (error) {
        return <div>Error: {error}</div>;  // Show error if fetching fails
    }


    // Split into 1 columns using slice()
    const column = deals.slice(0, 4); // First 2 items to display only

    return (
        <div>
            <div className="column mt-0 pt-0">
                <h3 className="title is-3 has-text-black mt-6 mb-6 pt-0">Last minute deals</h3>
                <div className="double-underline mb-6 has-text-center"></div>
                <ul className="latest-news has-text-left">
                    {column.map((deals, index) => (
                        <DealsCard key={index} {...deals} />
                    ))}
                </ul>
                <p className="center">
                    <a className="button is-black mt-6 mb-6" href="/index">More deals</a>
                </p>
            </div>
        </div>
    );
};
export default LastMinuteDeals;