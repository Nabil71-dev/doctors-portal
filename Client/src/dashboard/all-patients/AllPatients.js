import { useEffect, useState } from "react";
import Patients from "./Patients";

function AllPatients() {
    const [patients, setPatients] = useState({});

    useEffect(() => {
        fetch('http://localhost:8080/allpatients')
            .then(response => response.json())
            .then(data => setPatients(data))
    }, [])

    return (
        <>
            {
                (patients.length>0) && <Patients patients={patients}></Patients>
            }
        </>
    );
}

export default AllPatients;