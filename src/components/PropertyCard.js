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
 * TODO: images have the title and subtitle that appears on hover
 * TODO: do i need to use PropTypes?? https://www.geeksforgeeks.org/how-to-use-proptypes-for-type-checking-in-react-components/
 *
 *
 * REFERENCES:
 * https://react.dev/learn/passing-props-to-a-component
 * https://bobbyhadz.com/blog/react-pass-function-as-prop
 * TODO: https://blog.logrocket.com/how-props-passed-components-react/
 * TODO: https://www.codemzy.com/blog/react-pass-function-as-prop
 * TODO: https://coreui.io/blog/passing-props-to-child-components-in-react-function-components/
 * TODO: https://www.freecodecamp.org/news/react-props-cheatsheet/
 *
 */

import React from 'react';
import 'bulma/css/bulma.css';

const PropertyCard =({ link, title, location, city, image, price, beds, baths}) => {
    return (
        <div className="item">
            <div className="image">
                <a href={link}>
                    <h4 className="title is-4 has-text-black">{title}</h4>
                    <span className="location">{location}, {city}</span>
                </a>
                <img src={image} alt={title}/>
            </div>
            <div className="price">
                <span>${price}</span>
                <p>per night</p>
            </div>
            <ul className="amenities">
                <li><i className="icon-bedrooms"></i> {beds}</li>
                <li><i className="icon-bathrooms"></i> {baths}</li>
            </ul>
        </div>
    )
}

export default PropertyCard;