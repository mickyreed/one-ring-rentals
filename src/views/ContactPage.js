import '../App.css';
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';
import ContactForm from "../components/homePage/ContactForm";
import React from "react";

function ContactPage() {
    return (
        <div className="App m-0 p-0">
            {/*<div id="has-background-white">*/}
                <Header className="App-header"></Header>
                <div className="has-background-white mt-0 pt-0 pl-6 pr-6">
                    <div className="container has-background-white">
                        <ContactForm></ContactForm>
                    </div>
                </div>
                <Footer className="App-footer"></Footer>
            {/*</div>*/}
        </div>
    );
}

export default ContactPage;