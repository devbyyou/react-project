import React from "react";
import Annoucement from "../Components/Annoucement";
import Categories from "../Components/Categories";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div>
      <Annoucement />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
