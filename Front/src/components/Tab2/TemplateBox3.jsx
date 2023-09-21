import { Box, Button, HorizontalStack, Text } from "@shopify/polaris"
import Layout3 from "./Layout3";
import { useDefaultSettings } from "../../utils/DefaultSettingsContext";
import { editPreviewID } from "../../utils/api/reviews";


const TemplateBox3 = () => {
    const {settings, setSettings}=useDefaultSettings();

      const selectTemplate = async (id) => {
        try {
          await editPreviewID(id);
          console.log('Template selected successfully');
        } catch (error) {
          console.error('An error occurred while selecting the template:', error);
        }
      };

    return (<>
        <Box>
            <div className="my-2">
                <HorizontalStack align="space-between">
                    <Text variant="HeadingSm" as="h4"><strong>3. Review With Badge-III</strong></Text>
                 
                    {settings.previewid==3?
                <Button size="slim" disabled><small>Active</small></Button>:
                <Button size="slim" onClick={()=>selectTemplate('3')} primarySuccess ><small>Select</small></Button>
                }
                </HorizontalStack>
            </div>
           <Layout3 settings={settings}/>
        </Box>
    </>
    )
}

export default TemplateBox3;
