import { AppProvider, Page } from "@shopify/polaris";
import MainTab from "./Pages/MainTab";

import { SettingsProvider } from './utils/SettingsContext';
import {ReviewsProvider} from './utils/ReviewsContext';
import { DefaultSettingsProvider } from "./utils/DefaultSettingsContext";

const App = () => {
  return (
    <>
    <SettingsProvider>
      <DefaultSettingsProvider>

      <ReviewsProvider>
      <AppProvider>
        <Page title="Google Reviews">
          <MainTab />
        </Page>
      </AppProvider>
      </ReviewsProvider>
      </DefaultSettingsProvider>
    </SettingsProvider>
    </>
  );
};

export default App;
