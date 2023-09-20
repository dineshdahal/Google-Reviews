import { Box, Button, HorizontalStack, Text } from "@shopify/polaris";
import Swiperscroll from "../Swiper/SwiperScroll";
import { useDefaultSettings } from "../../utils/DefaultSettingsContext";

const TemplateBox4 = () => {
  const {settings}= useDefaultSettings();
  return (
    <>
      <Box>
        <div className="my-2">
          <HorizontalStack align="space-between">
            <Text variant="HeadingSm" as="h4">
              <strong>4. Review With Grid</strong>
            </Text>
            <Button size="slim" primarySuccess>
              <small>Select</small>
            </Button>
          </HorizontalStack>
        </div>
        <Swiperscroll settings={settings}/>
      </Box>
    </>
  );
};

export default TemplateBox4;
