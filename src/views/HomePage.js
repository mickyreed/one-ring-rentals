import '../css/App.css';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import Carousel from '../components/homePage/Carousel';
import Content from "../components/homePage/Content";
import FooterTop from "../components/global/FooterTop";
import AdvancedSearch from "../components/homePage/AdvancedSearch";

// import { RegionsProvider } from '../contexts/RegionsContext';

function HomePage() {
    return (
            <div className="App m-0 p-0">
                <div id="wrapper">
                    <Header className="App-header"></Header>
                    <Carousel className="App-carousel"></Carousel>
                    <AdvancedSearch className="App-advanced-search"></AdvancedSearch>
                    <Content className="App-content"></Content>
                    <FooterTop className="App-footer-top"></FooterTop>
                    <Footer className="App-footer"></Footer>
                </div>
            </div>
    );
}

export default HomePage;