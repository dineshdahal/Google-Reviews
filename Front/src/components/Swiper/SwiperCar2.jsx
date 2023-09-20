import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ReviewCard from "./ReviewCard";
import { useReviews } from "../../utils/ReviewsContext";

// eslint-disable-next-line react/prop-types
const SwiperCar2 = ({settings}) => {
  let{reviews}=useReviews();

  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-center align-items-center">
        <div className="swiper-button-prev swiper1-prev"></div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={15}
          navigation={{
            clickable: true,
            nextEl: ".swiper1-next",
            prevEl: ".swiper1-prev",
          }}
          pagination={{ clickable: true, el: ".swiper1-page" }}
          breakpoints={{
            778: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 10,
            },

          }}
        >

          {reviews && reviews.length > 0 ?
            reviews.map(review =>
              <SwiperSlide key={review.id}>
                <ReviewCard
                 review={review}
                 settings={settings}


                />
              </SwiperSlide>
            )
            : "No Data"}

        </Swiper>
        <div className="swiper-button-next swiper1-next"></div>
      </div>
      <div className="swiper-pagination swiper1-page"></div>
    </div>
  );
};

export default SwiperCar2;
