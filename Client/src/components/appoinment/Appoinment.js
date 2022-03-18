import { useState } from "react";
import Footer from "../shared_compo/footer/Footer";
import Navbar from "../shared_compo/navbar/Navbar";
import AppoinmentHeader from "./appoinmentHeader/AppoinmentHeader";
import BookAppoinment from "./bookAppoinment/BookAppoinment";

function Appoinments() {

    const [date, setDate] = useState(new Date())
    const handleDate = date => {
        
        setDate(date)
    }

    return (
        <>
            <Navbar color="secondary"/>
            <AppoinmentHeader handleDate={handleDate} />
            <BookAppoinment bookingDate={date}/>
            <Footer />
        </>
    );
}

export default Appoinments;