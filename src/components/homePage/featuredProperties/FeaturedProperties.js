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
 * Add double underline COMPLETE:15/10/24
 * import 6 property cards into 3 columns of 2 (or grid) COMPLETE 13/10/24
 * TODO: images have the title and subtitle that appears on hover
 * TODO: re-look at how we do the property cards
 *  - i want to change this to for for loop using the number of columns and number of items in array
 *  - then populate all columns this way... could even then make a helper function and pass in number of columns
 *  - so effectively could use this anywhere in app
 *
 * REFERENCES:
 * REF: research api's and returning error when api call fails
 * https://www.pluralsight.com/resources/blog/guides/fetch-data-from-a-json-file-in-a-react-app
 * https://chatgpt.com/share/6710b3ce-1c48-8005-9cca-f9d8b64a891e
 * TODO: look at using mock api using json-server - https://medium.com/@yogeshmulecraft/json-server-testing-mock-apis-with-react-5b75b8421fc3
 *  - https://medium.com/how-to-react/how-to-use-json-file-as-a-server-for-fake-api-in-react-js-6b72606023b7
 *  - https://stackoverflow.com/questions/39442306/simulating-an-api-call-with-javascript
 */
import React, { useEffect, useState } from 'react';
import PropertyCard from "./PropertyCard";
import 'bulma/css/bulma.css';
import {fetchAPIData} from "../../../fetchAPIData";

const FeaturedProperties = () => {
    const [properties, setProperties] = useState([]);  // Empty array initially to hold the fetched data
    const [loading, setLoading] = useState(true);  // Loading state
    const [error, setError] = useState(null); // Error state

    // Simulate an API call with fetch to load properties from JSON
    useEffect(() => {
        const loadProperties = async () => {
            try {
                const properties = await fetchAPIData('/propertiesData.json');  // Call the helper function
                setProperties(properties);  // Store the fetched data in state
                setLoading(false);  // Set loading to false once data is fetched
            } catch (err) {
                setError(err.message);  // Set error message if something goes wrong
                setLoading(false);
            }
        };

        loadProperties();
    }, []);

    if (loading) {
        return <div>Loading properties...</div>;  // Show a loading state while fetching data
    }

    if (error) {
        return <div>Error: {error}</div>;  // Show error if fetching fails
    }

    // Split into 3 columns using slice()
    const column1 = properties.slice(0, 2); // First 2 items
    const column2 = properties.slice(2, 4); // Next 2 items
    const column3 = properties.slice(4, 6); // Last 2 items

    return (
        <div><h3 className="title is-3 has-text-black mt-6 mb-6 pt-0">Featured Properties</h3>

            {/*add dividing lines here 2 bars*/}
            <div className="double-underline mb-6 has-text-center"></div>

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