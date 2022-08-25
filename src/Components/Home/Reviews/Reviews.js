import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://cryptic-thicket-00710.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="mx-10 lg:mx-20 my-10">
      <h1 className="text-2xl lg:text-4xl font-bold pb-5">- What they said</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="card shadow-2xl shadow-sky-200 p-6 lg:p-16 lg:mx-32 my-10 border-4 border-sky-200">
              <div className="card-body">
                <h2 className="card-title">{review.name}</h2>
                <p className="font-mono font-bold text-lg">
                  Rating: {review.rating}{" "}
                  <FontAwesomeIcon className="text-warning" icon={faStar} />{" "}
                </p>
                <p className="font-aboreto tracking-wide">{review.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
