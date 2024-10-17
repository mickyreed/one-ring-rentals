/**
 * Activity
 *
 * Activity class component for home page
 *
 * FILE NAME:   Activity.js
 * Location:    /src/components
 * Created:     13/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * create an Activity component needs the following: COMPLETE 13/10/24
 * Column suits 1/3 wide Title is centred COMPLETE 13/10/24
 * TODO: Add double underline
 * TODO: import 2 Activity cards into 1 columns (cards are 2 columns)
 * TODO: Deal cards (will be another component props for userName, action, title, comment, dateTime ,image, articleLink
 *
 * REFERENCES:
 */
import React, {useEffect, useState} from 'react';
import 'bulma/css/bulma.css';
import ActivityCard from "./ActivityCard";
import {fetchAPIData} from "../../../fetchAPIData";


const Activity = () => {

    const [activities, setActivities] = useState([]);  // Empty array initially to hold the fetched data
    const [loading, setLoading] = useState(true);  // Loading state
    const [error, setError] = useState(null); // Error state

    // Simulate an API call with fetch to load properties from JSON
    useEffect(() => {
        const loadActivities = async () => {
            try {
                const activities = await fetchAPIData('/activityData.json');  // Call the helper function
                setActivities(activities);  // Store the fetched data in state
                setLoading(false);  // Set loading to false once data is fetched
            } catch (err) {
                setError(err.message);  // Set error message if something goes wrong
                setLoading(false);
            }
        };

        loadActivities();
    }, []);

    if (loading) {
        return <div>Loading regions...</div>;  // Show a loading state while fetching data
    }

    if (error) {
        return <div>Error: {error}</div>;  // Show error if fetching fails
    }

    // Split into 3 columns using slice()
    const column = activities.slice(0, 2); // First 2 items to display only

    return (
        <div>
            <column className="column ml-0 mr-0 pl-0 pr-0">
                <h3 className="title is-3 has-text-black mt-6 mb-6">Activity</h3>
                <div className="double-underline mb-6 has-text-center"></div>
                <ul className="activity ml-0 mr-0 pl-0 pr-0 ">
                    <li>
                        {column.map((activity, index) => (
                            <ActivityCard key={index} {...activity} />
                        ))}
                    </li>
                </ul>
            </column>
        </div>
    );
};
export default Activity;