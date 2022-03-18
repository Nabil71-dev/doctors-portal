import { Navigate, Outlet} from "react-router-dom";
import { useContext } from 'react';
import { contextAuth } from "../../../App";

export default function PrivateVerify() {
    const [logininfo] = useContext(contextAuth);
    return (logininfo.email || sessionStorage.getItem('token')) ? (<Outlet />) :
        (<Navigate to="/login" />);
}