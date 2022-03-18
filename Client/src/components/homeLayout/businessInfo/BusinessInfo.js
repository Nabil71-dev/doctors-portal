import { faPhoneVolume, faMapLocation, faClock } from '@fortawesome/free-solid-svg-icons'
import InfoCard from "../infoCard/InfoCard";

const information = [
    {
        title: 'Openning hours',
        description: 'In publishing and graphic design',
        icon: faClock,
        bg: 'primary'
    },
    {
        title: 'Visit our location',
        description: 'Navy Hospitalgate,EPZ,chittagong',
        icon: faMapLocation,
        bg: 'secondary'
    },
    {
        title: 'Contact us now',
        description: '01952568994',
        icon: faPhoneVolume,
        bg: 'primary'
    }
]

function BusinessInfo() {
    return (
        <section className="row d-flex justify-content-center mt-5">
            {
                information.map(info => <InfoCard key={Math.random() * 10} info={info} />)
            }
        </section>
    );
}
export default BusinessInfo;