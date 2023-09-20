import { LegacyStack, Select, Text } from "@shopify/polaris";
import { useState, useCallback } from "react";
import { usePreviewSettings } from "../../utils/PreviewSettingContext";
const WidgetSetting1 = () => {
  const{settings, setSettings}=usePreviewSettings('');

  // const handleChange = useCallback(
    // (value, name) => setSettings((prev) => ({
    //   ...prev,
    //   [name]: value 
    // })),[setSettings]
  // );
  const handleChange=(label, value )=>{
    console.log(label,value)
  }

  const RatingsOptions = [
    { label: "1 Star", value: 1 },
    { label: "2 Star", value: 2 },
    { label: "3 Star", value: 3 },
    { label: "4 Star", value: 4 },
    { label: "5 Star", value: 5 },
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
                options={RatingsOptions}
                onChange={handleChange('minratings')}
                value={settings.minratings}
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
                onChange={handleChange}
                value={settings.date}
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
                onChange={handleChange}
                value={settings.align}
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
                onChange={handleChange}
                value={settings.theme}
              />
            </LegacyStack.Item>
          </LegacyStack>
        </div>
      </div>
    </>
  );
};

export default WidgetSetting1;
