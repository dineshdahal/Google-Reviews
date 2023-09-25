import { Box, Button, HorizontalStack, Text } from "@shopify/polaris";
import Layout2 from "./Layout2";
import { useDefaultSettings } from "../../utils/DefaultSettingsContext";
import { editPreviewID } from "../../utils/api/reviews";

const TemplateBox2 = () => {
  const { settings, setSettings } = useDefaultSettings();


  const selectTemplate = async (id) => {
    try {
      await editPreviewID(id);
      setSettings((prev) => ({
        ...prev,
        previewid: id 
      }));
      console.log('Template selected successfully');
    } catch (error) {
      console.error('An error occurred while selecting the template:', error);
    }
  };



  return (
    <>
      <div className="my-2">
        <HorizontalStack align="space-between" blockAlign="center">
          <Text variant="HeadingSm" as="h4">
            <strong>2. Review With Badge-II</strong>
          </Text>
          {settings.previewid == 2 ? (
            <Button size="slim" disabled><small>Active</small></Button>
          ) : (
            <Button size="slim" onClick={() => selectTemplate(2)} primarySuccess><small>Select</small></Button>
          )}
        </HorizontalStack>
      </div>
      <Box id="Tab1-preview">
        <Layout2 settings={settings} />
      </Box>
    </>
  );
};

export default TemplateBox2;
