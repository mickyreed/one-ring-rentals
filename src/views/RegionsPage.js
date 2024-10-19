import '../css/App.css';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import PopularRegions from "../components/popularRegions/PopularRegions";
import React from "react";
import RecentArticles from "../components/recentArticles/RecentArticles";

function RegionsPage() {
    return (
        <div className="App m-0 p-0 has-background-white mr-6 ml-6">
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