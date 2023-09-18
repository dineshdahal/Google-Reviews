import { Text, Box } from "@shopify/polaris";
import Layout1 from "../Tab2/Layout1";

const Preview = () => {
  return (
    <Box id="Tab1-preview">
      <div className="mb-lg-3 mb-1 ">
        <Text variant="headingSm" as="h6">
          Preview
        </Text>
      </div>
      <div className="">
        <Layout1 />
      </div>
    </Box>
  );
};

export default Preview;
