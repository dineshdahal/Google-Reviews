import { AppProvider, Page } from "@shopify/polaris";
import MainTab from "./Pages/MainTab";

const App = () => {
  return (
    <>
    <AppProvider >
    <Page title="Example app">
      <MainTab />
    </Page>
    </AppProvider>
    </>
  );
};

export default App;
