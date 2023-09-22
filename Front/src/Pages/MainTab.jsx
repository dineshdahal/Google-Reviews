import { Icon, LegacyCard, LegacyStack, LegacyTabs, Text } from "@shopify/polaris";
import { useState, useCallback } from "react";
import { ChevronRightMinor } from '@shopify/polaris-icons';
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";

const MainTab = () => {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );

  const TabTitle = (title) => {
    return <div className="d-flex justify-content-between w-100">
      <div><Icon source={ChevronRightMinor} /></div>
      <div><Text><strong>{title}</strong></Text></div>
    </div>
  }

  const tabs = [
    {
      id: "connect-google-platform",
      content: TabTitle('Connect Google Platform'),
      accessibilityLabel: "Connect Google Platform",
      panelID: "connect-google-platform-content",
    },
    {
      id: "layout-template",
      content: TabTitle('Layout Template'),
      panelID: "layout-template-content",
    },
    {
      id: "layout-setting",
      content: TabTitle('Layout Setting'),
      panelID: "layout-setting-content",
    },
    {
      id: "installation",
      content: TabTitle('Installation'),
      panelID: "installation-content",
    },
  ];

  return (
    <LegacyCard>
      <LegacyTabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
        <LegacyCard.Section id="main-bg" >
          <div >
            {selected == 0 && <Tab1 />}
            {selected == 1 && <Tab2 />}
            {selected == 2 && <Tab3 />}
            {selected == 3 && <Tab4 />}
          </div>
        </LegacyCard.Section>
      </LegacyTabs>
    </LegacyCard>
  );
};

export default MainTab;
