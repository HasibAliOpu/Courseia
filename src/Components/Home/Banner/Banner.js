import React from "react";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as a } from "react-router-dom";
import bg from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div id="#banner" className="p-5 lg:p-10 relative">
        <img src={bg} alt="banner" className=" rounded-2xl" />
        <span className="absolute bottom-10 lg:bottom-48 left-16 lg:left-24 text-xl lg:text-5xl text-white">
          <h1>
            Take a course and <br /> improve your skills
          </h1>
          <a href={"#courses"} className="btn btn-warning btn-sm lg:btn-wide">
            Get Started{" "}
            <FontAwesomeIcon
              className="pl-2 text-2xl"
              icon={faArrowRightLong}
            />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Banner;
