import { Button, HorizontalStack, Text } from "@shopify/polaris";
import OffCanvasFloating from "../Swiper/OffCanvasFloating";
import { useDefaultSettings } from "../../utils/DefaultSettingsContext";

const TemplateBox5 = () => {
  const {settings}= useDefaultSettings();

  return (
    <>
      <div className="my-2">
        <HorizontalStack align="space-between">
          <Text variant="HeadingSm" as="h4">
            <strong>5. Review With Floating</strong>
          </Text>
          <Button size="slim" primarySuccess>
            <small>Select</small>
          </Button>
        </HorizontalStack>
      </div>
      <OffCanvasFloating settings={settings}/>
    </>
  );
};

export default TemplateBox5;
