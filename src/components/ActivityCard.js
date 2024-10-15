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
 * TODO: write a function that checks if the posted time is less than one minute and return now, else return
 *  time in minutes, hours, days, weeks, months, year eg "Just Now", "45 minutes ago", "1 month ago"
 *
 */

import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '../ActivityCard.css';

// REF: hovered state research
// https://medium.com/@iamviveksi/how-to-animate-a-button-in-react-using-css-transitions-eca2f636a63
const ActivityCard =({ userName, action, location, link, image, comment, postedTime}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="columns">
            <column className="column is-half">
                <a href={link}
                ><img className="has-radius-rounded" src={image} alt=""
                /></a>
            </column>
            <column className="info column is-half has-text-left">
                <h6 className="has-text-black is-size-7 mb-0">
                    {userName} {action}
                    <a href={link} className={`location-highlight ${isHovered ? 'hovered' : ''}`}
                       onMouseEnter={() => setIsHovered(true)}
                       onMouseLeave={() => setIsHovered(false)}> {location}</a></h6>
                <p className="is-size-7 mb-2">
                    {comment}
                </p>
                <h6 className="has-text-black is-size-7 mb-1">{postedTime}</h6>
            </column>
        </div>
    )
}

export default ActivityCard;