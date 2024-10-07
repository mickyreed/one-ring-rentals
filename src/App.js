import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
        <Header className="App-header"></Header>
        <Carousel className="App-carousel"></Carousel>
        <Footer className="App-footer"></Footer>
    </div>
  );
}

export default App;
