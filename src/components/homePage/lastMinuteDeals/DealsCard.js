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
 * write a function that checks if the property is available
 *  and return "Now" if its available or a date eg "6th July" COMPLETE
 *
 */

import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '../../../css/ActivityCard.css';

// Function to set the formatting of the date we will be returning
const formatDate = (date) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' }; // will return 4 Jul 25 (short month version)
    return date.toLocaleDateString('en-AU', options);
};

// Function to calculate booking dates against the current date
// REFERENCES:
//  - Date Method - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
//  - Convert date to local time - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
//  - DateTime formatting and UTC - https://chatgpt.com/share/6711f7ec-4038-8005-a59f-d5fea2c168e0
const checkDateAvailable = (dateBookedTil) => {
    const currentDate = new Date();
    const bookedTilDate= new Date(dateBookedTil);

    if (bookedTilDate > currentDate){
        return formatDate(bookedTilDate);
    }
    else{
        return " Now";
    }


}

// REF: hovered state research
// https://medium.com/@iamviveksi/how-to-animate-a-button-in-react-using-css-transitions-eca2f636a63
const DealCard =({ title, location, region, link, image, availability,}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className=" is-align-items-center px-3">
            <div className="columns  ">
                <div className="image column is-half is-flex
                                    is-justify-content-space-around
                                    is-align-items-center pb-4">
                    <a href="#"></a>
                    <img alt={title} src={image}/>
                </div>
                <column className="column is-half is-flex is-align-items-center pb-4">
                    <div className="is-size-7 mb-0 pr-2 ">
                        <div><i className="fa fa-calendar pr-2"></i>Available {checkDateAvailable(availability)}</div>
                    </div>

                    <h4 className="has-text-black is-size-6 mb-0">
                        <a href={link} className={`location-highlight ${isHovered ? 'hovered' : ''}`}
                           onMouseEnter={() => setIsHovered(true)}
                           onMouseLeave={() => setIsHovered(false)}> {title}</a>
                        <p>{location}, {region}</p>
                    </h4>
                </column>
            </div>
        </div>
    )
}

export default DealCard;