import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ReviewCard from "./ReviewCard";
import { useEffect, useState } from "react";
import { useReviews } from "../../utils/ReviewsContext";

// eslint-disable-next-line react/prop-types
const SwiperCar3 = ({ settings }) => {
    const {reviews}=useReviews();  

    useEffect(()=>{
      if (settings.theme === 'dark') {
        const bullets = document.querySelectorAll('.swiper-pagination-bullet');
        bullets.forEach((bullet) => {
          bullet.style.background = '#fff';
  
          const next= document.querySelector('.swiper-button-next');
          next.style.color='#fff'
    
          const prev= document.querySelector('.swiper-button-prev');
          prev.style.color='#fff'
        });
      }
      if (settings.theme === 'custom') {
        const bullets = document.querySelectorAll('.swiper-pagination-bullet');
        bullets.forEach((bullet) => {
          bullet.style.background = settings.text;
  
          const next= document.querySelector('.swiper-button-next');
          next.style.color=settings.text
    
          const prev= document.querySelector('.swiper-button-prev');
          prev.style.color=settings.text
        });
      }
    
      if (settings.theme === 'light' || settings.theme === 'transparent') {
        const bullets = document.querySelectorAll('.swiper-pagination-bullet');
        bullets.forEach((bullet) => {
          bullet.style.background = '#333333';
  
          const next= document.querySelector('.swiper-button-next');
          next.style.color='#222222'
    
          const prev= document.querySelector('.swiper-button-prev');
          prev.style.color='#222222'
  
        });
      }
  
    },[settings])
    
    return (
        <div className="d-flex flex-column">
            <div className="d-flex justify-content-center align-items-center">
                <div className="swiper-button-prev swiper3-prev"></div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={15}
                   
                    navigation={{
                        clickable: true,
                        nextEl: ".swiper3-next",
                        prevEl: ".swiper3-prev",
                    }}
                    pagination={{
                        clickable: true,
                        el: ".swiper3-page",
                    }}
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
                    autoplay={settings.autoplay?{delay:3000}:{delay:99999999}}
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
                <div className=" mb-5">
                <ReviewCard
                  settings={settings}
                  review={review}
                  />
                  </div>
              </SwiperSlide>
            }
            )
            : "No Data"}
                </Swiper>
                <div className="swiper-button-next swiper3-next"></div>
            </div>
            <div className="swiper-pagination swiper3-page"></div>
        </div>
    );
};

export default SwiperCar3;
