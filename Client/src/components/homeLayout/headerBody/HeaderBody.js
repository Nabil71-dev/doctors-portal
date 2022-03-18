import chair from "../../../image/chair.png";
function HeaderBody() {
    return (
        <main className="row height500 d-flex align-items-center">
           <div className="col-md-4 offset-md-1">
               <h1 className="header-text">Your new smile <br /> Starts here</h1>
               <p className="text-secondary">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available</p>
               <button className="btn btn-main">GET APPOINMENT</button>
           </div>
           <div className="col-md-6">
               <img src={chair} alt="" className="img-fluid" />
           </div>
        </main>
    );
}

export default HeaderBody;