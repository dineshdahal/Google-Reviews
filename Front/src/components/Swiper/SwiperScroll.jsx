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

  return (
    <>
      <div className="" style={previewbody}>
        <div className="px-3 py-3" style={{ ...text, ...cardbody }}>
          <VerticalStack>
            <Text variant="headingSm">Google Rating</Text>
            <HorizontalStack align="start" gap={2}>
              <Text variant="headingSm">4.9</Text>

              <Text variant="bodyMd" as="h5">
                <i
                  className="fa fa-star"
                  style={{
                    color: "gold",
                    fontSize: "14px",
                    marginRight: "3px",
                  }}
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-star"
                  style={{
                    color: "gold",
                    fontSize: "14px",
                    marginRight: "3px",
                  }}
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-star"
                  style={{
                    color: "gold",
                    fontSize: "14px",
                    marginRight: "3px",
                  }}
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-star"
                  style={{
                    color: "gold",
                    fontSize: "14px",
                    marginRight: "3px",
                  }}
                  aria-hidden="true"
                ></i>
                <i
                  className="fa fa-star"
                  style={{
                    color: "gold",
                    fontSize: "14px",
                    marginRight: "3px",
                  }}
                  aria-hidden="true"
                ></i>
              </Text>
              <Text variant="bodySm" as="p">
                18 reviews
              </Text>
            </HorizontalStack>
          </VerticalStack>
        </div>
        <div
          className=" mt-3 scroll-container"
          style={{ height: "400px", overflow: "scroll", overflowX: "hidden" }}
        >
          <div className="row">
            {reviews && reviews.length > 0
              ? reviews.map((review) => {
                  if (review.star < settings.minratings) {
                    return null;
                  }
                  if (!review.description.trim() && settings.hidenoreviews) {
                    return null;
                  }
                  return (
                    <div key={review.id} className="col-12 col-lg-6 mb-4">
                      <ReviewCard settings={settings} review={review} />
                    </div>
                  );
                })
              : "No Data"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Swiperscroll;
