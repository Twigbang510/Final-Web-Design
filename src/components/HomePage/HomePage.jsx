import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import logo from "../../assets/art.svg";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="container_home">
        <div className="item_home">
          <h1 className="homepage__tittle">Let us manage your project</h1>
          <Link to="/login" className="glow-on-hover">Let's Go</Link>
        </div>
        <div className="background__img">
          <img className="logo" src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
