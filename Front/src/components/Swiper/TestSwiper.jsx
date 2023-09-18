import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ReviewCard from "./TestReviewCard";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const SwiperCar1 = ({ id, previewbg, cardbg }) => {
  const iid = parseInt(id, 10);

  let navstyle={
   
};
useEffect(()=>{

    if (previewbg === '#222222') {
           
         document.querySelectorAll('.swiper-pagination-bullet').forEach((bullet) => {
                bullet.style.backgroundColor = '#fff';
            });
//  document.querySelectorAll('.swiper-button-disabled').forEach((dis)=>{dis.style.display='none'})

            document.querySelectorAll('.swiper-button-next').forEach((button)=>{button.style.backgroundColor='#fff'})
            document.querySelectorAll('.swiper-button-prev').forEach((button)=>{button.style.backgroundColor='#fff'})
            // document.getElementsByClassName('.swiper-button-prev').style.backgroundColor='#fff'
        
      }
})


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
    <div className="pt-3" style={{background:previewbg}}>
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
              <ReviewCard  cardbg={cardbg} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next swiper1-next"></div>
      </div>
      <div className="swiper-pagination swiper1-page" style={navstyle}></div>
    </div>
  );
};

export default SwiperCar1;
