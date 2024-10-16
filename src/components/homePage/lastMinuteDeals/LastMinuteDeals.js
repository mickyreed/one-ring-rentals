/**
 * Last Minutes Deals
 *
 * Last Minute Deals class component for home page
 *
 * FILE NAME:   LastMinuteDeals.js
 * Location:    /src/components
 * Created:     13/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * create a Last Minute Deals component needs the following: COMPLETE 13/10/24
 * Column suits 1/3 wide Title is centred COMPLETE 13/10/24
 * Add double underline COMPLETED 15/10/24
 * import 4 Deal cards into 1 columns (cards are 2 columns) COMPLETED 15/10/24
 * under this is a rectangular button "MORE DEALS" rounded corners border white text on black background COMPLETE 13/10/24
 * Deal cards (will be another component props for Availability, Title, Location, image, articleLink COMPLETED 15/10/24
 *
 * REFERENCES:
 */
import React from 'react';
import 'bulma/css/bulma.css';
import DealsCard from "./DealsCard";

const LastMinuteDeals = () => {

    // Add regions props
    const deals = [
        {title: "Private Beach",
            location: "Lossarnach",
            region: "Eriado",
            image: "http://placehold.it/100x100",
            link: "#",
            availability: "Now"
        },
        {title: "Mountain Views",
            location: "Hyarnustar",
            region: "Rhovanion",
            image: "http://placehold.it/100x100",
            link: "#",
            postedTime: "24th July",
        },
        {title: "Heart of the Village",
            location: "Minhiriath",
            region: "Eriador",
            image: "http://placehold.it/100x100",
            link: "#",
            postedTime: "5th July",
        },
        {title: "The city life",
            location: "West Beleriand",
            region: "Mordor",
            image: "http://placehold.it/100x100",
            link: "#",
            postedTime: "6th July",
        },
    ];

    // Split into 3 columns using slice()
    const column = deals.slice(0, 4); // First 2 items to display only

    return (
        <div>
            <column className="column mt-0 pt-0">
                <h3 className="title is-3 has-text-black mt-6 mb-6 pt-0">Last minute deals</h3>
                <div className="double-underline mb-6 has-text-center"></div>
                <ul className="latest-news has-text-left">
                    {column.map((deals, index) => (
                        <DealsCard key={index} {...deals} />
                    ))}
                </ul>
                <p className="center">
                    <a className="button is-black mt-6 mb-6" href="#">More deals</a>
                </p>
            </column>
        </div>
    );
};
export default LastMinuteDeals;