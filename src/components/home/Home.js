import React from "react";
import "./Home.css";
import image from "../../images/home.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <span>Sale up to 70% off</span>
        <h2>New Collection For Fall</h2>
        <p>Discover all the new arrivals of ready-to-wear collection.</p>
        <button>Shop now</button>
      </div>
      <div className="img">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Home;
