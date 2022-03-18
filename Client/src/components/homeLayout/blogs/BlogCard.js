import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function BlogCard({ blogdata }) {
    const { name, date, title, description, pic } = blogdata;
    return (
        <div className="col-md-4 blog-container">
            <div className="border p-4">
                <div className="d-flex">
                    <img className="reviewer" src={pic} alt="" />
                    <div>
                        <h5 className="header-text mt-4">{name}</h5>
                        <p className="text-secondary">{date}</p>
                    </div>
                </div>
                <h4 className="header-text mt-3">{title}</h4>
                <p className="text-secondary">{description}</p>
            </div>
            <div className="overlay">
                <h5 className="header-text overlay-text">{name}</h5>
                <p className="text-white overlay-text">{date}</p>
                <h4 className="header-text overlay-text">{title}</h4>
                <FontAwesomeIcon className="overlay-icon" icon={faArrowRight}/>
            </div>
        </div>
    );
}

export default BlogCard;