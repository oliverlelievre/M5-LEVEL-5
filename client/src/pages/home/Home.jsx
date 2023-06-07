import Featured from "../../components/featured/Featured";
import Blog from "../../components/blog/Blog";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/hero";
import Navbar from "../../components/navbar/Navbar";
import About from "../../components/about/About";
import Response from "../../components/response/Response"
import HomeContact from "../../components/homeContact/homeContact"

import "../../styles/styles.scss";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="homeContainer">
        <Featured/>
        <div className="homeContainer--About">
        <About/>
        </div>
        <Blog/>
        <Response />
        <HomeContact />
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
