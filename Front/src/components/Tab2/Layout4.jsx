import { Avatar, Box, Button } from "@shopify/polaris";
import Swiperscroll from "../Swiper/SwiperScroll";
import google from "../../assets/google.png";
import WriteAReview from "../Others/WriteAReview";
import ViewAllReviewsLink from "../Others/ViewAllReviewsLink";

const Layout4 = ({ settings }) => {
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
    <div className="" style={previewbody}>
      <Box id="LayoutBox">
        <div className="pt-2 pb-1" style={previewbody}>
          {settings.writeareviewbtn ? (
            <WriteAReview/>
          ) : (
            null
          )}

          <div className="px-2 mb-lg-3 mb-1" style={{ width: "100%" }}>
            <Swiperscroll settings={settings} />
          </div>
          {settings.showviewallreviewlink ? (
           <ViewAllReviewsLink text={text}/>
          ) : (
            ""
          )}
        </div>
      </Box>
    </div>
  );
};

export default Layout4;
