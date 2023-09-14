import { Box, HorizontalStack, Text } from "@shopify/polaris";
import SwiperFront from "./SwiperFront";
import Swiper1 from "./Swiper1";

const Preview = () => {
    return (
        <Box padding={"5"} id="Tab1-preview" >
            <div className="mb-3">
                <Text variant="headingSm" as="h6">Preview</Text>
            </div>
            <HorizontalStack>
                <div className="col-4 d-flex align-items-center">
                    <SwiperFront />
                </div>
                <div className="col-8 ">
                    <Swiper1 />
                </div>
            </HorizontalStack>
        </Box>
    );
};

export default Preview;
