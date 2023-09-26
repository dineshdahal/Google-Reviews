import { Avatar, Box, Button, HorizontalStack } from "@shopify/polaris";
import SwiperFront2 from "../Swiper/SwiperFront2";
import SwiperCar2 from "../Swiper/SwiperCar2";
import google from "../../assets/google.png";
import WriteAReview from "../Others/WriteAReview";
import ViewAllReviewsLink from "../Others/ViewAllReviewsLink";

const Layout2 = ({ settings }) => {
  let previewbody;
  let cardbody;
  let text;

  if (settings.theme == "light") {
    previewbody = { background: "#fff" };
    cardbody = { background: "#efefef" };
    text = { color: "#000" };
  } else if (settings.theme == "dark") {
    previewbody = { background: "#222222" };
    cardbody = { background: "#303030" };
    text = { color: "#fff" };
  } else if (settings.theme == "transparent") {
    previewbody = { background: "transparent" };
    cardbody = { background: "#efefef" };
    text = { color: "#000" };
  } else if (settings.theme == "custom") {
    previewbody = { background: settings.previewbody };
    cardbody = { background: settings.cardbody };
    text = { color: settings.text };
  }

  return (
    <Box id="LayoutBox">
      <div className="pt-4" style={previewbody}>
        {settings.writeareviewbtn ? (
          <WriteAReview/>
        ) : (
          ""
        )}
        <HorizontalStack>
          <div className=" d-flex flex-column flex-lg-row justify-content-center align-items-center mb-lg-5 mb-2 col-md-3 col-12">
            <SwiperFront2 settings={settings} />
          </div>
          <div className="px-lg-2 col-12 col-md-9 ">
            <SwiperCar2 settings={settings} />
          </div>
        </HorizontalStack>
        {settings.showviewallreviewlink ? (
          <ViewAllReviewsLink text={text}/>
        ) : (
          ""
        )}
      </div>
    </Box>
  );
};

export default Layout2;
