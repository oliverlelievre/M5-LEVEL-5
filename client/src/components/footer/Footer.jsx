import "../../styles/_footer.scss";
import instagram from "../../images/Instagram(1).png";
import twitter from "../../images/Twitter(1).png";
import facebook from "../../images/Facebook.png";
import linkedin from "../../images/Linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
        <h3 className="fHeading">Services</h3>
          <li className="fListItem">Property Management</li>
          <li className="fListItem">Building Management</li>
          <li className="fListItem">Rental Property Management</li>
          <li className="fListItem">Property Mangement Albany</li>
          <li className="fListItem">Body Corporate Administration</li>
          <li className="fListItem">Investment Properties</li>
          <li className="fListItem">Tenanted Property Sales</li>
          <li className="fListItem">Healthy Homes Standards</li>
          <li className="fListItem">Decluttering Service</li>
        </ul>
        <ul className="fList">
        <h3 className="fHeading">Tenants</h3>
          <li className="fListItem">Tenancy Applications</li>
          <br></br>
          <h3 className="fHeading">About Us</h3>
          <li className="fListItem">Management Team</li>
          <li className="fListItem">Gallery</li>
          <li className="fListItem">We're Hiring</li>
          <li className="fListItem">Disputes Process</li>
        </ul>

        <ul className="fList">
        <h3 className="fHeading">Contact</h3>
          <li className="fListItem"><a href="#">+64 9 391 4642</a></li>
          <li className="fListItem"><a href="#">+64 21 642 119</a></li>
          <li className="fListItem"><a href="#">info@metronz.co.nz</a></li>
          <br></br>
          <h3 className="fHeading">Location</h3>
          <li className="fListItem">Level 33, ANZ Centre, 23-29 Albert St
          <br></br> Auckland 1010, New Zealand</li>
        </ul>
        <ul className="fList">
        

        </ul>
      </div>
      <div className="fSocial">
        <div className="fInstagram">
          <a href="#"><img className="instagram" src={instagram} alt="instagram" /></a>
        </div>

        <div className="fTwitter">
          <a href="#"><img className="twitter" src={twitter} alt="twitter" /></a>
        </div>

        <div className="fFacebook">
          <a href="#"><img className="facebook" src={facebook} alt="facebook" /></a>
        </div>

        <div className="fLinkedin">
          <a href="#"><img className="linkedin" src={linkedin} alt="linkedin" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
