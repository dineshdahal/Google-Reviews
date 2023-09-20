import { Box, Button, HorizontalStack } from "@shopify/polaris";
import SwiperFront1 from "../Swiper/SwiperFront1";
import SwiperCar1 from "../Swiper/SwiperCar1";

const Layout1 = ({ settings }) => {
  return (
    <div>
      <Box id="LayoutBox">
        {settings.writeareviewbtn ? (
          <div className="d-flex justify-content-end mx-4 mb-2 ">
            <Button size="slim" primary>
              Write a review
            </Button>
          </div>
        ) : (
          ""
        )}
        <HorizontalStack>
          <div className=" d-flex flex-column flex-lg-row justify-content-center align-items-center mb-lg-5 mb-2 col-lg-3 col-12">
            <SwiperFront1 />
          </div>
          <div className="px-lg-2 col-12 col-lg-9 ">
            <SwiperCar1 settings={settings} />
          </div>
        </HorizontalStack>
        {settings.showviewallreviewlink ? (
          <div className="mx-4 d-flex justify-content-end">
            <Button plain>Show all reviews</Button>
          </div>
        ) : (
          ""
        )}
      </Box>
    </div>
  );
};

export default Layout1;
