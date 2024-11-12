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
 * create a reusable footer component with copyright and some social media icons/links COMPLETE
 *
 *
  */

const Footer = () => {
    return (
        <footer id="footer" className="footer has-text-black pl-0 pr-0 mb-0 pb-0 mt-0 pt-0">
            {/*// <!-- BEGIN COPYRIGHT -->*/}
            <div id="copyright" className="has-background-grey-lighter">
                <div className="container is-align-content-center">
                    <div className="columns is-align-content-center">
                        <div className="column is-half is-align-content-center ">
                            &copy; 2014 One Ring Rentals
                        </div>
                        <div className="column is-half is-centered">
                            {/*// <!-- BEGIN SOCIAL NETWORKS -->*/}
                            <ul className="social-networks is-flex pr-6 pl-6">
                                <li>
                                    {/*<a href="#">*/}
                                        <i className="fa fa-facebook
                                    {/*box-is-clear fa-border has-radius-normal has-text-grey p-3 m-2"></i>
                                    {/*</a>*/}
                                </li>
                                <li>
                                    {/*<a href="#">*/}
                                        <i className="fa fa-twitter
                                     box-is-clear fa-border has-radius-normal has-text-grey p-3 m-2"></i>
                                    {/*</a>*/}
                                </li>
                                <li>
                                    {/*<a href="#">*/}
                                        <i className="fa fa-google
                                     box-is-clear fa-border has-radius-normal has-text-grey p-3 m-2"></i>
                                    {/*</a>*/}
                                </li>
                                <li>
                                    {/*<a href="#">*/}
                                        <i className="fa fa-pinterest
                                     box-is-clear fa-border has-radius-normal has-text-grey p-3 m-2"></i>
                                    {/*</a>*/}
                                </li>
                                <li>
                                    {/*<a href="#">*/}
                                        <i className="fa fa-youtube
                                     box-is-clear fa-border has-radius-normal has-text-grey p-3 m-2"></i>
                                    {/*</a>*/}
                                </li>
                                <li>
                                    {/*<a href="#">*/}
                                        <i className="fa fa-rss
                                     box-is-clear fa-border has-radius-normal has-text-grey p-3 m-2"></i>
                                    {/*</a>*/}
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