import { Box, HorizontalStack } from "@shopify/polaris";
import SwiperFront1 from "../Swiper/SwiperFront1";
import SwiperCar1 from "../Swiper/SwiperCar1";

const Layout1 = () => {
    return (
        <div>
            <Box id="LayoutBox">
                <HorizontalStack>
                    <div className=" d-flex flex-column flex-lg-row justify-content-center align-items-center mb-lg-5 mb-2 col-lg-3 col-12"  >
                        <SwiperFront1 />
                    </div>
                    <div className="px-lg-2 col-12 col-lg-9 " >
                        <SwiperCar1 id='10' />
                    </div>
                </HorizontalStack>
            </Box>
        </div>

    );
};

export default Layout1;
