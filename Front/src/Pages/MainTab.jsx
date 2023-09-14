import { LegacyCard, Tabs } from "@shopify/polaris";
import { useState, useCallback } from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

const MainTab = () => {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );

  const tabs = [
    {
      id: "connect-google-platform",
      content: "Connect Google Platform",
      accessibilityLabel: "Connect Google Platform",
      panelID: "connect-google-platform-content",
    },
    {
      id: "layout-template",
      content: "Layout Template",
      panelID: "layout-template-content",
    },
    {
      id: "layout-setting",
      content: "Layout Setting",
      panelID: "layout-setting-content",
    },
  ];

  return (
    <LegacyCard>
      <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
        <LegacyCard.Section >
        <div id="connect-google-platform-content">
        {selected ==0 && <Tab1 />}
      </div>
      <div id="layout-template-content">
        {selected ==1 && <Tab2 />}
      </div>
      <div id="layout-setting-content">
        {selected ==2 && <Tab3 />}
      </div>
        </LegacyCard.Section>
      </Tabs>
    </LegacyCard>
  );
};

export default MainTab;
