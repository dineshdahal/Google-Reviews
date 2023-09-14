import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Box } from '@shopify/polaris';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ReviewCard from './ReviewCard';

const Swiper1 = () => {
    return (
        <Box>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={15}
                slidesPerView={3}
                navigation={{ clickable: true }}
                pagination={{ clickable: true }}
                autoplay={true}
            >
                
                <SwiperSlide><ReviewCard /></SwiperSlide>
                <SwiperSlide><ReviewCard /></SwiperSlide>
                <SwiperSlide><ReviewCard /></SwiperSlide>
                <SwiperSlide><ReviewCard /></SwiperSlide>
                <SwiperSlide><ReviewCard /></SwiperSlide>
                <SwiperSlide><ReviewCard /></SwiperSlide>
                <SwiperSlide><ReviewCard /></SwiperSlide>
                <SwiperSlide><ReviewCard /></SwiperSlide>
                <SwiperSlide><ReviewCard /></SwiperSlide>
                <SwiperSlide><ReviewCard /></SwiperSlide>
                <SwiperSlide><ReviewCard /></SwiperSlide>
                <SwiperSlide><ReviewCard /></SwiperSlide>
                <SwiperSlide><ReviewCard /></SwiperSlide>
            </Swiper>
        </Box>

    );
};

export default Swiper1;