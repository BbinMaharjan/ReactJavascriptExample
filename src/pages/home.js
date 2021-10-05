import React from "react";
import "./home.css";
import bg from "../image/bg.jpg";
const Home = (props) => {
  return (
    <div>
      <div className="image">
        <img src={bg} alt="gym"></img>
      </div>
    </div>
  );
};

export default Home;
