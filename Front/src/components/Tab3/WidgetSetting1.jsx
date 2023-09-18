import { LegacyStack, Select, Text } from "@shopify/polaris";
import { useState, useCallback } from "react";
const WidgetSetting1 = () => {
  const [selectMinRatings, setSelectMinRatings] = useState("today");

  const handleSelectChange = useCallback(
    (value) => setSelectMinRatings(value),
    []
  );

  const RatingsOptions = [
    { label: "1 Star", value: "1star" },
    { label: "2 Star", value: "2star" },
    { label: "3 Star", value: "3star" },
    { label: "4 Star", value: "4star" },
    { label: "5 Star", value: "5star" },
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
                onChange={handleSelectChange}
                value={selectMinRatings}
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
                onChange={handleSelectChange}
                value={selectMinRatings}
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
                onChange={handleSelectChange}
                value={selectMinRatings}
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
                onChange={handleSelectChange}
                value={selectMinRatings}
              />
            </LegacyStack.Item>
          </LegacyStack>
        </div>
      </div>
    </>
  );
};

export default WidgetSetting1;
