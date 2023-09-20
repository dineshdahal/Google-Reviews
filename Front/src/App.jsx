import { AppProvider, Page } from "@shopify/polaris";
import MainTab from "./Pages/MainTab";

import { SettingsProvider } from './utils/SettingsContext';
import {ReviewsProvider} from './utils/ReviewsContext';

const App = () => {
  return (
    <>
    <SettingsProvider>
      <ReviewsProvider>
      <AppProvider>
        <Page title="Google Reviews">
          <MainTab />
        </Page>
      </AppProvider>
      </ReviewsProvider>
    </SettingsProvider>
    </>
  );
};

export default App;
