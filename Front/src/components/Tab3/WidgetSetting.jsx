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
import axios from "axios";
import { useDefaultSettings } from "../../utils/DefaultSettingsContext";
import { useState } from "react";
const WidgetSetting = () => {
  const { previewsettings2, setPreviewSettings1, setPreviewSettings2 } =    useDefaultSettings();
  const[loading, setLoading]=useState(false);

  const handleUpdate =async () => {
  setLoading(true)
    const post = await axios
      .patch("http://localhost:8000/api/settings", previewsettings2)
      .then(console.log("success"))
      .catch((error) => console.log(error));
    post ? setPreviewSettings1(previewsettings2) : console.log("error");
    setLoading(false)
  };

  const handleReset = () => {
    setPreviewSettings2({
      previewid: previewsettings2.previewid,
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
    });
  };
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
          <Button size="slim" primarySuccess onClick={handleUpdate} loading={loading}>
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
