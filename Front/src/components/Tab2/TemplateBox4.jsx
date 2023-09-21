import { Box, Button, HorizontalStack, Text } from "@shopify/polaris";
import { useDefaultSettings } from "../../utils/DefaultSettingsContext";
import Layout4 from "./Layout4";
import { editPreviewID } from "../../utils/api/reviews";

const TemplateBox4 = () => {
  const {settings}= useDefaultSettings();

  const selectTemplate = async (id) => {
    try {
      await editPreviewID(id);
      console.log('Template selected successfully');
    } catch (error) {
      console.error('An error occurred while selecting the template:', error);
    }
  };


  return (
    <>
      <Box>
        <div className="my-2">
          <HorizontalStack align="space-between">
            <Text variant="HeadingSm" as="h4">
              <strong>4. Review With Grid</strong>
            </Text>
            {settings.previewid==3?
                <Button size="slim" disabled><small>Active</small></Button>:
                <Button size="slim" onClick={()=>selectTemplate('4')} primarySuccess ><small>Select</small></Button>
                }
          </HorizontalStack>
        </div>
        <Layout4 settings={settings}/>
      </Box>
    </>
  );
};

export default TemplateBox4;
