import Review from "../review/Review";
import jack from "../../../image/people-1.png";
import jhill from "../../../image/people-2.png";
import mill from "../../../image/people-3.png";

const reviewData=[
    {
        name:'Jack',
        place:'New York',
        pic:jack,
        description:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available'
    },
    {
        name:'jhill',
        place:'Florida',
        pic:jhill,
        description:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available'
    },
    {
        name:'mill',
        place:'Silicon valley',
        pic:mill,
        description:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available'
    }
]

function Testimonial() {
    return (
        <section className="container-xl mb-5">
            <div className="row mt-5">
                <div className="col-md-12">
                    <h5 className="bg-main">Testimonial</h5>
                    <h1 className="header-text">What's Our Patients <br /> Says</h1>
                </div>
            </div>
            <div className="row mt-5">
            {
                reviewData.map(data=><Review key={Math.random()*10} reviewdata={data} />)
            }
            </div>
        </section>

    );
}

export default Testimonial;