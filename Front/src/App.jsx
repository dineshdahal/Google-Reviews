import { AppProvider, Page } from "@shopify/polaris";
import MainTab from "./Pages/MainTab";

const App = () => {
  return (
    <>
      <AppProvider>
        <Page title="Google Reviews">
          <MainTab />
        </Page>
      </AppProvider>
    </>
  );
};

export default App;
