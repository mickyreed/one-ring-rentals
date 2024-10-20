/**
 * Property Card
 *
 * Property Card class component for home page FeaturedProperties section
 *
 * FILE NAME:   PropertyCard.js
 * Location:    /src/components
 * Created:     13/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * create a Property Card component needs the following:
 * Properties card props for title, subtitle(location), cost per night, beds, bath, image COMPLETE 13/10/24
 * copy over existing card section from FeaturedProperties.js COMPLETE 13/10/24
 * create a function with props of the keys that get passed to it and update this info in the code COMPLETE 13/10/24
 * images have the title and subtitle that appears on hover COMPLETED 15/10/24
 * TODO: do i need to use PropTypes?? https://www.geeksforgeeks.org/how-to-use-proptypes-for-type-checking-in-react-components/
 * add wrap around banner on price tag.. use z-index and radius COMPLETED 13/10/24
 *
 * REFERENCES:
 * https://react.dev/learn/passing-props-to-a-component
 * https://bobbyhadz.com/blog/react-pass-function-as-prop
 * https://blog.logrocket.com/how-props-passed-components-react/
 * https://www.codemzy.com/blog/react-pass-function-as-prop
 * https://coreui.io/blog/passing-props-to-child-components-in-react-function-components/
 * https://www.freecodecamp.org/news/react-props-cheatsheet/
 *
 */

import React, { useState } from 'react';
// import 'bulma/css/bulma.css';
// import '../../../css/PropertyCard.css';

// REF: hovered state research
// https://medium.com/@iamviveksi/how-to-animate-a-button-in-react-using-css-transitions-eca2f636a63
const PropertyCard =({ link, title, location, city, image, price, beds, baths}) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div>
            <div className={`property-card ${isHovered ? 'hovered' : ''}`}
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}>

                <div className="is-align-items-center">
                    <img src={image} alt={title} className="property-image"/>
                </div>
                <div className="price-tag-wrap has-background-black">
                    <span className="price">${price}</span>
                    <p>per night</p>

                </div>
                <div className="price-tag has-background-black has-text-white">
                    <span className="price">${price}</span>
                    <p>per night</p>
                </div>
                <div className="overlay is-display-flex is-align-items-center">
                    <a href={link}>
                        <h4 className="property-title has-text-white mt-6 mb-0">{title}</h4>
                        <span className="location has-text-white ">{location}, {city}</span>
                    </a>
                </div>
            </div>


            <div>
                <div className="amenities">
                    <div className="columns mb-4 is-flex">
                        <div className="column is-6 pl-6"><i className="has-text-centered"></i> {beds} Beds</div>
                        <div className="column is-6 pr-6"><i className="has-text-centered"></i> {baths} Bath</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PropertyCard;