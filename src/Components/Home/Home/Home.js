import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Courses from "../Courses/Courses";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Courses />
      <AboutUs />
      <Reviews />
    </div>
  );
};

export default Home;
