/**
 * Featured Properties
 *
 * Featured Properties class component for home page
 *
 * FILE NAME:   FeaturedProperties.js
 * Location:    /src/components
 * Created:     13/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * create a Featured Properties component needs the following: COMPLETE 13/10/24
 * Column suits 2/3 wide Title is centred COMPLETE 13/10/24
 * TODO: Add double underline
 * TODO: import 6 property cards into 3 columns of 2 (or grid)
 * TODO: Properties cards (will be another component props for title, subtitle(location), cost per night, beds, bath, image
 * TODO: images have the title and subtitle that appears on hover
 *
 * REFERENCES:
 *
 */
import React from 'react';
import PropertyCard from "./PropertyCard";
import 'bulma/css/bulma.css';


const FeaturedProperties = () => {

    // Add properties props
    const properties = [
        {title: "Luxury Apartment with great views",
            location: "Upper East Side", city: "New York",
            price: "950", beds: "4", baths: "3",
            image: "http://placehold.it/760x670", link: "properties-detail.html"},
        {title: "Modern construction with parking space",
            location: "Midtown", city: "New York",
            price: "85", beds: "1", baths: "2",
            image: "http://placehold.it/760x670", link: "properties-detail.html"},
        {title: "Stunning Villa with 5 bedrooms",
            location: "Miami Beach", city: "Florida",
            price: "1,300", beds: "5", baths: "2",
            image: "http://placehold.it/760x670", link: "properties-detail.html"},
        {title: "Single Family Townhouse",
            location: "Cobble Hill", city: "New York",
            price: "840", beds: "2", baths: "2",
            image: "http://placehold.it/760x670", link: "properties-detail.html"},
        {title: "Recent construction with 3 bedrooms",
            location: "Park Slope", city: "New York",
            price: "560", beds: "3", baths: "2",
            image: "http://placehold.it/760x670", link: "properties-detail.html"},
        {title: "3 bedroom villa with garage for rent",
            location: "Bal Harbour", city: "Florida",
            price: "150", beds: "3", baths: "2",
            image: "http://placehold.it/760x670", link: "properties-detail.html"},
    ];

    // Split into 3 columns using slice()
    const column1 = properties.slice(0, 2); // First 2 items
    const column2 = properties.slice(2, 4); // Next 2 items
    const column3 = properties.slice(4, 6); // Last 2 items

    return (
        <div><h3 className="title is-3 has-text-black mt-6 mb-6 pt-0">Featured Properties</h3>

            {/*add dividing lines here 2 bars*/}

            <div className="columns">
                <div className="column is-one-third">
                    {column1.map((property, index) => (
                        <PropertyCard key={index} {...property} />
                    ))}
                </div>
                <div className="column is-one-third">
                    {column2.map((property, index) => (
                        <PropertyCard key={index} {...property} />
                    ))}
                </div>
                <div className="column is-one-third">
                    {column3.map((property, index) => (
                        <PropertyCard key={index} {...property} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default FeaturedProperties;