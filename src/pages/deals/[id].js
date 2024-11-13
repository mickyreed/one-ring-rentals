/**
 * deals Information Page
 *
 * deals information component for all deals
 *
 * FILE NAME:   {id}.tsx
 * Location:    /src/pages/deals
 * Created:     13/11/2024
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 */
import { useRouter } from 'next/router';
import deals from '../../../public/dealsData.json';
import { checkDateAvailable } from '../../js/dateUtility';
import Link from "next/link";
import React from "react";
//console.log('Deals:', deals);

export default function DealsInfo() {
    const router = useRouter();
    const { id } = router.query;
    //console.log('ID:', id);

    // Find the property by id
    const deal = deals.find((prop) => prop.id === id);

    if (!deals) {
        return <div>Loading...</div>;
    }

    return (
        <div className="columns pt-6 pb-6 flex-col">
            <div className="column is-full is-centered">
                <h2 className="title is-2">{deal["title"]}</h2>
                <h4 className="title is-4">{deal.location}, {deal.region}</h4>

                <img src={deal.image} alt={deal.title}
                     className="w-full image-large object-cover pt-4 mt-4 mb-4 pb-4"/>
                <div className="pb-4 mb-4">

                    <h3 className="title is-3">Availability: {checkDateAvailable(deal["availability"])}</h3>
                </div>
                <div className="flex justify-center mt-8 w-full">
                    <Link href="/">
                        <button className="button is-primary is-align-items-center mt-6">Back to Last Minute Deals</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}