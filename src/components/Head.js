/**
 * Nav Bar
 *
 * NavBar class component for use across all Pages
 *
 * FILE NAME:   NavBar.js
 * Location:    /src/components
 * Created:     8/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * TODO: create a reusable Nav bar component for the use on all pages
 *
 *
 */

import React from 'react';

const Head = () => {
    return (
        <head>
            <meta charSet="utf-8"/>

            {/*// <!-- Page Title -->*/}
            <title>One Ring Rentals - Home</title>

            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, maximum-scale=1"
            />

            {/*// <!-- IE6-8 support of HTML5 elements -->*/}
            {/*// <!--[if lt IE 9]>*/}
            {/*//   <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>*/}
            {/*// <![endif]-->*/}
            {/*//*/}
            {/*// <!-- Google Web Font -->*/}
            <link
                href="http://fonts.googleapis.com/css?family=Raleway:300,500,900%7COpen+Sans:400,700,400italic"
                rel="stylesheet"
                type="text/css"
            />

            {/*// <!-- Bootstrap CSS -->*/}
            <link href="/src/css/bootstrap.min.css" rel="stylesheet"/>

            {/*// <!-- Template CSS -->*/}
            <link href="/src/css/style.css" rel="stylesheet"/>

            {/*// <!-- Modernizr -->*/}
            <script src="/js/common/modernizr.js"></script>
        </head>
    );
};

export default Head;


