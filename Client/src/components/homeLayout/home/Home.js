import Appoinement from "../appoinment/Appoinment";
import Blogs from "../blogs/Blogs";
import Contact from "../contactus/Contact";
import DentalCare from "../dentalCare/DentalCare";
import Doctors from "../doctors/Doctors";
import Footer from "../../shared_compo/footer/Footer";
import Header from "../header/Header";
import Service from "../services/Services";
import Testimonial from "../testimonial/Testimonial";

function Home() {
    return ( 
    <>
      <Header />
      <Service />
      <DentalCare />
      <Appoinement />
      <Testimonial />
      <Blogs />
      <Doctors />
      <Contact />
      <Footer />
    </>
    );
}

export default Home;