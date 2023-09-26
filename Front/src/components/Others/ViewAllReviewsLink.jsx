import { Avatar, Button } from "@shopify/polaris";
import googleicon from "../../assets/google.png";

const ViewAllReviewsLink = ({ text }) => {
  return (
    <div className="mx-4 pb-3 d-flex justify-content-end">
      <div className="me-2 g-icon-card">
        <img src={googleicon} className="img-fluid" alt="" />
        {/* <Avatar source={googleicon} size="extrasmall" /> */}
      </div>
      <Button
        url="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJQdZRWZoa6zkRTiJKYkgF5wg"
        plain
      >
        <span style={text}>View all reviews</span>
      </Button>
    </div>
  );
};

export default ViewAllReviewsLink;
