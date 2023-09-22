import { Box, Button } from "@shopify/polaris"
import SwiperFront2 from "../Swiper/SwiperFront2"
import SwiperCar3 from "../Swiper/SwiperCar3"


const Layout3 = ({ settings }) => {
  let previewbody
  let cardbody
  let text

  if (settings.theme == 'light') {
    previewbody = { background: '#fff' }
    cardbody = { background: '#efefef' }
    text = { color: '#000' }
  }
  else if (settings.theme == 'dark') {
    previewbody = { background: '#222222' }
    cardbody = { background: '#303030' }
    text = { color: '#fff' }
  }
  else if (settings.theme == 'transparent') {
    previewbody = { background: 'transparent' }
    cardbody = { background: '#efefef' }
    text = { color: '#000' }
  }
  else if (settings.theme == 'custom') {
    previewbody = { background: settings.previewbody }
    cardbody = { background: settings.cardbody }
    text = { color: settings.text }
  }

  return (
    <div className="px-lg-3 pt-lg-3 p-2 pb-0 " style={{ background: '#fff' }}>
      <Box id="LayoutBox">
        <div className="pt-2" style={previewbody}>
          {settings.writeareviewbtn ? (
            <div className="d-flex justify-content-end mx-4 mb-2 ">
              <Button size="slim" primary>
                Write a review
              </Button>
            </div>
          ) : (
            ""
          )}

          <div className=" d-flex align-items-center justify-content-center mb-3" style={{ width: '100%' }}>
            <SwiperFront2 settings={settings} />
          </div>
          <div className="px-2 mb-3" style={{ width: '100%' }}>
            <SwiperCar3 settings={settings} />
          </div>
          {settings.showviewallreviewlink ? (
          <div className="mx-4 d-flex justify-content-end">
            <Button plain><a href="" style={text}>Show all reviews</a></Button>
          </div>
        ) : (
          ""
          )}
        </div>
      </Box>
    </div>
  )
}

export default Layout3