import { Box, HorizontalStack, Text } from "@shopify/polaris"

const ReviewCard = () => {
  return (<>
    <Box padding={'1'} minHeight="200px" id="ReviewCard">
     <HorizontalStack>
        <img src="https://picsum.photos/30/30" alt="" sizes="" className="rounded rounded-5"  />
      <div className="mb-2">
      <Text as="h6" variant="headingXs">
        Dinesh Dahal
      </Text>
      <Text variant="bodySm" as='span'>
        2017
      </Text>
      </div>
     </HorizontalStack>
    
      <div className="mb-2">
      <Text variant="bodyMd" as='h5'>
        <i className="fa fa-star" style={{ color: "gold", fontSize: '14px', marginRight: '3px' }} aria-hidden="true"></i>
        <i className="fa fa-star" style={{ color: "gold", fontSize: '14px', marginRight: '3px' }} aria-hidden="true"></i>
        <i className="fa fa-star" style={{ color: "gold", fontSize: '14px', marginRight: '3px' }} aria-hidden="true"></i>
        <i className="fa fa-star" style={{ color: "gold", fontSize: '14px', marginRight: '3px' }} aria-hidden="true"></i>
        <i className="fa fa-star" style={{ color: "gold", fontSize: '14px', marginRight: '3px' }} aria-hidden="true"></i>
      </Text>
      </div>
      <Text variant="bodySm" as='p'>
      I feel fortunate to have had the opportunity to work with such a remarkable team. 
      </Text>
    </Box>
  </>
  )
}
export default ReviewCard;