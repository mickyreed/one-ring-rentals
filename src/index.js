import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/font-awesome.css'; //this has social media icons

// import './css/font.css';
// import './css/style.less';
// import 'bulma/css/bulma.min.css';

import './css/index.css';
import App from './App';
import HomePage from "./views/HomePage";
import NewsPage from "./views/NewsPage";
import ContactPage from "./views/ContactPage";
import RegionsPage from "./views/RegionsPage";

import reportWebVitals from './js/reportWebVitals';
import { RegionsProvider } from './contexts/RegionsContext';
import {
    createBrowserRouter,
    RouterProvider,

} from "react-router-dom";

import "./css/index.css";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "/",
        element: <HomePage/>,
    },
    {
        path: "news",
        element: <NewsPage/>,
    },
    {
        path: "contact",
        element: <ContactPage/>,
    },
    {
        path: "regions",
        element: <RegionsPage/>,
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

      <React.StrictMode>
          <RegionsProvider>
            <RouterProvider router={router} />
          </RegionsProvider>
      </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
