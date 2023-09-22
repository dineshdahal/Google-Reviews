import { HorizontalStack, Text, VerticalStack } from "@shopify/polaris";
import ReviewCard from "./ReviewCard";
import { useReviews } from "../../utils/ReviewsContext";

const Swiperscroll = ({ settings }) => {
  let { reviews } = useReviews();
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
      className="fa fa-star my-2 "
      style={{ color: "gold", fontSize: "14px", marginRight: "3px" }}
      aria-hidden="true"
    ></i>
  ));

  return (
    <>
      <div className="" style={previewbody}>
        <div className="px-1 px-lg-3 py-2 " style={{ ...text, ...cardbody }}>
          <VerticalStack>
            <div className="mb-1">
              <Text variant="bodyMd" as="p">Google Rating</Text>
            </div>
            <HorizontalStack align="start" gap={2} blockAlign="center">
              <Text variant="headingLg"><p>4.9</p></Text>
              <Text variant="bodySm" as="h5">{stars}</Text>
              <Text variant="bodySm" as="p"><a href="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJQdZRWZoa6zkRTiJKYkgF5wg">18 reviews</a>
              </Text>
            </HorizontalStack>
          </VerticalStack>
        </div>
        <div className=" mt-3 scroll-container" style={{ height: "400px", overflow: "scroll", overflowX: "hidden" }}>
          <div className="row">
            {reviews && reviews.length > 0 ? reviews.map((review) => {
                  if (review.star < settings.minratings) {return null;}
                  if (!review.description.trim() && settings.hidenoreviews) {return null;}
                  return (<div key={review.id} className="col-12 col-lg-6 mb-lg-4 mb-2">
                      <ReviewCard settings={settings} review={review} />
                    </div>);}): "No Data"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Swiperscroll;
