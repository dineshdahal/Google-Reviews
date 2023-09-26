import { Box, HorizontalStack, Text, Thumbnail } from "@shopify/polaris";
import imgmain from './../../assets/nerdplatoon.png'


const SwiperFront1 = ({ settings }) => {
  let text
  if (settings.theme == 'light') {
    text = { color: '#000' }
  }
  else if (settings.theme == 'dark') {
    text = { color: '#fff' }
  }
  else if (settings.theme == 'transparent') {
    text = { color: '#000' }
  }
  else if (settings.theme == 'custom') {
    text = { color: settings.text }
  }

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
          <Text variant="headingXs" as='h6'><span style={text} > Nerd Platoon Pvt. Ltd.</span> </Text>
          <div className="my-1">
            <Text variant="bodySm" as='h5'>
              <i className="fa fa-star fs-6 " style={{ color: "gold", }} aria-hidden="true"></i>
              <i className="fa fa-star fs-6 " style={{ color: "gold", }} aria-hidden="true"></i>
              <i className="fa fa-star fs-6 " style={{ color: "gold", }} aria-hidden="true"></i>
              <i className="fa fa-star fs-6 " style={{ color: "gold", }} aria-hidden="true"></i>
              <i className="fa fa-star fs-6 " style={{ color: "gold", }} aria-hidden="true"></i>
            </Text>
          </div>
          <Text variant="headingXs" as='h6'>
            <a href="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJQdZRWZoa6zkRTiJKYkgF5wg" style={text} className="fw-bold">18 Google Reviews</a></Text>
        </div>
      </HorizontalStack>
    </Box>
  );
};


export default SwiperFront1;
