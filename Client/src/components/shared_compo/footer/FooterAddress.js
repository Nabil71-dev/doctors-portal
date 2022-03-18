import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGooglePlusSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

function FooterAddress() {
    return (
        <>
            <h4 className="bg-main header-text">Our Adsress</h4>
            <p className="text-secondary">New York - 101010 Hudson Yards</p>
            <FontAwesomeIcon className="footer-icon bg-main" icon={faFacebookSquare} />
            <FontAwesomeIcon className="footer-icon bg-main" icon={faGooglePlusSquare} />
            <FontAwesomeIcon className="footer-icon bg-main" icon={faTwitterSquare} />

            <p>Call Now</p>
            <button className="btn btn-main">01952568994</button>
        </>
    );
}

export default FooterAddress;