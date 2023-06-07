import Choose from "../../components/choose/Choose";
import Blog from "../../components/blog/Blog";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/hero";
import Navbar from "../../components/navbar/Navbar";
import About from "../../components/about/About";
import Response from "../../components/response/Response";
import HomeContact from "../../components/homeContact/homeContact";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";

import "../../styles/styles.scss";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="homeContainer">
        <div className="homeContainer--links">
        <Featured />
        <PropertyList />
        <FeaturedProperties />
        </div>
        <Choose />
        <div className="homeContainer--About">
          <About />
        </div>
        <Blog />
        <Response />
        <HomeContact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
