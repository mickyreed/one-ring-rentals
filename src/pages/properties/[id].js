/**
 * Property Information Page
 *
 * Property information component for all properties
 *
 * FILE NAME:   {id}.tsx
 * Location:    /src/pages/properties
 * Created:     12/11/2024
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 */
import { useRouter } from 'next/router';
import properties from '../../../public/propertiesData.json';
import Link from "next/link";
import React from "react";
//console.log('Properties:', properties);

export default function PropertyInfo() {
    const router = useRouter();
    const { id } = router.query;
    console.log('ID:', id);

    // Find the property by id
    const property = properties.find((prop) => prop.id === id);

    if (!property) {
        return <div>Loading...</div>;
    }

    return (
        <div className="columns pt-6 pb-6 flex-col">
            <div className="column is-full is-centered">
                <h2 className="title is-2">{property.title}</h2>
                <h4 className="title is-4">{property.location}, {property.city}</h4>

                <img src={property.image} alt={property.title}
                     className="w-full image-large object-cover pt-4 mt-4 mb-4 pb-4"/>
                <div className="pb-4 mb-4">

                    <h3 className="title is-3">Price: ${property.price} per night</h3>
                    <h4 className="title is-4">{property.beds} beds, {property.baths} baths</h4>
                </div>
                <div className="flex justify-center mt-8 w-full">
                    <Link href="/">
                        <button className="button is-primary is-align-items-center mt-6">Back to Properties</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}