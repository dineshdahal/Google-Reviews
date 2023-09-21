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
import { usePreviewSettings } from "../../utils/PreviewSettingContext";
import axios from "axios";
const WidgetSetting = () => {
  const { settings, setSettings } = usePreviewSettings();

  const handleUpdate = () => {
    axios
      .patch("http://localhost:8000/api/settings", settings)
      .then(console.log("success"))
      .catch((error) => console.log(error));
  };
const handleReset=()=>{
  setSettings({
    previewid: settings.previewid,
    minratings: "1",
    dateformat: "my",
    align: "left",
    theme: "light",
    hidenoreviews: 0,
    hideratingtexts: 0,
    showphoto: 1,
    showname: 1,
    showviewallreviewlink: 0,
    writeareviewbtn: 0,
    autoplay: 0,
    previewbody: "#fff",
    cardbody: "#fff",
    text: "#000",

})
}


  

  return (
    <div className="p-3" style={{ background: "#fff" }}>
      <LegacyStack align="space-between" alignment="center">
        <LegacyStack.Item fill>
          <Text variant="bodyMd" as="h4">
            Widgets Settings
          </Text>
        </LegacyStack.Item>
        <ButtonGroup>
          <Button size="slim" onClick={handleReset}>
            <small>Reset to default</small>
          </Button>
          <Button size="slim" primarySuccess onClick={handleUpdate}>
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
