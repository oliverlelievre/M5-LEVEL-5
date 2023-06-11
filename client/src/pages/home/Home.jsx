import Choose from "../../components/Choose";
import News from "../../components/News";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../../../../Lv5-Software-dev/Mission-5-LV5-ADV/M5-LEVEL-5/client/src/components/Navbar";
import About from "../../../../../Lv5-Software-dev/Mission-5-LV5-ADV/M5-LEVEL-5/client/src/components/About";
import Response from "../../components/Response";
import HomeContact from "../../components/HomeContact";
import Featured from "../../../../../../../new folder/client/src/components/Featured";
import PropertyList from "../../../../../../../new folder/client/src/components/PropertyList";
import FeaturedProperties from "../../../../../../../new folder/client/src/components/FeaturedProperties";
import React from "react";
import "../../styles/styles.scss";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="homeContainer">
        <div className="homeContainer__links">
          <Featured />
          <PropertyList />
          <FeaturedProperties />
        </div>
        <Choose />
        <div className="homeContainer__About">
          <About />
        </div>
        <News />
        <Response />
        <HomeContact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
