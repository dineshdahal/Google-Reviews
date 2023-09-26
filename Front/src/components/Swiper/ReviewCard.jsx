import { Avatar, Box, HorizontalStack, Text } from "@shopify/polaris";
import googleicon from "../../assets/google.png"
// import { useReviews } from "../../utils/ReviewsContext";

const ReviewCard = ({  settings, review }) => {

  const stars = Array.from({ length: review.star }, (_, index) => (
    <i
      key={index}
      className="fa fa-star my-2 "
      style={{ color: "gold", fontSize: "14px", marginRight: "3px" }}
      aria-hidden="true"
    ></i>
  ));

  const align = settings.align === 'center' ? 'text-center' : settings.align === 'right' ? 'text-end' : 'text-start'
 
  let cardbody
  let text
  if(settings.theme=='light'){
    
    cardbody={background:'#efefef'}
    text={color:'#000'}
 } 
 else if(settings.theme=='dark'){
   
    cardbody={background:'#303030'}
    text={color:'#fff'}
 }
 else if(settings.theme=='transparent'){
  
    cardbody={background:'#efefef'}
    text={color:'#000'}
 }
 else if(settings.theme=='custom'){
    cardbody={background:settings.cardbody}
    text={color:settings.text}
 }
 
  return (
    <>
   
      <Box padding={""}  id="ReviewCard">
        <div className="p-3" style={{...cardbody, minHeight:'200px'}} >
        <HorizontalStack align="space-between">
          <HorizontalStack>
            {settings.showphoto?
            <div className="ReviewCard-Avatar">
              <Avatar size="small" name={review.name} source={review.imageLink} />
            </div>:null}
            
            <div className="mb-lg-2 mb-1 ms-1" style={text}>
             {settings.showname? <Text as="p" variant="headingXs">
                {review.name}
              </Text>:null}

             {settings.dateformat=='hide'? null:
             <div style={text}>
             <Text variant="bodySm" as="span">
                {review.date}
              </Text>
             </div>
              }
            </div>
          </HorizontalStack>
          
          <div className="g-icon-card">
            <img src={googleicon} className="img-fluid" alt="" />
            {/* <Avatar source={googleicon} size="extrasmall" /> */}
          </div>
        </HorizontalStack>
        <div className={align}>
          <Text variant="bodyMd" as="h5">
            {stars}
          </Text>
        </div>
        {settings.hideratingtexts?'':
        <div className={align} style={text}>
          <Text variant="bodySm" as="p">
            {review.description}      
          </Text>
        </div>
        }
        </div>
      </Box>
      

    </>
  );
};
export default ReviewCard;
