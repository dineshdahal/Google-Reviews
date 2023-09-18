import { Text, Box, HorizontalStack } from "@shopify/polaris";

// import SwiperFront1 from "../Swiper/SwiperFront1";
import SwiperCar1 from "../Swiper/TestSwiper";

const LayoutSetting = () => {
    
  return (
    <Box id="Tab1-preview">
      <div className="mb-lg-3 mb-1 " >
        <Text variant="headingSm" as="h6">
          Preview
        </Text>
      </div>
      <div className="">
      <div>
            <Box id="LayoutBox">
                <HorizontalStack>
                    {/* <div className=" d-flex flex-column flex-lg-row justify-content-center align-items-center mb-lg-5 mb-2 col-lg-3 col-12"  > */}
                        {/* <SwiperFront1 /> */}
                    {/* </div> */}
                    <div className="px-lg-2 col-12 " >
                        <SwiperCar1 id='10' previewbg='#222222' cardbg='#303030' />
                    </div>
                </HorizontalStack>
            </Box>
        </div>
      </div>
    </Box>
  );
};

export default LayoutSetting;
