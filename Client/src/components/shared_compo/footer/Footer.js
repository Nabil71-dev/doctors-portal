import FooterAddress from "./FooterAddress";
import FooterHealth from "./FooterHealth";
import FooterLeft from "./FooterLeft";
import FooterService from "./FooterService";

function Footer() {
    return (
        <>
            <section className="footerBg">
                <div className="row f-border">
                    <div className="col-md-3 mx-auto mt-5">
                        <FooterLeft />
                    </div>
                    <div className="col-md-3 mx-auto mt-5">
                        <FooterService />
                    </div>
                    <div className="col-md-3 mx-auto mt-5">
                        <FooterHealth />
                    </div>
                    <div className="col-md-2 mx-auto mt-5">
                        <FooterAddress />
                    </div>
                </div>
                <div className="row text-center mt-5">
                    <p>{new Date().getFullYear()} all right reserved by mahmudnabiliiuc@gmail.com</p>
                </div>
            </section>
        </>
    );
}

export default Footer;