import { Button } from '@shopify/polaris'

const WriteAReview = () => {
  return (
    <div className="d-flex justify-content-end mx-4 mb-3 pt-lg-3 pt-md-2 pt-1 ">
              <Button
                size="slim"
                url="https://www.google.com/maps/search/?api=1&query=Google&query_place_id=ChIJQdZRWZoa6zkRTiJKYkgF5wg"
                primary
              >
                <small>Write a review</small>
              </Button>
            </div>
  )
}

export default WriteAReview