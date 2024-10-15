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
 * TODO: Add double underline
 * TODO: import 3 Article cards into 3 columns of 1 (or grid)
 * under this is a rectangular button "VIEW ALL NEWS" rounded corners border and tranparent background COMPLETE 13/10/24
 * TODO: Article cards (will be another component props for Title, Summary, Availability, Tags, CommentCount, image, articleLink
 *
 * REFERENCES:
 */
import React from 'react';
import 'bulma/css/bulma.css';
import ArticlesCard from "./ArticlesCard";


const RecentArticles = () => {

    const articles = [
        {title: "How to get your dream property for the best price?",
            summary: "Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.",
            date: "July 30, 2014",
            tags: "Properties, Prices, best deals",
            image: "http://placehold.it/766x515",
            link: "#",
            mediaType: "fa fa-file-text",
            commentsCount: "2"},
        {title: "7 tips to get the best mortgage.",
            summary: "Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.",
            date: "July 24, 2014",
            tags: "Tips, Mortgage",
            image: "http://placehold.it/766x515",
            link: "#",
            mediaType: "fa fa-file-video",
            commentsCount: "4"},
        {title: "House, location or price: What's the most important factor?",
            summary: "Sed rutrum urna id tellus euismod gravida. Praesent placerat, mauris ac pellentesque fringilla, tortor libero condimen.",
            date: "July 05, 2014",
            tags: "Location, Price, House",
            image: "http://placehold.it/766x515",
            link: "#",
            mediaType: "fa fa-file-text",
            commentsCount: "1"},
        ];

    // Split into 3 columns using slice()
    const column1 = articles.slice(0, 1); // First 1 items
    const column2 = articles.slice(1, 2); // Next 1 items
    const column3 = articles.slice(2, 3); // Last 1 items

    return (
        <div>
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