/**
 * Popular Regions Card
 *
 * Popular Regions class component for home page FeaturedProperties section
 *
 * FILE NAME:   RegionsCard.js
 * Location:    /src/components
 * Created:     15/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 *
 */

import React, { useState } from 'react';
// import 'bulma/css/bulma.css';
// import '../../css/RegionsCard.css';

const RegionCard =({ link, location, image}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>
            <div className={`property-card ${isHovered ? 'hovered' : ''}`}
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}>

                <div className="item">
                    <a href={link}>
                        <img src={image} alt={location}/>
                        <h4 className="title is-5 has-text-black mb-4">{location} </h4>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RegionCard;