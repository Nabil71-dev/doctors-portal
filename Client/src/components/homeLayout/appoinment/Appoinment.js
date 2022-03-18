import doctor from '../../../image/doctor.png';

function Appoinement() {
    return (
        <section className="appoinment-container mt-5">
            <div className="row  mx-auto appoinment">
                <div className='col-md-5'>
                    <img className="appoinment-bg" src={doctor} alt="" />
                </div>
                <div className='col-md-6 appoinment-body my-auto '>
                    <h5 className="bg-main">APPOINMENT</h5>
                    <h3 className="header-text mb-4 text-white">Make an appoinment Tody</h3>
                    <p className="text-secondary mb-4 text-white">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</p>
                    <button className="btn btn-main">Learn more</button>
                </div>
            </div>
        </section>
    );
}
export default Appoinement;