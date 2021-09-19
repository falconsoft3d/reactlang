import React from "react";
import "./home.css";
import WhiteBox from "../../components/home/WhiteBox";

const HomePage = () => {
  return (
    <div>
      <h1 className="home-title">ReactLang</h1>
      <p className="home-name">By Marlon Falcon</p>

      <WhiteBox/>
    </div>
  );
};

export default HomePage;