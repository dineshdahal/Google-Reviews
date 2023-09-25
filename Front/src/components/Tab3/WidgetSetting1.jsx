import { LegacyStack, Select, Text } from "@shopify/polaris";
import ColorPicker from "./ColorPicker";
import { useDefaultSettings } from "../../utils/DefaultSettingsContext";
import { useCallback } from "react";
const WidgetSetting1 = () => {
  const { previewsettings2, setPreviewSettings2 } = useDefaultSettings();

  const handleRatingsChange = useCallback(
    (value) => setPreviewSettings2((prev) => ({
      ...prev,
      minratings: value
    })), []);

  const handleDateChange = useCallback(
    (value) => setPreviewSettings2((prev) => ({
      ...prev,
      dateformat: value
    })), []);
  
    const handleAlignChange = useCallback(
    (value) => setPreviewSettings2((prev) => ({
      ...prev,
      align: value
    })), []);

    const handleThemeChange = useCallback(
    (value) => setPreviewSettings2((prev) => ({
      ...prev,
      theme: value
    })), []);

  const RatingsOptions = [
    { label: "1 Star", value: '1' },
    { label: "2 Star", value: '2' },
    { label: "3 Star", value: '3' },
    { label: "4 Star", value: '4' },
    { label: "5 Star", value: '5' },
  ];

  const DateOptions = [
    { label: "Month Year", value: "my" },
    { label: "Year Month Day", value: "ymd" },
    { label: "Month Day Year", value: "mdy" },
    { label: "Hide", value: "hide" },
  ];

  const AlignOptions = [
    { label: "Left", value: "left" },
    { label: "Center", value: "center" },
    { label: "Right", value: "right" },
  ];

  const ThemeOptions = [
    { label: "Light", value: "light" },
    { label: "Dark", value: "dark" },
    { label: "Transparent", value: "transparent" },
    { label: "Custom", value: "custom" }
  ];



  return (
    <>
      <div className="ps-2">
        <div className="mb-2">
          <LegacyStack alignment="center">
            <div style={{ width: "125px" }}>
              <Text variant="headingSm">
                <small>Minimum Rating</small>
              </Text>
            </div>
            <LegacyStack.Item fill>
              <Select
                label=""
                name="minratings"
                options={RatingsOptions}
                onChange={handleRatingsChange}
                value={previewsettings2.minratings}
              />
            </LegacyStack.Item>
          </LegacyStack>
        </div>
        <div className="mb-2">
          <LegacyStack alignment="center">
            <div style={{ width: "125px" }}>
              <Text variant="headingSm">
                <small>Select Data Format</small>
              </Text>
            </div>
            <LegacyStack.Item fill>
              <Select
                options={DateOptions}
                onChange={handleDateChange}
                value={previewsettings2.dateformat}
              />
            </LegacyStack.Item>
          </LegacyStack>
        </div>
        <div className="mb-2">
          <LegacyStack alignment="center">
            <div style={{ width: "125px" }}>
              <Text variant="headingSm">
                <small>Align</small>
              </Text>
            </div>
            <LegacyStack.Item fill>
              <Select
                label=""
                options={AlignOptions}
                onChange={handleAlignChange}
                value={previewsettings2.align}
              />
            </LegacyStack.Item>
          </LegacyStack>
        </div>
        <div className="mb-2">
          <LegacyStack alignment="center">
            <div style={{ width: "125px" }}>
              <Text variant="headingSm">
                <small>Theme</small>
              </Text>
            </div>
            <LegacyStack.Item fill>
              <Select
                label=""
                options={ThemeOptions}
                onChange={handleThemeChange}
                value={previewsettings2.theme}
              />
            </LegacyStack.Item>
            
          </LegacyStack>
          {previewsettings2.theme==='custom'?
          <LegacyStack alignment="center">
            <div style={{ width: "125px" }}>
            </div>
            <div className="my-2">

            <LegacyStack.Item fill>
            <ColorPicker/>
            </LegacyStack.Item>

            </div>
          </LegacyStack>
        :''}
        </div>
      </div>
    </>
  );
};

export default WidgetSetting1;
