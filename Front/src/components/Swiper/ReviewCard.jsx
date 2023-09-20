import { Avatar, Box, HorizontalStack, Text } from "@shopify/polaris";
import { useSettings } from "../../utils/SettingsContext";
// import { useReviews } from "../../utils/ReviewsContext";

const ReviewCard = ({  settings, review }) => {

  // let { settingss } = useSettings();

  const stars = Array.from({ length: review.star }, (_, index) => (
    <i
      key={index}
      className="fa fa-star my-2 "
      style={{ color: "gold", fontSize: "14px", marginRight: "3px" }}
      aria-hidden="true"
    ></i>
  ));

  const align = settings.align === 'center' ? 'text-center' : settings.align === 'right' ? 'text-end' : 'text-start'
 

  return (
    <>
      <Box padding={""} minHeight="200px" id="ReviewCard">
        <HorizontalStack align="space-between">
          <HorizontalStack>
            {settings.showphoto?<div className="ReviewCard-Avatar">
              <Avatar size="small" name={review.name} source={review.imageLink} />
            </div>:''}
            
            <div className="mb-lg-2 mb-1 ms-1">
             {settings.showname? <Text as="p" variant="headingXs">
                {review.name}
              </Text>:''}

             {settings.dateformat=='hide'? '':<Text variant="bodySm" as="span">
                {review.date}
              </Text>}
            </div>
          </HorizontalStack>
          
          <div className="">
            <Avatar initials="G" size="extrasmall" />
          </div>
        </HorizontalStack>
        <div className={align}>
          <Text variant="bodyMd" as="h5">
            {stars}
          </Text>
        </div>
        {settings.hideratingtexts?'':
        <div className={align}>
          <Text variant="bodySm" as="p">
            {review.description}      
          </Text>
        </div>
        }
      </Box>

    </>
  );
};
export default ReviewCard;
