/**
 * Logo
 *
 * Logo class component for all pages
 *
 * FILE NAME:   Logo.js
 * Location:    /src/components
 * Created:     10/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * TODO: BUG 10/10/24 MSR - THIS LOGO COMPONENT CAUSES REACT TO CRASH IF I TRY TO IMPLEMENT IN THE NAVBAR
 *
 */

import React from 'react';

const Logo = () => {
    return (
        <Logo>
            <a href="/"><img
                src="/images/logo.png"
                alt="One Ring Rentals"
            /></a>
        </Logo>
    );
};

export default Logo;