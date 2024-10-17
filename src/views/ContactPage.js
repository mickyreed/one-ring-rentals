import '../App.css';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import RecentArticles from "../components/homePage/recentArticles/RecentArticles";
import React from "react";

function ContactPage() {
    return (
        <div className="App m-0 p-0">
            {/*<div id="has-background-white">*/}
                <Header className="App-header"></Header>
                <div className="has-background-white mt-0 pt-0 pl-6 pr-6">
                    <div className="container has-background-white">
                        <div className="column is-12 ">
                            <h2 className="title is-2 has-text-centered has-text-black mt-6 pt-6">Contact Us</h2>

                            {/*add dividing lines here 2 bars*/}
                            <div className="double-underline mb-6 has-text-center"></div>

                            <div className="contact-form">
                                <div className="field">
                                    <label className="label is-display-flex has-text-black">Name</label>
                                    <div className="control">
                                        <input className="input is-medium has-background-light has-text-dark-90" type="text"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label is-display-flex has-text-black">Email</label>
                                    <div className="control">
                                        <input className="input is-medium has-background-light has-text-dark-90" type="text"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label is-display-flex has-text-black">Subject</label>
                                    <div className="control">
                                        <input className="input is-medium has-background-light has-text-dark-90" type="text"/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label is-display-flex has-text-black">Message</label>
                                    <div className="control">
                                        <textarea className="textarea is-medium has-background-light has-text-dark-90"></textarea>
                                    </div>
                                </div>
                                <div className="control is-display-flex pb-6 mb-6 mt-6">
                                    <button type="submit"
                                            className="button is-link has-text-weight-medium is-medium">Send
                                        Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer className="App-footer"></Footer>
            {/*</div>*/}
        </div>
    );
}

export default ContactPage;