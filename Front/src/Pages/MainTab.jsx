import {AppProvider, Page, LegacyCard, Tabs} from '@shopify/polaris';
import {useState, useCallback} from 'react';

const  MainTab=()=> {
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  const tabs = [
    {
      id: 'all-customers-fitted-2',
      content: 'All',
      accessibilityLabel: 'All customers',
      panelID: 'all-customers-fitted-content-2',
    },
    {
      id: 'accepts-marketing-fitted-2',
      content: 'Accepts marketing',
      panelID: 'accepts-marketing-fitted-Ccontent-2',
    },
  ];

  return (
    <AppProvider >
    <Page title="Example app">
    <LegacyCard>
      <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
        <LegacyCard.Section title={tabs[selected].content}>
          <p>Tab {selected} selected</p>
        </LegacyCard.Section>
      </Tabs>
    </LegacyCard>
    </Page>
</AppProvider>
  );
}

export default MainTab