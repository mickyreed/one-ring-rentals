/**
 * BottomLInks
 *
 * BottomLinks class component for footer on main page
 *
 * FILE NAME:   BottomLinks.js
 * Location:    /src/components
 * Created:     16/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 * create a reusable footer component for information and links (HOmePage only) COMPLETE 16/10/24
 *
 *
  */
import React, { useContext } from 'react';
import { RegionsContext } from '../../contexts/RegionsContext';
import '../../footer.css';

const FooterTop = () => {

    const { regions, loading, error } = useContext(RegionsContext); // Use the context

    if (loading) {
        return <div>Loading regions...</div>;  // Show loading message
    }

    if (error) {
        return <div>Error: {error}</div>;  // Show error message if any
    }

    // Split into 3 columns using slice()
    const column1 = regions.slice(0, 3); // First 3 items
    const column2 = regions.slice(3, 6); // Next 3 items

    return (
        <footer id="footer" className="footer has-background-light has-text-black pl-4 pr-4 pb-6 pb-0">
            <div id="footer-top" className="container pl-2 pr-2">
                <div className="columns">
                    <div className="column is-one-quarter pr-3 is-align-content-start has-text-left">
                        <div className="footer-logo">
                            <a href="#"><img src="/images/logo.png" alt="One Ring Rentals"/></a>
                            {/*<br/><br/>*/}
                            <p className="pr-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                                commodo eros nibh, et dictum elit tincidunt eget. Pellentesque
                                volutpat quam dignissim, convallis elit id, efficitur sem.
                                Vivamus ac scelerisque sem. Aliquam sed enim rutrum nibh gravida
                                pellentesque nec at metus.
                            </p>
                        </div>
                    </div>
                    <div className="column is-one-quarter is-align-content-start has-text-left ml-4 mr-4">
                        <h3 className="title is-5 has-text-black pt-4 pb-4">Helpful Links</h3>
                        <ul className="footer-links">
                            <hr className="is-divider has-background-grey-lighter"/>
                            <li><a href="#">All rentals</a></li>
                            <hr className="is-divider has-background-grey-lighter"/>
                            <li><a href="#">List your rental</a></li>
                            <hr className="is-divider has-background-grey-lighter"/>
                            <li><a href="#">Read our FAQs</a></li>
                            <hr className="is-divider has-background-grey-lighter"/>
                        </ul>
                    </div>
                    <div className="column is-half is-align-content-start has-ext-left">
                        <h3 className="title is-5 has-text-black pt-4 has-text-left pl-4">Popular regions</h3>
                        <div className="columns pl-4">

                            {/* Column 1 */}
                            <div className="column is-half">
                                <ul className="footer-listings">
                                    {column1.map((region, index) => (
                                        <li key={index} className="footer-list-item">
                                            <div className="image">
                                                <a href={region.link}>
                                                    <img
                                                        style={{width: 60, height: 60}}
                                                        src={region.image} // Dynamically rendered image
                                                        alt={region.location} // Use the region name for alt text
                                                    />
                                                </a>
                                            </div>
                                            <p>
                                                <a href={region.link}>{region.location}</a> {/* Dynamically rendered region name */}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Column 2 */}
                            <div className="column is-half">
                                <ul className="footer-listings">
                                    {column2.map((region, index) => (
                                        <li key={index} className="footer-list-item">
                                            <div className="image">
                                                <a href={region.link}>
                                                    <img
                                                        style={{width: 60, height: 60}}
                                                        src={region.image}
                                                        alt={region.location}
                                                    />
                                                </a>
                                            </div>
                                            <p>
                                                <a href={region.link}>{region.location}</a>
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterTop;