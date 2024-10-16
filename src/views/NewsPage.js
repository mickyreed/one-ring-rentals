import '../App.css';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import RecentArticles from "../components/homePage/recentArticles/RecentArticles";
import React from "react";

function NewsPage() {
    return (
        <div
            className="App m-0 p-0 has-background-white">
            <div id="wrapper">
                <Header className="App-header"></Header>
                <div className="wrapper mr-6 ml-6">
                    <div className="columns">
                        {/*// <!-- BEGIN MAIN CONTENT -->*/}
                        <div className="column is-fullwidth">
                            <RecentArticles></RecentArticles>
                        </div>
                    </div>
                </div>
                <Footer className="App-footer"></Footer>
            </div>
        </div>
    );
}

export default NewsPage;