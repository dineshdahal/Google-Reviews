import { Avatar,  HorizontalStack, Text } from "@shopify/polaris";

const ReviewCard = ({cardbg}) => {

  
const style={
  background:cardbg,
  color:'#fff'

}

  return (
    <>

  <div className="px-3 pt-3 pb-5 mb-5" style={style}>
      
        <HorizontalStack align="space-between">
          <HorizontalStack>
            <div className="ReviewCard-Avatar">
              <Avatar size="small" initials="D" name="Dinesh Dahal" />
            </div>
            <div className="mb-lg-2 mb-1 ms-2">
              <Text as="p" variant="headingXs">
                Dinesh Dahal
              </Text>
              <Text variant="bodySm" as="span">
                2017
              </Text>
            </div>
          </HorizontalStack>
          <div className="ms-3">
            <Avatar initials="G" size="extrasmall" />
          </div>
        </HorizontalStack>

        <div className="mb-2">
          <Text variant="bodyMd" as="h5">
            <i
              className="fa fa-star"
              style={{ color: "gold", fontSize: "14px", marginRight: "3px" }}
              aria-hidden="true"
            ></i>
            <i
              className="fa fa-star"
              style={{ color: "gold", fontSize: "14px", marginRight: "3px" }}
              aria-hidden="true"
            ></i>
            <i
              className="fa fa-star"
              style={{ color: "gold", fontSize: "14px", marginRight: "3px" }}
              aria-hidden="true"
            ></i>
            <i
              className="fa fa-star"
              style={{ color: "gold", fontSize: "14px", marginRight: "3px" }}
              aria-hidden="true"
            ></i>
            <i
              className="fa fa-star"
              style={{ color: "gold", fontSize: "14px", marginRight: "3px" }}
              aria-hidden="true"
              ></i>
          </Text>
        </div>
        <Text variant="bodySm" as="p">
          I feel fortunate to have had the opportunity to work with such a
          remarkable team.
        </Text>
   
              </div>
    </>
  );
};
export default ReviewCard;
