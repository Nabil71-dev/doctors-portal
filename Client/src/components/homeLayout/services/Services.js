import ServiceCard from "../serviceCard/ServiceCard";
import cavity from '../../../image/cavity.png';
import fluoride from '../../../image/fluoride.png';
import whitening from '../../../image/whitening.png';

const serviceData = [
    {
        icon: cavity,
        title: 'Cavity filling',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document '
    },
    {
        icon: fluoride,
        title: 'Flouride treatment',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document '
    },
    {
        icon: whitening,
        title: 'Teath whitening',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document '
    }
]

function Service() {
    return (
        <section className="service-container">
            <div className="text-center mb-3 mt-5">
                <h5 className="bg-main">Our services</h5>
                <h2 className="header-text">Services we provide</h2>
            </div>
            <div className="row d-flex justify-content-center mt-5 mb-5">
                {
                    serviceData.map(data => <ServiceCard key={Math.random()*10} servicedata={data} />)
                }
            </div>
        </section>
    );
}

export default Service;