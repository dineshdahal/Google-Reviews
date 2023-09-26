import google from "../../assets/google.png";
import {
  Box,
  HorizontalStack,
  Thumbnail,
  Text,
  Button,
  Avatar,
} from "@shopify/polaris";
import imgmain from "./../../assets/nerdplatoon.png";
import ReviewCard from "./ReviewCard";
import { useReviews } from "../../utils/ReviewsContext";
import WriteAReview from "../Others/WriteAReview";
import ViewAllReviewsLink from "../Others/ViewAllReviewsLink";

const OffCanvasFloating = ({ settings }) => {
  const { reviews } = useReviews();
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

  const stars = Array.from({ length: 5 }, (_, index) => (
    <i
      key={index}
      className="fa fa-star my-1 "
      style={{ color: "gold", fontSize: "14px", marginRight: "3px" }}
      aria-hidden="true"
    ></i>
  ));

  return (
    <Box>
      <div className="p-3 " style={{ ...previewbody, ...text }}>
        <button
          className="btn "
          style={cardbody}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offCanvasNS"
          aria-controls="offCanvasNS"
        >
          <Box id="">
            <div style={text}>
              <HorizontalStack>
                <div className="SwiperFront-Thumbnail me-2">
                  <Thumbnail source={imgmain} alt="Avatar" size="medium" />
                </div>
                <div>
                  <Text variant="bodySm" as="p">
                    Nerd Platoon Pvt. Ltd.{" "}
                  </Text>
                  <div className="">{stars}</div>
                  <Text variant="headingXs" as="h6">
                    <a
                      style={text}
                      href="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJQdZRWZoa6zkRTiJKYkgF5wg"
                    >
                      18 Google Reviews
                    </a>
                  </Text>
                </div>
              </HorizontalStack>
            </div>
          </Box>
        </button>
        <div className="px-1">
          <Text variant="bodySm" as="p">
            <small className="text-secondary" style={text}>
              Click The Badge Above To Open Reviews
            </small>
          </Text>
        </div>
        <div
          className="offcanvas offcanvas-end"
          data-bs-scroll="true"
          data-bs-backdrop="false"
          tabIndex="-1"
          id="offCanvasNS"
          aria-labelledby="offCanvasNSLabel"
          style={previewbody}
        >
          <div className="offcanvas-header" style={text}>
            <Text variant="headingLg" as="h2">
              <span style={text}>Google Reivews</span>
            </Text>
            <button
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              style={{ ...previewbody, border: "none" }}
            >
              <Button plain>
                <i class="fa fa-close fs-4" style={text} aria-hidden="true"></i>
              </Button>
            </button>
          </div>
            {settings.writeareviewbtn ? 
            <div className="px-1">
              <WriteAReview />
            </div> 
             : null}
          <div className="offcanvas-body" >
            <div>
              {reviews && reviews.length > 0
                ? reviews.map((review) => {
                    if (review.star < settings.minratings) {
                      return null;
                    }
                    if (!review.description.trim() && settings.hidenoreviews) {
                      return null;
                    }
                    return (
                      <div className="col-12 px-1 my-lg-3 my-2" key={review.id}>
                        <ReviewCard settings={settings} review={review} />
                      </div>
                    );
                  })
                : "No Data"}
            </div>
            {settings.showviewallreviewlink ? (
              <ViewAllReviewsLink text={text} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default OffCanvasFloating;
