function ServiceCard({servicedata}) {
    const {icon,title,description}=servicedata
    return ( 
        <div className="service-card col-md-3 text-center ms-4 me-4">
          <img className="mb-2" src={icon} alt="" />
          <h4 className="mb-4 header-text" >{title}</h4>
          <p className="text-secondary">{description}</p>
        </div>
     );
}

export default ServiceCard;