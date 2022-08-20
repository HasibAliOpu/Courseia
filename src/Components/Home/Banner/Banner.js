import React from "react";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import bg from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div id="#banner" className="p-10 relative">
        <img src={bg} alt="banner" className=" rounded-2xl" />
        <span className="absolute bottom-48 left-24 text-5xl text-white">
          <h1>
            Take a course and <br /> improve your skills
          </h1>
          <Link to={"/"} className="btn btn-warning btn-wide">
            Get Started{" "}
            <FontAwesomeIcon
              className="pl-2 text-2xl"
              icon={faArrowRightLong}
            />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Banner;
