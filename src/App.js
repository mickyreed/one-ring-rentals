import logo from './logo.svg';
import './App.css';
// import './footer.css';
// import './css/font-awesome.css';
// import './css/font.css';
// import './css/style.less';
// import React from "react";
// import 'bulma/css/bulma.min.css';
import Head from './components/Head';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

function App() {
  return (
      <div className="App m-0 p-0">
          <div id="wrapper">
              {/*<Head className="App-head"></Head>*/}
              <Header className="App-header"></Header>
              <Carousel className="App-carousel"></Carousel>
              <Footer className="App-footer"></Footer>
          </div>
      </div>
          );
          }

          export default App;
