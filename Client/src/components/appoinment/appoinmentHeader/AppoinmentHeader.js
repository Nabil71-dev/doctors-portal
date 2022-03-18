import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import chair from "../../../image/chair.png";


function AppoinmentHeader({handleDate}) {
   

    return (
        <main className="row height500 d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 className="header-text">Appoinment</h1>
                <div>
                    <Calendar onChange={handleDate} value={new Date()} />
                </div>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
}

export default AppoinmentHeader;