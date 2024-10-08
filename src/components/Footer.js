/**
 * Footer
 *
 * Footer class component for all pages
 *
 * FILE NAME:   Footer.js
 * Location:    /src/components
 * Created:     7/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * TODO: create a reusable footer component needs copyright and some social media icons/links
 *
 *
  */
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>One Ring Rentals </strong> | <a href="#">Copyright</a> Michael Reed 20056066.
                </p>
            </div>
        </footer>
    );
};

export default Footer;