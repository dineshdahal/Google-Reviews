import { Button, HorizontalStack, Text } from "@shopify/polaris";
import OffCanvasStatic from "../Swiper/OffCanvasStatic";

const TemplateBox6 = () => {
  return (
    <>
      <div className="my-2">
        <HorizontalStack align="space-between">
          <Text variant="HeadingSm" as="h4">
            <strong>6. Review With Static</strong>
          </Text>
          <Button size="slim" primarySuccess>
            <small>Select</small>
          </Button>
        </HorizontalStack>
      </div>
      <OffCanvasStatic />
    </>
  );
};

export default TemplateBox6;
