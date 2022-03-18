import { useState } from "react";
import AppoinmentForm from "../appoinmentform/AppoinmentForm";

function BookingCard({ bookingdata, date }) {

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    const {  subject, bookinghour, totalspace } = bookingdata;

    return (
        <div className="col-md-4 mb-4">
            <div className=" card border p-3">
                <div className="card-body text-center">
                    <h4 className="header-text bg-main">{subject}</h4>
                    <h6 className="header-text">{bookinghour}</h6>
                    <p className="text-secondary">{totalspace} SPACE AVAILABLE</p>
                    <button onClick={openModal} className="btn btn-main">BOOK APPOINMENT</button>
                    <AppoinmentForm modalIsOpen={modalIsOpen} date={date} appoinmentOn={subject} closeModal={closeModal}/>
                </div>
            </div>
        </div>
    );
}

export default BookingCard;