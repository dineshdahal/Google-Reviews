import { Box, Button, HorizontalStack, Text } from "@shopify/polaris";

const Tab4 = () => {
  return (
    <div>
      <Box>
        <div className="mx-3 my-5">
          <HorizontalStack align="start" gap={"3"}>
            <Text variant="headingMd" as="h4">
              <p className="fw-bold">
                Setup your widget directly to your store
              </p>
            </Text>
            <Button size="slim" primary>
              <small>Setup</small>
            </Button>
          </HorizontalStack>
        </div>
        <div className="d-flex justify-content-center my-3 mt-5">
          <iframe
            src="  https://www.youtube.com/embed/EtW4evOuEB8"
            width={"500px"}
            height={"300px"}
          ></iframe>
        </div>
      </Box>
    </div>
  );
};

export default Tab4;
