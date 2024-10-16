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
import React from 'react';
import '../../footer.css';

const FooterTop = () => {
    return (
        <footer id="footer" className="footer has-background-light has-text-black pl-0 pr-0 pb-6 pb-0">
            <div id="footer-top" className="container pl-6 pr-6">
                <div className="columns">
                    <div className="column is-one-quarter pr-3 is-align-content-start has-text-left">
                        <div className="footer-logo">
                            <a href="#"><img src="/images/logo.png" alt="One Ring Rentals"/></a>
                            <br/><br/>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                                commodo eros nibh, et dictum elit tincidunt eget. Pellentesque
                                volutpat quam dignissim, convallis elit id, efficitur sem.
                                Vivamus ac scelerisque sem. Aliquam sed enim rutrum nibh gravida
                                pellentesque nec at metus.
                            </p>
                        </div>
                    </div>
                    <div className="column is-one-quarter is-align-content-start has-text-left">
                        <h3 className="title is-5 has-text-black">Helpful Links</h3>
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
                    <div className="column is-half is-align-content-start has-text-left">
                        <h3 className="title is-5 has-text-black">Popular regions</h3>
                        <div className="columns">
                            <div className="column is-half">
                                <ul className="footer-listings">
                                    <li className="footer-list-item">
                                        <div className="image">
                                            <a href="#"
                                            ><img style={{width: 60, height: 60}} src="http://placehold.it/760x670"
                                                  alt=""
                                            /></a>
                                        </div>
                                            <p>
                                                <a href="#">Rhovanion</a></p>
                                    </li>
                                    <li className="footer-list-item">
                                        <div className="image">
                                            <a href="#"
                                            ><img style={{width: 60, height: 60}}
                                                  src="http://placehold.it/760x670" alt=""
                                            /></a>
                                        </div>
                                        <p>
                                            <a href="#">Eriador</a></p>
                                    </li>
                                    <li className="footer-list-item">
                                        <div className="image">
                                            <a href="#"
                                            ><img style={{width: 60, height: 60}}
                                                  src="http://placehold.it/760x670" alt=""
                                            /></a>
                                        </div>
                                        <p className="">
                                            <a href="#">Bay of Belfalas</a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="column is-half">
                                <ul className="footer-listings">
                                    <li className="footer-list-item">
                                        <div className="image">
                                            <a href="#"
                                            ><img style={{width: 60, height: 60}}
                                                  src="http://placehold.it/760x670" alt=""
                                            /></a>
                                        </div>
                                        <p><a href="#">Mordor</a></p>
                                    </li>
                                    <li className="footer-list-item">
                                        <div className="image">
                                            <a href="#"
                                            ><img style={{width: 60, height: 60}}
                                                  src="http://placehold.it/760x670"
                                                  alt=""
                                            /></a>
                                        </div>
                                        <p><a href="#">Arnor</a></p>

                                    </li>
                                    <li className="footer-list-item">
                                        <div className="image">
                                            <a href="#"
                                            ><img style={{width: 60, height: 60}}
                                                  src="http://placehold.it/760x670"
                                                  alt=""
                                            /></a>
                                        </div>
                                        <p><a href="#">Forlindon</a></p>
                                    </li>
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