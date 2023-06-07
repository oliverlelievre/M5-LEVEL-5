import news1 from "../../images/news1.png";
import news2 from "../../images/news2.png";
import news3 from "../../images/news3.png";
import "../../styles/_blog.scss";

const Blog = () => {

  return (
  <div className="fb">
   <h4 className="fb--heading">Blog</h4>

      <div className="fb--cards">
<div className="fb--cards1">
   <img className="cards1Image" src={news1} alt="news1"></img>
   <h4 className="cards--heading">Protecting your properties during natural disaster with effective property management</h4>
   <br></br>
   <h5 className="card--readMore">Read more</h5>
</div>

<div className="fb--cards2">
<img className="cards2Image" src={news2} alt="news2"></img>
   <h4 className="cards--heading">Updates on Auckland's recent flooding and what to expect as a property owner</h4>
   <br></br>
   <h5 className="card--readMore">Read more</h5>
</div>

<div className="fb--cards3">
<img className="cards2Image" src={news3} alt="news3"></img>
   <h4 className="cards--heading">What investors should know about property management reports</h4>
   <br></br>
   <h5 className="card--readMore">Read more</h5>
</div>

</div>
    </div>
  );
};

export default Blog;
