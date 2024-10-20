

// import '../css/App.css';
import Carousel from '../components/homePage/Carousel';
import Content from "../components/homePage/Content";
import FooterTop from "../components/global/FooterTop";
import AdvancedSearch from "../components/homePage/AdvancedSearch";

const HomePage = () => {
    return (
        <div>
            <Carousel className="App-carousel"></Carousel>
            <AdvancedSearch className="App-advanced-search"></AdvancedSearch>
            <Content className="App-content"></Content>
            <FooterTop className="App-footer-top"></FooterTop>
        </div>
    );
};

export default HomePage;