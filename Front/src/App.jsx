import { AppProvider, Page } from "@shopify/polaris";
import MainTab from "./Pages/MainTab";
import {ReviewsProvider} from './utils/ReviewsContext';
import { DefaultSettingsProvider } from "./utils/DefaultSettingsContext";

const App = () => {
  return (
    <>

      <DefaultSettingsProvider>

      <ReviewsProvider>
      <AppProvider>
        <Page title="Google Reviews">
          <MainTab />
        </Page>
      </AppProvider>
      </ReviewsProvider>
      </DefaultSettingsProvider>

    </>
  );
};

export default App;
