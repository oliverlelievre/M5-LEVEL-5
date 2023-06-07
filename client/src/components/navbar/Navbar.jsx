import "../../styles/_navbar.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import logoImage from "../../images/Logo.png"
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo"><img src={logoImage} alt="logo" className="logoImage"></img></span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton">Home</button>
            <button className="navButton">Services</button>
            <button className="navButton">Tenants</button>
            <button className="navButton">About Us</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
