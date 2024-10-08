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
        <footer id="footer">
            <div id="footer-top" className="container">
                <div className="row">
                    <div className="block col-sm-3">
                        <a href="#"
                        ><img src="images/logo.png" alt="One Ring Rentals"
                        /></a>
                        <br/><br/>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                            commodo eros nibh, et dictum elit tincidunt eget. Pellentesque
                            volutpat quam dignissim, convallis elit id, efficitur sem.
                            Vivamus ac scelerisque sem. Aliquam sed enim rutrum nibh gravida
                            pellentesque nec at metus.
                        </p>
                    </div>
                    <div className="block col-sm-3">
                        <h3>Helpful Links</h3>
                        <ul className="footer-links">
                            <li><a href="#">All rentals</a></li>
                            <li><a href="#">List your rental</a></li>
                            <li><a href="#">Read our FAQs</a></li>
                        </ul>
                    </div>
                    <div className="block col-sm-6">
                        <h3>Popular regions</h3>
                        <div className="row">
                            <div className="col-sm-6">
                                <ul className="footer-listings">
                                    <li>
                                        <div className="image">
                                            <a href="properties-detail.html"
                                            ><img src="http://placehold.it/760x670" alt=""
                                            /></a>
                                        </div>
                                        <p><a href="properties-detail.html">Rhovanion</a></p>
                                    </li>
                                    <li>
                                        <div className="image">
                                            <a href="properties-detail.html"
                                            ><img src="http://placehold.it/760x670" alt=""
                                            /></a>
                                        </div>
                                        <p><a href="properties-detail.html">Eriador</a></p>
                                    </li>
                                    <li>
                                        <div className="image">
                                            <a href="properties-detail.html"
                                            ><img src="http://placehold.it/760x670" alt=""
                                            /></a>
                                        </div>
                                        <p>
                                            <a href="properties-detail.html">Bay of Belfalas</a>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6">
                                <ul className="footer-listings">
                                    <li>
                                        <div className="image">
                                            <a href="properties-detail.html"
                                            ><img src="http://placehold.it/760x670" alt=""
                                            /></a>
                                        </div>
                                        <p><a href="properties-detail.html">Mordor</a></p>
                                    </li>
                                    <li>
                                        <div className="image">
                                            <a href="properties-detail.html"
                                            ><img src="http://placehold.it/760x670" alt=""
                                            /></a>
                                        </div>
                                        <p><a href="properties-detail.html">Arnor</a></p>
                                    </li>
                                    <li>
                                        <div className="image">
                                            <a href="properties-detail.html"
                                            ><img src="http://placehold.it/760x670" alt=""
                                            /></a>
                                        </div>
                                        <p><a href="properties-detail.html">Forlindon</a></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*// <!-- BEGIN COPYRIGHT -->*/}
            <div id="copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            &copy; 2014 One Ring Rentals

                            {/*// <!-- BEGIN SOCIAL NETWORKS -->*/}
                            <ul className="social-networks">
                                <li>
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-google"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-youtube"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-rss"></i></a>
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