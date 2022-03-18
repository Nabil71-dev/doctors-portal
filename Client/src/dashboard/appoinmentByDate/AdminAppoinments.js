import { Calendar } from "react-calendar";
import { contextAuth } from "../../App";
import {  useEffect,useState,useContext } from "react";
import 'react-calendar/dist/Calendar.css'
import AppoinmentByDate from "./AppoinmentByDate";

function AdminAppoinment() {
    // eslint-disable-next-line no-unused-vars
    const [logininfo,setLogininfo] = useContext(contextAuth);
    const [date, setDate] = useState(new Date());
    const [appoinments, setAppoinments] = useState(null);

    const handleDateChange = (selected_date) => {
        setDate(selected_date);
    }

    useEffect(() => {
        fetch('http://localhost:8080/appoinmentsByDate', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ selected_date:date , email:logininfo.email })
        })
            .then(response => response.json())
            .then(result => {
                setAppoinments(result)
            })
    }, [date,logininfo.email])

    return (
        <>
            <h3 className="header-text">Appoinment</h3>
            <div className="col-5  mx-auto">
                <Calendar onChange={handleDateChange} value={new Date()} />
            </div>

            <div className="col-7 mx-auto">
                <p className="text-secondary text-end">{`${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`}</p>
                {
                    appoinments && <AppoinmentByDate appoinment_data={appoinments} />
                }
            </div>
        </>
    );
}

export default AdminAppoinment;