/**
 * Activity Card
 *
 * Activity Card class component for home page FeaturedProperties section
 *
 * FILE NAME:   ActivityCard.js
 * Location:    /src/components
 * Created:     15/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * write a function that checks if the posted time is less than one minute and return now, else return
 *  time in minutes, hours, days, weeks, months, year eg "Just Now", "45 minutes ago", "1 month ago" COMPLETED
 *
 */

import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '../../../css/ActivityCard.css';

// Function to calculate time difference between now and when a post was made
// REFERENCES:
//  - rounding down of times for more accurate display times - https://www.w3schools.com/jsref/jsref_floor.asp
//  - DateTime formatting and UTC - https://chatgpt.com/share/6711f7ec-4038-8005-a59f-d5fea2c168e0
const elapsedTime = (dateTime) => {
    const currentTime = Date.now();
    const dateOfPost = new Date(dateTime).getTime();
    const timeDifference = Math.floor((currentTime - dateOfPost) / 1000); //calc difference and round down

    let timeElapsed;

    switch (true) {
        case timeDifference < 60:
            timeElapsed = "Just now";
            break;
        case timeDifference < 3600:
            timeElapsed = `${Math.floor(timeDifference / 60)} minutes ago`;
            break;
        case timeDifference < 86400:
            timeElapsed = `${Math.floor(timeDifference / 3600)} hours ago`;
            break;
        case timeDifference < 2592000:
            timeElapsed = `${Math.floor(timeDifference / 86400)} days ago`;
            break;
        case timeDifference < 31536000:
            timeElapsed = `${Math.floor(timeDifference / 2592000)} months ago`;
            break;
        default:
            timeElapsed = `${Math.floor(timeDifference / 31536000)} years ago`;
            break;
    }
    return timeElapsed;

}

// REF: hovered state research
// https://medium.com/@iamviveksi/how-to-animate-a-button-in-react-using-css-transitions-eca2f636a63
const ActivityCard =({ userName, action, location, link, image, comment, postedTime}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="columns">
            <div className="column is-half">
                <a href={link}
                ><img className="has-radius-rounded" src={image} alt=""
                /></a>
            </div>
            <div className="info column is-half has-text-left">
                <h6 className="has-text-black is-size-7 mb-0 has-text-centered">
                    {userName} {action}
                    <a href={link} className={`location-highlight ${isHovered ? 'hovered' : ''}`}
                       onMouseEnter={() => setIsHovered(true)}
                       onMouseLeave={() => setIsHovered(false)}> {location}</a></h6>
                <p className="is-size-7 mb-2 has-text-centered">
                    {comment}
                </p>
                <h6 className="has-text-black is-size-7 mb-1 has-text-centered">{elapsedTime(postedTime)}</h6>
            </div>
        </div>
    )
}

export default ActivityCard;