/**
 * Recent Articles
 *
 * Recent Articles class component for home page
 *
 * FILE NAME:   RecentArticles.js
 * Location:    /src/components
 * Created:     13/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * create a Recent Articles component needs the following: COMPLETE 13/10/24
 * Column suits 2/3 wide Title is centred COMPLETE 13/10/24
 * Add double underline COMPLETE
 * import 3 Article cards into 3 columns of 1 (or grid) COMPLETE
 * under this is a rectangular button "VIEW ALL NEWS" rounded corners border and tranparent background COMPLETE 13/10/24
 * Article cards (will be another component props for Title, Summary, Availability, Tags, CommentCount, image, articleLink COMPLETE
 *
 * REFERENCES:
 */
import React, {useEffect, useState} from 'react';
import 'bulma/css/bulma.css';
import ArticlesCard from "./ArticlesCard";
import {fetchAPIData} from "../../js/fetchAPIData";


const RecentArticles = () => {

    const [articles, setArticles] = useState([]);  // Empty array initially to hold the fetched data
    const [loading, setLoading] = useState(true);  // Loading state
    const [error, setError] = useState(null); // Error state

    // Simulate an API call with fetch to load properties from JSON
    useEffect(() => {
        const loadArticles = async () => {
            try {
                const articles = await fetchAPIData('/articlesData.json');  // Call the helper function
                setArticles(articles);  // Store the fetched data in state
                setLoading(false);  // Set loading to false once data is fetched
            } catch (err) {
                setError(err.message);  // Set error message if something goes wrong
                setLoading(false);
            }
        };

        loadArticles();
    }, []);

    if (loading) {
        return <div>Loading articles...</div>;  // Show a loading state while fetching data
    }

    if (error) {
        return <div>Error: {error}</div>;  // Show error if fetching fails
    }

    // Split into 3 columns using slice()
    const column1 = articles.slice(0, 1); // First 1 items
    const column2 = articles.slice(1, 2); // Next 1 items
    const column3 = articles.slice(2, 3); // Last 1 items

    return (
        <div className="">
            <h3 className="title is-3 has-text-black mt-6 mb-6">Recent Articles</h3>

            {/*add dividing lines here 2 bars*/}
            <div className="double-underline mb-6 has-text-center"></div>

                <div className="columns">
                    <div className="column is-one-third">
                        {column1.map((article, index) => (
                            <ArticlesCard key={index} {...article} />
                        ))}
                    </div>
                    <div className="column is-one-third">
                        {column2.map((article, index) => (
                            <ArticlesCard key={index} {...article} />
                        ))}
                    </div>
                    <div className="column is-one-third">
                        {column3.map((article, index) => (
                            <ArticlesCard key={index} {...article} />
                        ))}
                    </div>
                </div>

                <div className="center">
                    <a href="#" className="button has-background-white is-bordered has-text-black mt-6 mb-6">View All
                        News</a>
                </div>
        </div>
    );
};
export default RecentArticles;