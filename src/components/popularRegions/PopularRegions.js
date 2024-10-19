/**
 * Popular Regions
 *
 * Popular Regions class component for home page
 *
 * FILE NAME:   PopularRegions.js
 * Location:    /src/components
 * Created:     13/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * create a Popular Regions component needs the following: COMPLETE 13/10/24
 * Column suits 2/3 wide Title is centred COMPLETE 13/10/24
 * Add double underline COMPLETED 15/10/24
 * import 6 region cards into 3 columns of 2 (or grid) COMPLETED 15/10/24
 * Region cards (will be another component props for regionName, image COMPLETED 15/10/24
 *
 * REFERENCES:
 * Prop Drilling & context
 *  https://react.dev/learn/passing-data-deeply-with-context
 *  https://dmitripavlutin.com/react-context-and-usecontext/#:~:text=React%20context%20provides%20data%20to%20components%20no%20matter,global%20state%2C%20theme%2C%20services%2C%20user%20settings%2C%20and%20more.
 *  https://dev.to/luqmanshaban/react-context-api-a-step-by-step-guide-i1i
 *  https://blog.logrocket.com/react-context-api-deep-dive-examples/
 *  https://dev.to/clickpesa/react-manage-state-using-context-api-with-usestate-or-usereducer-hooks-d5l
 *  https://stackoverflow.com/questions/69675357/what-is-the-proper-way-to-do-global-state
 *  https://www.freecodecamp.org/news/react-context-for-beginners/
 *
 */
import React, { useContext } from 'react';
import 'bulma/css/bulma.css';
import RegionsCard from "./RegionsCard";
import { RegionsContext } from '../../contexts/RegionsContext';

const PopularRegions = () => {
    const { regions, loading, error } = useContext(RegionsContext); // Use the context
    console.log(regions);
    if (loading) {
        return <div>Loading regions...</div>;
    }

    if (error) {
        return <div>Sorry, unable to load regions at this time</div>;
    }

    // Split into 3 columns using slice()
    const column1 = regions.slice(0, 2); // First 2 items
    const column2 = regions.slice(2, 4); // Next 2 items
    const column3 = regions.slice(4, 6); // Last 2 items

    return (
        <div>
            <h3 className="title is-3 has-text-black mt-6 mb-6">Popular Regions</h3>

            {/*add dividing lines here 2 bars*/}
            <div className="double-underline mb-6 has-text-center"></div>

            <div className="columns" id="regions">
                <div className="column is-one-third">
                    {column1.map((property, index) => (
                        <RegionsCard key={index} {...property} />
                    ))}
                </div>
                <div className="column is-one-third">
                    {column2.map((property, index) => (
                        <RegionsCard key={index} {...property} />
                    ))}
                </div>
                <div className="column is-one-third">
                    {column3.map((property, index) => (
                        <RegionsCard key={index} {...property} />
                    ))}
                </div>
            </div>
        </div>
    );
};
export default PopularRegions;