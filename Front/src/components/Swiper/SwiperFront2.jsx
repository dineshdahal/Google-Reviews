import { Box, HorizontalStack, Text, Thumbnail, VerticalStack } from "@shopify/polaris";
import imgmain from './../../assets/nerdplatoon.png'
import { useReviews } from "../../utils/ReviewsContext";


const SwiperFront2 = ({settings}) => {
const {reviews}=useReviews();


  let text
  if(settings.theme=='light'){
    text={color:'#000'}
 } 
 else if(settings.theme=='dark'){
    text={color:'#fff'}
 }
 else if(settings.theme=='transparent'){
    text={color:'#000'}
 }
 else if(settings.theme=='custom'){
    text={color:settings.text}
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

      <VerticalStack >
        
          <Text variant="headingMd" as='h4'><p style={text}> <strong>Excellent</strong></p> </Text>
          <Text variant="bodySm" as='p'><p style={text}> Nerd Platoon Pvt. Ltd.</p> </Text>
          <div className="my-1">
            <Text variant="bodySm" as='h5'>
             {stars}
            </Text>
          </div>
          <Text variant="headingXs" as='h6'><a href="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJQdZRWZoa6zkRTiJKYkgF5wg" style={text}>Based on <strong>{reviews.length} Google Reviews</strong></a></Text>
            <Text variant="headingXl" as='h1'><p style={text}>Google</p></Text>
      
      </VerticalStack>
      </div>
    </Box>
  );
};


export default SwiperFront2;
