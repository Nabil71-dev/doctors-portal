import { useState, useEffect, useContext } from 'react';
import { contextAuth } from '../../App';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faFilePdf, faUser, faSignOutAlt, faCalendar, faHome, faUserPlus } from '@fortawesome//free-solid-svg-icons';

function SideNav() {
    const [logininfo] = useContext(contextAuth);
    const [isDoc, setDoc] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8080/isdoctor', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email: logininfo.email })
        })
            .then(response => response.json())
            .then(data => setDoc(data))
    }, [logininfo])

    return (
        <div className="Bg-main side-nav">
            <Link className="nav-link ms-4" to="/"><FontAwesomeIcon className="me-2" icon={faHome} />Home</Link>
            <Link className="nav-link ms-4" to="/dashboard/appoinments"><FontAwesomeIcon className="me-2" icon={faCalendar} />Appoinments</Link>
            {
                isDoc && <>
                    <Link className="nav-link ms-4" to="/dashboard/allpatients"><FontAwesomeIcon className="me-2" icon={faUser} />Patients</Link>
                    <Link className="nav-link ms-4" to="/dashboard/adddoctor"><FontAwesomeIcon className="me-2" icon={faUserPlus} />Add doctor</Link>
                    <Link className="nav-link ms-4" to=""><FontAwesomeIcon className="me-2" icon={faFilePdf} />Prescriptions</Link>
                    <Link className="nav-link ms-4" to=""><FontAwesomeIcon className="me-2" icon={faCog} />Settings</Link>
                </>
            }
            <Link className="nav-link ms-4" to=""><FontAwesomeIcon className="me-2" icon={faSignOutAlt} />Logout</Link>
        </div>
    );
}

export default SideNav;