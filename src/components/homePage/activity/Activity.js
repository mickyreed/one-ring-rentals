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
import React from 'react';
import 'bulma/css/bulma.css';
import ActivityCard from "./ActivityCard";


const Activity = () => {

    // Add regions props
    const activities = [
        {userName: "Sam Minnée",
            action: "reviewed",
            location: "The House With No Windows",
            comment: "Awesome solitary confinement, mate. Spot on. Sweet as.",
            image: "http://placehold.it/70x70",
            link: "#",
            postedTime: "Just Now"
        },
        {userName: "Ingo Schoomer",
            action: "asked a question about",
            location: "The Mistake by the Lake",
            comment: "Has this house been unit tested?",
            image: "http://placehold.it/70x70",
            link: "#",
            postedTime: "37 Minutes Ago",
        },
    ];

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