/**
 * News Page
 *
 * News Page class component for all pages
 *
 * FILE NAME:   news.js
 * Location:    /src/components
 * Created:
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 */

import RecentArticles from "../components/recentArticles/RecentArticles";
import React from "react";

const NewsPage = () => {
    return (
        <div
            className="App m-0 p-0 has-background-white">
            <div id="wrapper">
                <div className="wrapper mr-6 ml-6">
                    <div className="columns">
                        {/*// <!-- BEGIN MAIN CONTENT -->*/}
                        <div className="column is-fullwidth">
                            <RecentArticles></RecentArticles>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsPage;