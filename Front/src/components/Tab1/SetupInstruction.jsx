import { List, Box, Text } from "@shopify/polaris";

const SetupInstruction = () => {
  return (
    <>
    <Text variant="headingMd">Setup Instructions</Text>
    <Box padding={2}>
      <List type="number">
        <List.Item>
          <Text variant="bodySm">
            Start by entering your Google Business name, or domain in the search
            bar. The list of results based on your search will be displayed. Or
            connect your Google Business using Google Map URL. You can use &nbsp;
            <a href="http://maps.google.com">Google Maps</a> to find your Business.
          </Text>
        </List.Item>
        <List.Item>
          <Text variant="bodySm">
            Choose your desired account from the list and connect it. Once
            connected, you will see a default preview of the reviews.
          </Text>
        </List.Item>
        <List.Item>
          <Text variant="bodySm">
            To customize the layout and settings, navigate to the &quot;Layout
            Template&quot; and &quot;Layout Settings&quot; sections.
          </Text>
        </List.Item>
        <List.Item>
          <Text variant="bodySm">
            If you want to add reviews to your store, go to the &quot;Installation&quot;
            tab and click on the setup button. This will take you to the
            customization page.
          </Text>
        </List.Item>
        <List.Item>
          <Text variant="bodySm">
            On the customization page, click on the &quot;Add&quot; section and select
            &quot;Google Review&quot; from the options. You will be able to preview the
            changes. Don't forget to save the changes to publish them on your
            store.
          </Text>
        </List.Item>
      </List>
    </Box>
    </>
  );
};

export default SetupInstruction;
