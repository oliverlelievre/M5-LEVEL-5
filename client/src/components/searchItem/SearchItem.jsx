import { Link } from "react-router-dom";
import "../../styles/_searchItem.scss";
import bed from "../../images/Bed.png";
import bath from "../../images/bathroom.png";

const SearchItem = ({ item }) => {
  if (!item) {
    return null;
  }
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.address}</span>
        <span className="siSubtitle">{item.type}</span>
        <span className="siCancelOp">
          <img className="siEssentials" src={bed} alt="" />
          {" "}{item.bedrooms}{" "}bedrooms{" "}
          <img className="siEssentials" src={bath} alt="" />{" "}{item.bathrooms}{" "}bathrooms
        </span>
      </div>
      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">${item.roomPrice}/per week</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`http://localhost:3000/properties/${item._id}`}>
            <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
