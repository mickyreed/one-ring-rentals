/**
 * Footer
 *
 * Footer class component for all pages
 *
 * FILE NAME:   Footer.js
 * Location:    /src/components
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