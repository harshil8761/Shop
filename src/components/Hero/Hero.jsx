import React from "react";
import "./Hero.css";
import image2 from "../../assets/11.jpeg";
import image1 from "../../assets/12.jpeg";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="para">
        <h1>T SHOP</h1>
        <p>There’s One for Everyone</p>
      </div>
      <div className="gallery">
        <div className="item">
          <img src={image1} alt="img1" />
        </div>
        <div className="item">
          <img src={image2} alt="img2" />
        </div>
        <div className="item">
          <img src={image1} alt="img3" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
