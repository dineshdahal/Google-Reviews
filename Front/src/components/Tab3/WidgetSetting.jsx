import {
  Button,
  ButtonGroup,
  HorizontalStack,
  LegacyStack,
  Text,
  VerticalStack,
} from "@shopify/polaris";
import WidgetSetting1 from "./WidgetSetting1";
import WidgetSetting2 from "./WidgetSetting2";

const WidgetSetting = () => {
  return (
    <div className="p-3" style={{ background: "#fff" }}>
      <LegacyStack align="space-between" alignment="center">
       <LegacyStack.Item fill>
        <Text variant="bodyMd" as="h4">
          Widgets Settings
        </Text>
       </LegacyStack.Item>
        <ButtonGroup>
          <Button size="slim">
            <small>Reset to default</small>
          </Button>
          <Button size="slim" primarySuccess>
            <small>Update</small>
          </Button>
        </ButtonGroup>
      </LegacyStack>
      <hr />
      <HorizontalStack wrap>
        <div className="col-12 col-lg-6 pe-lg-4 my-2">
          <VerticalStack>
            <WidgetSetting1 />
          </VerticalStack>
        </div>
        <div className="col-12 col-lg-6 ps-lg-4 my-2">
          <VerticalStack>
            <WidgetSetting2 />
          </VerticalStack>
        </div>
      </HorizontalStack>
    </div>
  );
};

export default WidgetSetting;
