import { Box, HorizontalStack } from "@shopify/polaris";
import SwiperFront2 from "../Swiper/SwiperFront2";
import SwiperCar2 from "../Swiper/SwiperCar2";

const Layout2 = ({settings}) => {
    return (
        <Box id="LayoutBox">
                <HorizontalStack>
                    <div className=" d-flex flex-column flex-lg-row justify-content-center align-items-center mb-lg-5 mb-2 col-md-3 col-12"  >
                        <SwiperFront2 />
                    </div>
                    <div className="px-lg-2 col-12 col-md-9 " >
                        <SwiperCar2 settings={settings} />
                    </div>
                </HorizontalStack>
            </Box>
     
    );
};

export default Layout2;
