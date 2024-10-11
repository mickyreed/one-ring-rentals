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
import '../footer.css';

const Footer = () => {
    return (
        <footer id="footer" className="footer has-background-white has-text-black pl-0 pr-0 mb-0 pb-0">
            <div id="footer-top" className="container">
                <div className="columns">
                    <div className="column is-3">
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
                    <div className="column is-3">
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
                    <div className="column is-6">
                        <h3 className="title is-5 has-text-black">Popular regions</h3>
                        <div className="columns">
                            <div className="column is-6">
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
                                            ><img style={{width: 60, height: 60}} src="http://placehold.it/760x670" alt=""
                                            /></a>
                                        </div>
                                        <p>
                                            <a href="#">Eriador</a></p>
                                    </li>
                                    <li className="footer-list-item">
                                        <div className="image">
                                            <a href="#"
                                            ><img style={{width: 60, height: 60}} src="http://placehold.it/760x670" alt=""
                                            /></a>
                                        </div>
                                        <p className="">
                                            <a href="#">Bay of Belfalas</a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="column is-6">
                                <ul className="footer-listings">
                                    <li className="footer-list-item">
                                        <div className="image">
                                            <a href="#"
                                            ><img style={{width: 60, height: 60}} src="http://placehold.it/760x670" alt=""
                                            /></a>
                                        </div>
                                        <p><a href="#">Mordor</a></p>
                                    </li>
                                    <li className="footer-list-item">
                                        <div className="image">
                                            <a href="#"
                                            ><img style={{width: 60, height: 60}} src="http://placehold.it/760x670"
                                                  alt=""
                                            /></a>
                                        </div>
                                        <p><a href="#">Arnor</a></p>

                                    </li>
                                    <li className="footer-list-item">
                                        <div className="image">
                                            <a href="#"
                                            ><img style={{width: 60, height: 60}} src="http://placehold.it/760x670"
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

            {/*// <!-- BEGIN COPYRIGHT -->*/}
            <div id="copyright" className="has-background-grey-lighter ml-0 mr-0 pl-0 pr-0 mt-6">
                <div className="container">
                    <div className="columns is-display-flex">
                        <div className="column is-6 is-align-content-center">
                            &copy; 2014 One Ring Rentals
                        </div>
                        <div className="column is-6 is-align-self-flex-end">
                            {/*// <!-- BEGIN SOCIAL NETWORKS -->*/}
                            <ul className="social-networks is-flex">
                                <li>
                                    <a href="#"><i className="fa fa-facebook
                                    box-is-clear fa-border has-radius-normal p-3 m-2"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-twitter
                                     box-is-clear fa-border has-radius-normal p-3 m-2"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-google
                                     box-is-clear fa-border has-radius-normal p-3 m-2"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-pinterest
                                     box-is-clear fa-border has-radius-normal p-3 m-2"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-youtube
                                     box-is-clear fa-border has-radius-normal p-3 m-2"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-rss
                                     box-is-clear fa-border has-radius-normal p-3 m-2"></i></a>
                                </li>
                            </ul>
                            {/*// <!-- END SOCIAL NETWORKS -->*/}
                        </div>
                    </div>
                </div>
            </div>
            {/*// <!-- END COPYRIGHT -->*/}
        </footer>
    );
};

export default Footer;