function Contact() {
    return (
        <section className="contact-container mt-5">
            <div className="row contact">
                <div className='col-md-12 text-center'>
                    <h5 className="bg-main mt-5">CONTACT US</h5>
                    <h2 className="header-text mb-4 text-white">Always Connect With used</h2>
                    <form action="" className="contact-form">
                        <input className="cantact-input" type="email" placeholder=" Email address" /> <br />
                        <input className="cantact-input" type="text" placeholder=" Subject" /><br />
                        <textarea className="cantact-textarea" placeholder=" Your message" /><br />
                        <button type="submit" className="btn btn-main">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;