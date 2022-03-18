import treatment from '../../../image/treatment.png';

function DentalCare() {
    return (
        <section className="treatment-container">
            <div className="row w-75 mx-auto">
                <div className='col-md-5'>
                    <img className="treatment-img" src={treatment} alt="" />
                </div>
                <div className='col-md-6 treatment-body my-auto'>
                    <h3 className="header-text mb-4">Execptional Dental Care, on Your Terms</h3>
                    <p className="text-secondary mb-4">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</p>
                    <button className="btn btn-main">Learn more</button>
                </div>
            </div>

        </section>
    );
}

export default DentalCare;