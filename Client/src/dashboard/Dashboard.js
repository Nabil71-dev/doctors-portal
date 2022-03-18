
import AdminAppoinment from "./appoinmentByDate/AdminAppoinments";
import SideNav from "./side-nav/SideNav";
import { Routes, Route } from 'react-router-dom';
import AllPatients from "./all-patients/AllPatients";
import AddDoctor from "./add-doctor/AddDoctor";

function Dashboard() {
    return (
        <section className="row dashboard-bg">
            <div className="col-md-2">
                <SideNav />
            </div>
            <div className="col-md-9 row ms-2">
                <Routes>
                    <Route path="/appoinments" element={<AdminAppoinment />} />
                    <Route path="/allpatients" element={<AllPatients />} />
                    <Route path="/adddoctor" element={<AddDoctor />} />
                </Routes>
            </div>
        </section>
    );
}

export default Dashboard;