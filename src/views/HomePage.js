import '../App.css';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import Carousel from '../components/homePage/Carousel';
import Content from "../components/homePage/Content";
import FooterTop from "../components/global/FooterTop";

// import { RegionsProvider } from '../contexts/RegionsContext';

function HomePage() {
    return (
        // <RegionsProvider>
            <div className="App m-0 p-0">
                <div id="wrapper">
                    <Header className="App-header"></Header>
                    <Carousel className="App-carousel"></Carousel>

                    {/*// <!-- BEGIN HOME ADVANCED SEARCH -->*/}
                    <div id="home-advanced-search" className="open has-background-warning pt-6 pb-6">
                        <div id="opensearch"></div>
                        <div className="container px-6">
                            <div className="columns ">
                                <div className="column is-12 is-warning mx-0 px-0">
                                        <form>
                                            <div className="columns">
                                                {/* Arrive On */}
                                                <div className="column is-3 ">
                                                    <div className="control has-icons-right">
                                                        <input
                                                            type="text"
                                                            className="input"
                                                            placeholder="Arrive on..."
                                                            data-date-format="DD/MM/YYYY"
                                                        />
                                                        <span className="icon is-small is-right">
                                                    <i className="fas fa-calendar-alt"></i></span>
                                                    </div>
                                                </div>

                                                {/* Stay */}
                                                <div className="column is-2">
                                                    <div className="control">
                                                        <div className="select is-fullwidth">
                                                            <select id="search_status" name="search_status">
                                                                <option value="">Stay...</option>
                                                                <option value="1">1 Night</option>
                                                                <option value="2">2 Nights</option>
                                                                <option value="3">3 Nights</option>
                                                                <option value="4">4 Nights</option>
                                                                <option value="5">5 Nights</option>
                                                                <option value="6">6 Nights</option>
                                                                <option value="7">7 Nights</option>
                                                                <option value="8">8 Nights</option>
                                                                <option value="9">9 Nights</option>
                                                                <option value="10">10 Nights</option>
                                                                <option value="11">11 Nights</option>
                                                                <option value="12">12 Nights</option>
                                                                <option value="13">13 Nights</option>
                                                                <option value="14">14 Nights</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Bedrooms */}
                                                <div className="column is-2">
                                                    <div className="control">
                                                        <div className="select is-fullwidth">
                                                            <select id="search_bedrooms" name="search_bedrooms">
                                                                <option value="">Bedrooms</option>
                                                                <option value="0">0</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                                <option value="5plus">5+</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Location */}
                                                <div className="column is-4">
                                                    <div className="control">
                                                        <input
                                                            type="text"
                                                            className="input"
                                                            name="location"
                                                            placeholder="City, State, Country, etc..."
                                                        />
                                                    </div>
                                                </div>

                                                {/* Search Button */}
                                                <div className="column is-1">
                                                    <button type="submit" className="button is-fullwidth is-primary">
                                                        Search
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*// <!-- END HOME ADVANCED SEARCH -->*/}

                        <Content></Content>
                    <FooterTop></FooterTop>
                    <Footer className="App-footer"></Footer>
                </div>
            </div>
// </RegionsProvider>
)
    ;
}

export default HomePage;