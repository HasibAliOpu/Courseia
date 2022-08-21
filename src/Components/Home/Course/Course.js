import React from "react";
import { Link } from "react-router-dom";
const Course = ({ course }) => {
  const { name, img, description, price, _id } = course;

  return (
    <div>
      <div className="card bg-base-100 shadow-xl hover:scale-105 ease-in-out duration-300">
        <figure>
          <img src={img} alt="banners" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="font-mono font-bold ">{description.slice(0, 150)}...</p>
          <div className="card-actions justify-end items-center">
            <p className="font-mono font-bold text-xl">Price: ${price}</p>
            <Link to={`/course/${_id}`} className="btn btn-secondary">
              Enroll
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
