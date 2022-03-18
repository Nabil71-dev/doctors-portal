import Navbar from "../../shared_compo/navbar/Navbar";
import HeaderBody from "../headerBody/HeaderBody";
import BusinessInfo from "../businessInfo/BusinessInfo";

function Header() {
  return (
    <div className="header-bg">
      <Navbar color="white"/>
      <HeaderBody />
      <BusinessInfo />
    </div>
  );
}

export default Header;