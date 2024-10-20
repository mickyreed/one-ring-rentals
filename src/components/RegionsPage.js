/**
 * Regions Page
 *
 * Regions Page class component for all pages
 *
 * FILE NAME:   regions.js
 * Location:    /src/views
 * Created:
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 */

// import '../css/App.css';
import PopularRegions from "../components/popularRegions/PopularRegions";
import React from "react";

function Regions() {
    return (
        <div className="App m-0 p-0 has-background-white mr-6 ml-6">
            <div id="wrapper">
                <div className="wrapper mx-6 my-6 pb-6">
                    <div className="columns">
                        {/*// <!-- BEGIN MAIN CONTENT -->*/}
                        <div className="column is-fullwidth">
                            <PopularRegions></PopularRegions>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Regions;