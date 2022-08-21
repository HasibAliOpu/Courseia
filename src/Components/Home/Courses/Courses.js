import React, { useEffect, useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://cryptic-thicket-00710.herokuapp.com/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div id="courses" className="my-10">
      <h1 className="text-6xl text-center">Trending Courses!</h1>
      <div className="grid grid-cols-2 gap-10 mx-10 p-20">
        {courses.map((course) => (
          <Course key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
