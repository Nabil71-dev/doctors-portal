import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Doctor({ doctordata }) {
    const { name,phone,image } = doctordata;
    
    return (
        <>
            <div className="col-md-3 mx-auto text-center">
                <img className="doctor-img" src={`data:image/png;base64,${image.img}`} alt="" />
                <h5 className="header-text">{name}</h5>
                <p><FontAwesomeIcon className="bg-main" icon={faPhone}/><span className="ms-3 text-secondary">{phone}</span></p>
            </div>
        </>
    );
}

export default Doctor;