import React from "react";
import { Link } from "react-router-dom";
const Course = ({ course }) => {
  const { name, img, description, price } = course;
  return (
    <div>
      <div class="card bg-base-100 shadow-xl hover:scale-105 ease-in-out duration-300">
        <figure>
          <img src={img} alt="banners" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p className="font-mono font-bold ">{description.slice(0, 150)}...</p>
          <div class="card-actions justify-end items-center">
            <p className="font-mono font-bold text-xl">Price: ${price}</p>
            <Link to="/course" class="btn btn-primary">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
