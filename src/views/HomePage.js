/**
 * Home Page
 *
 * Home Page class component for all pages
 *
 * FILE NAME:   HomePage.js
 * Location:    /src/views
 * Created:
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 */

import '../css/App.css';
import Carousel from '../components/homePage/Carousel';
import Content from "../components/homePage/Content";
import FooterTop from "../components/global/FooterTop";
import AdvancedSearch from "../components/homePage/AdvancedSearch";

function HomePage() {
    return (
            <div className="App m-0 p-0">
                <div id="wrapper">
                    <Carousel className="App-carousel"></Carousel>
                    <AdvancedSearch className="App-advanced-search"></AdvancedSearch>
                    <Content className="App-content"></Content>
                    <FooterTop className="App-footer-top"></FooterTop>
                </div>
            </div>
    );
}

export default HomePage;