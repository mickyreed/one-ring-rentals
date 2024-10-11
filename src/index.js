import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/font-awesome.css';
import './css/font.css';
import './css/style.less';
import 'bulma/css/bulma.min.css';

import './index.css';
import App from './App';

import HomePage from "./views/HomePage";
import NewsPage from "./views/NewsPage";
import ContactPage from "./views/ContactPage";
import RegionsPage from "./views/RegionsPage";

import reportWebVitals from './reportWebVitals';

import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

import "./index.css";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "home",
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
    {/*<App />*/}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
