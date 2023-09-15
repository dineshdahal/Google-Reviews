import { LegacyCard, LegacyTabs } from "@shopify/polaris";
import { useState, useCallback } from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";

const MainTab = () => {
  const [selected, setSelected] = useState(1);

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
      <LegacyTabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
        <LegacyCard.Section id="main-bg" >
      <div >
        {selected ==0 && <Tab1 />}
        {selected ==1 && <Tab2 />}
        {selected ==2 && <Tab3 />}
      </div>
             
        </LegacyCard.Section>
      </LegacyTabs>
    </LegacyCard>
    
  );
};

export default MainTab;
