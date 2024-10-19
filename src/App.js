/**
 * App
 *
 * Main App File
 *
 * FILE NAME:   RegionsPage.js
 * Location:    /src/
 * Created:
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 */

import './css/App.css';

// REFERENCE:
// useContext https://dmitripavlutin.com/react-context-and-usecontext/#:~:text=React%20context%20provides%20data%20to%20components%20no%20matter,global%20state%2C%20theme%2C%20services%2C%20user%20settings%2C%20and%20more.
// https://www.freecodecamp.org/news/react-context-api-explained-with-examples/
// https://react.dev/learn/passing-data-deeply-with-context
// Photo images all from https://picsum.photos/
// Faster load times with images https://chatgpt.com/share/67116c8f-2144-8005-9868-fab8ae9325f0


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import NewsPage from "./views/NewsPage";
import ContactPage from "./views/ContactPage";
import RegionsPage from "./views/RegionsPage";
import Header from './components/global/Header';
import Footer from './components/global/Footer';

function App() {
    const languages = ['English', 'Deutsch', 'Espanol', 'Francais', 'Portugues'];

  return (
          <Router>
              <div className="App m-0 p-0">
                  <Header languages={languages} ></Header>
                  <div id="wrapper">
                      <Routes>
                          <Route path="/" element={<HomePage />} />
                          <Route path="/news" element={<NewsPage />} />
                          <Route path="/contact" element={<ContactPage />} />
                          <Route path="/regions" element={<RegionsPage />} />
                      </Routes>
                  </div>
                  <Footer></Footer>
              </div>
          </Router>

  );
}

export default App;
