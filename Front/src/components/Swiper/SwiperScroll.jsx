import { HorizontalStack, Text, VerticalStack } from "@shopify/polaris";
import ReviewCard from "./ReviewCard";
import { useReviews } from "../../utils/ReviewsContext";

const Swiperscroll = ({ settings }) => {
  let { reviews } = useReviews();

  return (
    <>
      <div className="pt-3 py-2 pt-lg-4 pt-3" style={{ background: "#fff" }}>
        <div className="px-3 mx-4 py-3" style={{ background: "#f6f6f6" }}>
          <VerticalStack>
            <div>
              <Text variant="headingSm">Google Rating</Text>
            </div>
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
          className="px-lg-4 px-2 mt-3 scroll-container"
          style={{ height: "400px", overflow: "scroll", overflowX: "hidden" }}
        >
          <div className="row">
            {reviews && reviews.length > 0
              ? reviews.map((review) => (

                <div className="col-12 col-lg-6 col-xl-4" key={review.id}>
                  <ReviewCard
                 
                  review={review}
                  settings={settings}
                />
                </div>
              ))
              : "No Data"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Swiperscroll;
