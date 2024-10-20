/**
 * News Page
 *
 * News Page class component for all pages
 *
 * FILE NAME:   news.js
 * Location:    /src/views
 * Created:
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 */

import NewsPage from "../components/NewsPage";
import React from "react";

function News() {
    return (
        <div
            className="App m-0 p-0 has-background-white">
            <div id="wrapper">
                <div className="wrapper mr-6 ml-6">
                    <div className="columns">
                        {/*// <!-- BEGIN MAIN CONTENT -->*/}
                        <div className="column is-fullwidth">
                            <NewsPage></NewsPage>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;