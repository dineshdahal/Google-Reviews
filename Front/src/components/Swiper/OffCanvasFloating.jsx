import { Box, HorizontalStack, Thumbnail, Text, Button } from "@shopify/polaris";
import imgmain from "./../../assets/nerdplatoon.png";
import ReviewCard from "./ReviewCard";
import { useReviews } from "../../utils/ReviewsContext";

const OffCanvasFloating = ({ settings }) => {
  const { reviews } = useReviews();
  let previewbody
  let cardbody
  let text

  if (settings.theme == 'light') {
    previewbody = { background: '#fff' }
    cardbody = { background: '#efefef' }
    text = { color: '#000' }
  }
  else if (settings.theme == 'dark') {
    previewbody = { background: '#222222' }
    cardbody = { background: '#303030' }
    text = { color: '#fff' }
  }
  else if (settings.theme == 'transparent') {
    previewbody = { background: 'transparent' }
    cardbody = { background: '#efefef' }
    text = { color: '#000' }
  }
  else if (settings.theme == 'custom') {
    previewbody = { background: settings.previewbody }
    cardbody = { background: settings.cardbody }
    text = { color: settings.text }
  }


  const stars = Array.from({ length: 5 }, (_, index) => (
    <i
      key={index}
      className="fa fa-star my-2 "
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
                  <div className="my-1">
                    <Text variant="bodySm" as="h5">
                      {stars}
                    </Text>
                  </div>
                  <Text variant="headingXs" as="h6">
                    18 Google Reviews
                  </Text>
                </div>
              </HorizontalStack>
            </div>
          </Box>
        </button>
        <div className="px-1" >
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
            <h5 className="offcanvas-title" id="offCanvasNSLabel">
              Google Reviews
            </h5>
            <button
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              style={previewbody}
            ><span style={text}>X</span></button>
          </div>
          <div className="offcanvas-body">
            {settings.writeareviewbtn ? (
              <div className="d-flex justify-content-end mx-4 mb-2 ">
                <Button size="slim" primary>
                  Write a review
                </Button>
              </div>
            ) : (
              ""
            )}
            <div>
              {reviews && reviews.length > 0
                ? reviews.map((review) => {
                  if (review.star < settings.minratings) { return null }
                  if (!review.description.trim() && settings.hidenoreviews) { return null }
                  return (
                    <div className="col-12 px-2 my-4" key={review.id}>
                      <ReviewCard settings={settings} review={review} />
                    </div>
                  );
                }) : "No Data"}
            </div>
            {settings.showviewallreviewlink ? (
              <div className="mx-4 d-flex justify-content-start">
                <Button plain><a href="" style={text}>Show all reviews</a></Button>
              </div>
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
