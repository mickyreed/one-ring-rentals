import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/font-awesome.css'; //this has social media icons

import './css/index.css';
import App from './App';
import reportWebVitals from './js/reportWebVitals';
import { RegionsProvider } from './contexts/RegionsContext';
import { LanguageProvider } from './contexts/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

      <React.StrictMode>
          <RegionsProvider>
              <LanguageProvider>
                  <App></App>
              </LanguageProvider>
          </RegionsProvider>
      </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
