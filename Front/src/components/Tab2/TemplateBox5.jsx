import { Button, HorizontalStack, Text } from "@shopify/polaris";
import OffCanvasFloating from "../Swiper/OffCanvasFloating";
import { useDefaultSettings } from "../../utils/DefaultSettingsContext";
import { editPreviewID } from "../../utils/api/reviews";

const TemplateBox5 = () => {
  const {settings, setSettings}= useDefaultSettings();

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
        <HorizontalStack align="space-between">
          <Text variant="HeadingSm" as="h4">
            <strong>5. Review With Floating</strong>
          </Text>
          {settings.previewid==5?
                <Button size="slim" disabled><small>Active</small></Button>:
                <Button size="slim" onClick={()=>selectTemplate('5')} primarySuccess ><small>Select</small></Button>
                }
        </HorizontalStack>
      </div>
      <OffCanvasFloating settings={settings}/>
    </>
  );
};

export default TemplateBox5;
