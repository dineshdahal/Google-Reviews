import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ReviewCard from "./ReviewCard";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const SwiperCar1 = ({ id }) => {
  const iid = parseInt(id, 10);

  const [slidesNo, SetSlidesNo] = useState(0);

  useEffect(() => {
    const noslides = () => {
      if (window.innerWidth < 778) {
        SetSlidesNo(1);
      }
      if (window.innerWidth >= 778 && window.innerWidth <= 1200) {
        SetSlidesNo(2);
      }
      if (window.innerWidth > 1200) {
        SetSlidesNo(3);
      }
    };

    window.addEventListener("resize", noslides);

    // Call the function once to set the initial slidesPerView
    noslides();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", noslides);
    };
  }, []);

  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-center align-items-center">
        <div className="swiper-button-prev swiper1-prev"></div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={15}
          slidesPerView={slidesNo}
          navigation={{
            clickable: true,
            nextEl: ".swiper1-next",
            prevEl: ".swiper1-prev",
          }}
          pagination={{ clickable: true, el: ".swiper1-page" }}
          autoplay={true}
        >
          {Array.from({ length: iid }, (_, index) => (
            <SwiperSlide key={index}>
              <ReviewCard />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next swiper1-next"></div>
      </div>
      <div className="swiper-pagination swiper1-page"></div>
    </div>
  );
};

export default SwiperCar1;
