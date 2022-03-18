import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function InfoCard({ info }) {
    const { title, description, icon,bg } = info;
    return (
        <div className="col-md-3 text-white ms-4 me-4">
            <div className={`d-flex info-${bg} infoCard p-2`}>
                <FontAwesomeIcon className="info-icon" icon={icon} />
                <div>
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default InfoCard;