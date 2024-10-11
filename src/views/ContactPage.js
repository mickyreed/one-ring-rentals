import '../App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ContactPage() {
    return (
        <div className="App m-0 p-0">
            <div id="wrapper">
                <Header className="App-header"></Header>
                <p>THIS IS THE CONTACT PAGE</p>
                <Footer className="App-footer"></Footer>
            </div>
        </div>
    );
}

export default ContactPage;