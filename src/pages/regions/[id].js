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
import regions from '../../../public/regionsData.json';
import Link from "next/link";
import React from "react";
export default function RegionsInfo() {
    const router = useRouter();
    const { id } = router.query;
    console.log('ID:', id);

    // Find the property by id
    const region = regions.find((prop) => prop.id === id);

    if (!region) {
        return <div>Loading...</div>;
    }

    return (
        <div className="columns pt-6 pb-6 flex-col">
            <div className="column is-full is-centered">
                <h2 className="title is-2">{region.location}</h2>

                <img src={region.image} alt={region.location}
                     className="w-full image-large object-cover pt-4 mt-4 mb-4 pb-4"/>
                <div className="pb-4 mb-4">

                </div>
                <div className="flex justify-center mt-8 w-full">
                    <Link href="/regions">
                        <button className="button is-primary is-align-items-center mt-6">Back to Regions</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}