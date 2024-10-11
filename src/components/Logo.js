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
 */

import React from 'react';

const Logo = () => {
    return (
        <Logo className="navbar-item">
            <div>
                <a href="../App.js"
                ><img src="/images/logo.png" alt="One Ring Rentals" width="187" height="85"/></a>
            </div>
        </Logo>
    );
};

export default Logo;