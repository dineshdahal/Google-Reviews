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
const SwiperCar1 = ({ settings }) => {
  let { reviews } = useReviews();


  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-center align-items-center">
        <div className="swiper-button-prev swiper2-prev"></div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={15}
          navigation={{
            clickable: true,
            nextEl: ".swiper2-next",
            prevEl: ".swiper2-prev",
          }}
          pagination={{ clickable: true, el: ".swiper2-page" }}
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
            reviews.map(review => {
              if (review.star < settings.minratings) {
                return null
              }
              if (!review.description.trim() && settings.hidenoreviews) {
                return null
              }
              
              return <SwiperSlide key={review.id}>
                <ReviewCard
                  settings={settings}
                  review={review}
                />
              </SwiperSlide>
            }
            )
            : "No Data"}
        </Swiper>
        <div className="swiper-button-next swiper2-next"></div>
      </div>
      <div className="swiper-pagination swiper2-page"></div>
    </div>
  );
};

export default SwiperCar1;
