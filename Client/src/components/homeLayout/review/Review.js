function Review({ reviewdata }) {
    const { description, name, place, pic } = reviewdata
    return (
        <div className="col-md-4">
            <div className="border p-4">
                <p className="text-secondary">{description}</p>
                <div className="d-flex">
                    <img className="reviewer" src={pic} alt="" />
                    <div>
                        <h4 className="header-text bg-main mt-3">{name}</h4>
                        <p className="text-secondary">{place}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;