import { Link, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { contextAuth } from '../../../App';

function Navbar({ color }) {

    //Context just to check for the log in then log out function
    const [setLogininfo] = useContext(contextAuth);
    const logOut = () => {
        sessionStorage.clear();
        Navigate("/", {
            replace: true
        })
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link ms-4" to="/">Home</Link>
                        <Link className="nav-link ms-4" to="/appoinment">Patients</Link>
                        <Link className="nav-link ms-4" to="/dashboard">Dashboard</Link>
                        <Link className="nav-link ms-4" to="">Admin</Link>
                        <Link className={`nav-link ms-4 text-${color} me-3`} to="">Blog</Link>
                        <Link className={`nav-link ms-4 text-${color} me-3`} to="">Contact-us</Link>
                        {
                            setLogininfo && <Link onClick={logOut} className={`nav-link ms-4 text-${color} me-3`} to="">Logout</Link>
                        }
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;