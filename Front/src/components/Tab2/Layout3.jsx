import { Box } from "@shopify/polaris"
import SwiperFront2 from "../Swiper/SwiperFront2"
import SwiperCar3 from "../Swiper/SwiperCar3"


const Layout3 = () => {
  return (
    <div className="p-3 " style={{background:'#fff'}}>
    <Box id="LayoutBox">
                <div className=" d-flex align-items-center justify-content-center mb-3" style={{ width: '100%' }}>
                    <SwiperFront2 />
                </div>
                <div className="px-2 mb-3" style={{ width: '100%' }}>
                    <SwiperCar3 id='10' />
                </div>
            </Box>
    </div>
  )
}

export default Layout3