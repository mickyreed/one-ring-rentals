/**
 * _app
 *
 * Main _app File
 *
 * FILE NAME:   regions.js
 * Location:    /src/
 * Created:
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 */

import '../css/App.css';

// REFERENCE:
// useContext https://dmitripavlutin.com/react-context-and-usecontext/#:~:text=React%20context%20provides%20data%20to%20components%20no%20matter,global%20state%2C%20theme%2C%20services%2C%20user%20settings%2C%20and%20more.
// https://www.freecodecamp.org/news/react-context-api-explained-with-examples/
// https://react.dev/learn/passing-data-deeply-with-context
// Photo images all from https://picsum.photos/
// Faster load times with images https://chatgpt.com/share/67116c8f-2144-8005-9868-fab8ae9325f0

import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import React from 'react';
import { RegionsProvider } from '../contexts/RegionsContext'; // Adjust the path as needed

// Global styles
import '../css/App.css';
import '../css/ActivityCard.css';
import '../css/ArticlesCard.css';
import '../css/carousel.css';
import '../css/font.css';
import '../css/font-awesome.min.css';
import '../css/footer.css';
import '../css/index.css';
import '../css/owl.transitions.css';
import '../css/PropertyCard.css';
import '../css/RegionsCard.css';
import 'bulma/css/bulma.css';

function MyApp({ Component, pageProps}) {
    const languages = ['English', 'Deutsch', 'Espanol', 'Francais', 'Portugues'];

  return (
      <RegionsProvider>
              <div className="App m-0 p-0">
                  <Header languages={languages} />
                  <div id="wrapper">
                      <Component {...pageProps}/>
                  </div>
                  <Footer></Footer>
              </div>
      </RegionsProvider>

  );
}

export default MyApp;
