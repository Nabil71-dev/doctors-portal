import image from "../../../image/people-1.png";
import BlogCard from './BlogCard';

const blogData = [
    {
        name: 'Dr.Ananta',
        date: '28-02-2022',
        title: '2 times of brush in a day can keep you healthy',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text',
        pic: image
    },
    {
        name: 'Dr.Khan',
        date: '02-03-2022',
        title: 'Brush your teeth after every meal',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text',
        pic: image
    },
    {
        name: 'Dr.Jalil',
        date: '04-03-2022',
        title: 'The tooth cancer is taking a challenge',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text',
        pic: image
    }
]
function Blogs() {
    return (
        <section className="container-xl f-border mb-5">
            <div className="text-center margin-top">
                <h5 className="bg-main header-text">OUR BLOG</h5>
                <h2 className="header-text">From Our Blog News</h2>
            </div>
            <div className="row mt-5">
                {
                    blogData.map(data => <BlogCard key={Math.random()*10} blogdata={data} />)
                }
            </div>
        </section>
    );
}

export default Blogs;