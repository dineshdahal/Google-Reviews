import { Box, Button, HorizontalStack, Text } from "@shopify/polaris"
import Layout1 from "./Layout1"
import { useDefaultSettings } from "../../utils/DefaultSettingsContext"
import { editPreviewID } from "../../utils/api/reviews";

const TemplateBox1 = () => {

    const{settings, setSettings, setPreviewSettings1}=useDefaultSettings();

    const selectTemplate = async (id) => {
      try {
        await editPreviewID(id);
        setSettings((prev) => ({
          ...prev,
          previewid: id 
        }));
        setPreviewSettings1((prev) => ({
          ...prev,
          previewid: id 
        }));

      } catch (error) {
        console.error('An error occurred while selecting the template:', error);
      }
    };


    return (<>
     <div className="my-2"> 
            <HorizontalStack align="space-between" blockAlign="center">
                <Text variant="HeadingSm" as="h4"><strong>1. Review With Badge-I</strong></Text>
                {settings.previewid===1?
                <Button size="slim" disabled><small>Active</small></Button>:
                <Button size="slim" onClick={()=>selectTemplate(1)} primarySuccess><small>Select</small></Button>
                }
            </HorizontalStack>
            </div>
       <Box  id="Tab1-preview" >
          
           <Layout1 settings={settings}/>
        </Box>
        
    </>
    )
}

export default TemplateBox1;
