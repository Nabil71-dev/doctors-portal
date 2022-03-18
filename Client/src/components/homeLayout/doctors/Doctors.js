import Doctor from './DoctorCard';
//import doctor from '../../../image/doctor-small.png';
import {useState,useEffect} from 'react';
// const doctorData = [
//     {
//         name: 'Dr. Anna Belle',
//         phone: '01952568994',
//         pic: doctor
//     },
//     {
//         name: 'Dr. Anna Belle',
//         phone: '01952568994',
//         pic: doctor
//     },
//     {
//         name: 'Dr. Anna Belle',
//         phone: '01952568994',
//         pic: doctor
//     }
// ]

function Doctors() {
    const [doctorData,setDoctorData]=useState({});
    useEffect(()=>{
        fetch('http://localhost:8080/getdoctors')
        .then(response=>response.json())
        .then(data=>setDoctorData(data));
    },[])
    return (
        <>
            <div className="f-border">
                <h5 className="header-text bg-main text-center mt-5">OUR DOCORS</h5>
                <div className="row mt-5">
                    {
                       (doctorData.length>0) && doctorData.map(data => <Doctor key={Math.random()*10} doctordata={data} />)
                    }
                </div>
            </div>
        </>

    );
}

export default Doctors;