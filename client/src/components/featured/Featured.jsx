import house1 from "../../images/House1.png";
import house2 from "../../images/House2.png";
import key from "../../images/Key.png";
import "../../styles/_featured.scss";

const Featured = () => {

  return (
    <div className="featured">
      <div className="featured--heading">
        <h4>WHY CHOOSE METRO NZ</h4>
        <div className="featured--headingContent">
        <h3 className="subTitle">Provides the most complete list of property</h3>
        <p1>Metro NZ is one of the top Auckland Property Management companies. All of our staff are property investors who have expert knowledge of the property market and your best interest in mind at all times.</p1>
        <br></br>
        </div>
      </div>

      <div className="featured--cards">

         <div className="featured--cards1">
            <img src={house1} alt="house1"></img>
            <h4 className="featured--cards1Heading">Affordable Prices</h4>
            <br></br>
            <p1 className="card--content1">We offer affordable prices without compromising on quality, making luxury living accessible to a wider audience.</p1>
         </div>

        <div className="featured--cards2">
        <img src={house2} alt="house1"></img>
            <h4>High Quality Property</h4>
            <br></br>
            <p1>Exquisite properties of unrivaled quality, setting a new standard in luxury living.</p1>
        </div>

        <div className="featured--cards3">
        <img src={key} alt="key"></img>
            <h4 className="featured--cards1Heading">Tailored Service</h4>
            <br></br>
            <p1>We offer specialized services for selling tenanted properties, easing fustration for vendors, agents, and tenants.</p1>
        </div>

         </div>
    </div>
  );
};

export default Featured;
