import {Box, HorizontalStack, Thumbnail, Text } from '@shopify/polaris'
import imgmain from './../../assets/nerdplatoon.png'
import ReviewCard from './ReviewCard'
import { useReviews } from '../../utils/ReviewsContext'

const OffCanvasFloating = ({settings}) => {
  const {reviews}=useReviews();
  return (
        <Box>
  <div className="p-3 " style={{background:'#fff'}}>

<button className="btn " style={{background:'#e0e0e1'}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offCanvasNS" aria-controls="offCanvasNS">
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
          <Text variant="bodySm" as='p'>Nerd Platoon Pvt. Ltd. </Text>
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
      </button>
      <div className='px-1'>

      <Text variant='bodySm' as='p'> <small className='text-secondary'> Click The Badge Above To Open Reviews</small></Text>
      </div>
      

<div className="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offCanvasNS" aria-labelledby="offCanvasNSLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offCanvasNSLabel">Google Reviews</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
  <div>
     
  {reviews && reviews.length > 0
              ? reviews.map((review) => (

                <div className="col-12 px-2" key={review.id}>
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

</div>
</Box>


  )
}

export default OffCanvasFloating