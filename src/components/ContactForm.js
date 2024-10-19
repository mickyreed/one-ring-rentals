/**
 * Contact Form
 *
 * Contact Form class component for home page
 *
 * FILE NAME:   ContactForm.js
 * Location:    /src/components/homepage
 * Created:     19/10/24
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 *
 * REFERENCES:
 *
 */

import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

const ContactForm = () => {
    return (
        <div className="column is-12 ">
            <h2 className="title is-2 has-text-centered has-text-black mt-6 pt-6">Contact Us</h2>

            {/*add dividing lines here 2 bars*/}
            <div className="double-underline mb-6 has-text-center"></div>

            <div className="contact-form">
                <div className="field">
                    <label
                        className="label is-display-flex has-text-black">Name
                    </label>
                    <div className="control">
                        <input
                            className="input is-medium has-background-light has-text-dark-90"
                            type="text"/>
                    </div>
                </div>
                <div className="field">
                    <label
                        className="label is-display-flex has-text-black">Email
                    </label>
                    <div className="control">
                        <input className="input is-medium has-background-light has-text-dark-90"
                               type="text"/>
                    </div>
                </div>
                <div className="field">
                    <label
                        className="label is-display-flex has-text-black">Subject
                    </label>
                    <div className="control">
                        <input
                            className="input is-medium has-background-light has-text-dark-90"
                            type="text"/>
                    </div>
                </div>
                <div className="field">
                    <label
                        className="label is-display-flex has-text-black">Message
                    </label>
                    <div className="control">
                                        <textarea
                                            className="textarea is-medium has-background-light has-text-black">
                                        </textarea>
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
    );
};

export default ContactForm;