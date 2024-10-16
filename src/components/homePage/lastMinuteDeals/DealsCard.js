/**
 * Deals Card
 *
 * Deals Card class component for home page LastMinuteDeals section
 *
 * FILE NAME:   DealsCard.js
 * Location:    /src/components
 * Created:     15/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * TODO: write a function that checks if the property is available
 *  and return "Now" if its available or a date eg "6th July"
 *
 */

import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '../../../ActivityCard.css';

// REF: hovered state research
// https://medium.com/@iamviveksi/how-to-animate-a-button-in-react-using-css-transitions-eca2f636a63
const DealCard =({ title, location, region, link, image, availability}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <li className="columns ">
            <column className="image column is-half">
                <a href="#"></a>
                <img alt={title} src={image}/>
            </column>
            <column className="column is-half">
                <div className="is-size-7 mb-0 pr-2 ">
                    <div><i className="fa fa-calendar pr-2"></i>Available {availability}</div>
                </div>

                <h4 className="has-text-black is-size-6 mb-0">
                    <a href={link} className={`location-highlight ${isHovered ? 'hovered' : ''}`}
                       onMouseEnter={() => setIsHovered(true)}
                       onMouseLeave={() => setIsHovered(false)}> {title}</a>
                    <p>{location}, {region}</p>
                </h4>
            </column>
        </li>
    )
}

export default DealCard;