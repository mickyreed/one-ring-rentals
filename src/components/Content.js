/**
 * Content
 *
 * Content class component for home page
 *
 * FILE NAME:   Content.js
 * Location:    /src/components
 * Created:     12/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * create a Content component needs the following:
 * Column 2/3 wide large padding on left Content Centered COMPLETE 12/10/24
 * Column 1/3 wide large padding on right Content centered COMPLETE 12/10/24
 * ADD Hard Coded featured property, deals, regions, activity & recent articles COMPLETE 12/10/24
 * TODO: Change to COMPONENTS for hardcoded featured property, deals, regions, activity & recent articles
 * TODO: Continue to adjust styles and classNames to suit react bulma
 *
 */
import React from 'react';
import 'bulma/css/bulma.css';
import FeaturedProperties from "./FeaturedProperties";
import PopularRegions from "./PopularRegions";
import RecentArticles from "./RecentArticles";
import LastMinuteDeals from "./LastMinuteDeals";
import Activity from "./Activity";


const Content = () => {
    return (
        <div className="content has-background-white ">
            <div className="container ">
                <div className="columns">

                    {/*// <!-- BEGIN MAIN CONTENT -->*/}
                    <div className="column is-two-thirds">
                        <FeaturedProperties></FeaturedProperties>
                        <PopularRegions></PopularRegions>
                        <RecentArticles></RecentArticles>
                    </div>
                    {/*// <!-- END MAIN CONTENT -->*/}

                    {/*// <!-- BEGIN SIDEBAR -->*/}
                    <div className="sidebar column is-one-third">
                        <LastMinuteDeals></LastMinuteDeals>
                        <Activity></Activity>
                    </div>
                    {/*// <!-- END SIDEBAR -->*/}

                </div>
            </div>
        </div>
    );
};
export default Content;

