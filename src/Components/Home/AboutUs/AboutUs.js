import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import student from "../../../assets/student.jpg";
import book from "../../../assets/icons/book.png";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-20 p-10"
    >
      <div className="pt-10">
        <h1 className="text-4xl lg:text-6xl font-serif  font-extrabold whitespace-nowrap tracking-tight text-cyan-400">
          Learn anything,
          <br />
          anytime, anywhere...
        </h1>
        <span>
          <p className="pt-5">
            <FontAwesomeIcon
              className="text-green-500 pr-1"
              icon={faCheckCircle}
            />{" "}
            Certified instructors
          </p>
          <p className="py-2">
            <FontAwesomeIcon
              className="text-green-500 pr-1"
              icon={faCheckCircle}
            />{" "}
            Easy registration
          </p>
          <p className="pb-2">
            <FontAwesomeIcon
              className="text-green-500 pr-1"
              icon={faCheckCircle}
            />{" "}
            Simple payment methods
          </p>
          <p className="pb-2">
            <FontAwesomeIcon
              className="text-green-500 pr-1"
              icon={faCheckCircle}
            />{" "}
            Access anywhere 24/7
          </p>
          <p className="">
            <FontAwesomeIcon
              className="text-green-500 pr-1"
              icon={faCheckCircle}
            />{" "}
            Certified instructors
          </p>
        </span>
      </div>
      <div className="p-10 relative">
        <div className=" bg-[#99FFCD] p-1">
          <img src={student} alt="student" className="-mt-8 pb-3 -ml-3" />
        </div>
        <div className="absolute bottom-3 left-1 bg-yellow-300 w-36 pl-6 py-3">
          <img src={book} alt="book" className="" />
          <h1 className="text-3xl">150 +</h1>
          <p>
            <small>Active Courses</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
