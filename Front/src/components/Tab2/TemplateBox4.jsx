
import { Box, Button, HorizontalStack, Text } from "@shopify/polaris"
import Swiperscroll from "../Swiper/SwiperScroll"


const TemplateBox4 = () => {
  return (
    <>

    <div className="my-2">
      <HorizontalStack align="space-between">
      <Text variant="headingMd">4. Review with Grid</Text>
      <Button size="slim" primary>Select</Button>
      </HorizontalStack>
    </div>
      <Swiperscroll />  
    </>
  )
}

export default TemplateBox4