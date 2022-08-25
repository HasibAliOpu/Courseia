import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlay } from "@fortawesome/free-solid-svg-icons";

import Swal from "sweetalert2";

const Course = () => {
  const { courseId } = useParams();

  const [course, setCourse] = useState([]);
  const handleBuyCourse = () => {
    Swal.fire(
      "🥳Congratulations!🎊",
      "You're Enrolment Successfully Completed!😊",
      "success"
    );
  };
  useEffect(() => {
    fetch(`https://cryptic-thicket-00710.herokuapp.com/courses/${courseId}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [courseId]);

  return (
    <div className="bg-warning">
      <div className="p-10 lg:p-20">
        <div className="card lg:card-side bg-white shadow-2xl mx-5 lg:mx-10">
          <figure>
            <img src={course.img} alt="Album" className="w-[550px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">{course.name}</h2>
            <p className="font-sans font-semibold">{course.description}</p>
            <div className="card-actions justify-around">
              <span>
                <p>
                  lessons: {course.class}{" "}
                  <FontAwesomeIcon className="text-error" icon={faPlay} />
                </p>
                <p>
                  rating: {course.rating}{" "}
                  <FontAwesomeIcon className="text-warning" icon={faStar} />{" "}
                </p>
              </span>
              <button
                onClick={handleBuyCourse}
                className="btn btn-accent text-purple-600"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
