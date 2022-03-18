import { Link } from 'react-router-dom';

function FooterLeft() {
    return (
        <>
            <ul className="mt-5">
                <li><Link to="">Emergency Dental Care</Link></li>
                <li><Link to="">Check Up</Link></li>
                <li><Link to="">Treatment of Personal Diseases</Link></li>
                <li><Link to="">Tooth Extraction</Link></li>
                <li><Link to="">Check Up</Link></li>
            </ul>
        </>
    );
}

export default FooterLeft;