import '../App.css';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import PopularRegions from "../components/homePage/popularRegions/PopularRegions";
import React from "react";
import RecentArticles from "../components/homePage/recentArticles/RecentArticles";

function RegionsPage() {
    return (
        <div className="App m-0 p-0 has-background-white">
            <div id="wrapper">
                <Header className="App-header"></Header>
                <div className="wrapper mx-6 my-6 pb-6">
                    <div className="columns">
                        {/*// <!-- BEGIN MAIN CONTENT -->*/}
                        <div className="column is-fullwidth">
                            <PopularRegions></PopularRegions>
                        </div>
                    </div>
                </div>
                <Footer className="App-footer"></Footer>
            </div>
        </div>
    );
}

export default RegionsPage;