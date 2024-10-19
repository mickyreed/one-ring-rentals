/**
 * Contacts Page
 *
 * Contacts Page class component for all pages
 *
 * FILE NAME:   ContactsPage.js
 * Location:    /src/views
 * Created:
 * Author:      Michael Reed 20056066@tafe.wa.edu.au
 *
 */

import '../css/App.css';
import ContactForm from "../components/ContactForm";
import React from "react";

function ContactPage() {
    return (
        <div className="App m-0 p-0">
                <div className="has-background-white mt-0 pt-0 pl-6 pr-6">
                    <div className="container has-background-white">
                        <ContactForm></ContactForm>
                    </div>
                </div>
        </div>
    );
}
export default ContactPage;