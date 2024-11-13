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
import Link from "next/link";
// import 'bulma/css/bulma.css';
// import '../../css/RegionsCard.css';

const RegionCard =({ id, location, image}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Link href={`/regions/${id}`}>
            <div>
                <div className={`property-card ${isHovered ? 'hovered' : ''}`}
                     onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}>

                    <div className="item">
                        <Link href={`/regions/${id}`}>
                            <img src={image} alt={location}/>
                            <h5 className="title is-5 has-text-black mb-4">{location}</h5>
                        </Link>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RegionCard;