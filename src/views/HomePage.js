import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Content from "../components/Content";

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