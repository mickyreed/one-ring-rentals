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
 * ADD Hard Coded featured property, deals, regions, activity & recent news COMPLETE 12/10/24
 * Change to COMPONENTS for hardcoded featured property, deals, regions, activity & recent news COMPLETE 13/10/24
 * TODO: Continue to adjust styles and classNames to suit react bulma
 *
 */
import React from 'react';
// import 'bulma/css/bulma.css';
import FeaturedProperties from "./featuredProperties/FeaturedProperties";
import PopularRegions from "../popularRegions/PopularRegions";
import RecentArticles from "../recentArticles/RecentArticles";
import LastMinuteDeals from "./lastMinuteDeals/LastMinuteDeals";
import Activity from "./activity/Activity";


const Content = () => {
    return (
        <div className="content has-background-white mb-0 pb-6 ">
            <div className="container mb-0 pb-0">
                <div className="columns">

                    {/*// <!-- MAIN CONTENT -->*/}
                    <div className="column is-two-thirds">
                        <FeaturedProperties></FeaturedProperties>
                        <PopularRegions></PopularRegions>
                        <RecentArticles></RecentArticles>
                    </div>

                    {/*// <!-- SIDEBAR -->*/}
                    <div className="sidebar column is-one-third">
                        <LastMinuteDeals></LastMinuteDeals>
                        <Activity></Activity>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Content;

