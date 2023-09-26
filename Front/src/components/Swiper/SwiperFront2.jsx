import {
  Box,
  HorizontalStack,
  Text,
  Thumbnail,
  VerticalStack,
} from "@shopify/polaris";

import { useReviews } from "../../utils/ReviewsContext";

const SwiperFront2 = ({ settings }) => {
  const { reviews } = useReviews();

  let text;
  if (settings.theme == "light") {
    text = { color: "#000" };
  } else if (settings.theme == "dark") {
    text = { color: "#fff" };
  } else if (settings.theme == "transparent") {
    text = { color: "#000" };
  } else if (settings.theme == "custom") {
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
    <Box id="">
      <div className="text-center">
        <VerticalStack>
          <Text variant="headingLg" as="h2">
            <p style={text}>
              <strong>Excellent</strong>
            </p>
          </Text>
          <Text variant="bodySm" as="p">
            {stars}
          </Text>
          <Text variant="headingXs" as="h6">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJQdZRWZoa6zkRTiJKYkgF5wg"
              style={text}
            >
              Based on <strong>{reviews.length} Google Reviews</strong>
            </a>
          </Text>
          <Text variant="headingXl" as="h1">
            <img
              className="img-fluid h-50 w-50"
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt=""
            />
          </Text>
        </VerticalStack>
      </div>
    </Box>
  );
};

export default SwiperFront2;
