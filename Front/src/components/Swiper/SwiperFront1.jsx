import { Box, HorizontalStack, Text, Thumbnail } from "@shopify/polaris";
import imgmain from './../../assets/nerdplatoon.png'


const SwiperFront1 = () => {

  return (
    
    <Box id="">
      <HorizontalStack>
        <div className="SwiperFront-Thumbnail me-2">
          <Thumbnail
            source={imgmain}
            alt="Avatar"
            size="medium"
          />
        </div>
        <div>
          <Text variant="bodySm" as='p'><> Nerd Platoon Pvt. Ltd.</> </Text>
          <div className="my-1">
            <Text variant="bodySm" as='h5'>
              <i className="fa fa-star fs-6 " style={{ color: "gold",}} aria-hidden="true"></i>
              <i className="fa fa-star fs-6 " style={{ color: "gold",}} aria-hidden="true"></i>
              <i className="fa fa-star fs-6 " style={{ color: "gold",}} aria-hidden="true"></i>
              <i className="fa fa-star fs-6 " style={{ color: "gold",}} aria-hidden="true"></i>
              <i className="fa fa-star fs-6 " style={{ color: "gold",}} aria-hidden="true"></i>
            </Text>
          </div>
          <Text variant="headingXs" as='h6'>
            18 Google Reviews</Text>
        </div>
      </HorizontalStack>
    </Box>
  );
};


export default SwiperFront1;
