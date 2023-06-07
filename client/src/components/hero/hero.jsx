import "../../styles/_hero.scss"
import SearchBtn from "../../images/Search.png";
import location from "../../images/location.png";
import SearchBar from "../searchBar/SearchBar"

const Header = () => {

  return (
    <div className="header">
      <div className="hero">
        <h1 className="hero--heading">Discover a place you will love to live</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <p1 className="hero--subTitle">Helping clients to achieve harmony through our expertise and skills</p1>
        <br></br>
        <div className="hero--searchBar">
          <SearchBar />
          </div>
    </div>
    </div>
  );
};

export default Header;
