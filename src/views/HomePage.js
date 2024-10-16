import '../App.css';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import Carousel from '../components/homePage/Carousel';
import Content from "../components/homePage/Content";

function HomePage() {
    return (
        <div className="App m-0 p-0">
            <div id="wrapper">
                <Header className="App-header"></Header>
                <Carousel className="App-carousel"></Carousel>
                <Content></Content>
                <Footer className="App-footer"></Footer>
            </div>
        </div>
    );
}

export default HomePage;