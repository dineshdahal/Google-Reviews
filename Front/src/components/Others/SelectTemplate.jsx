import { Button, HorizontalStack, Text } from "@shopify/polaris";


 const SelectTemplate = ({settings, id}) => {

    const id= id;
    const selectTemplate = async (id) => {
        try {
          await editPreviewID(id);
          setSettings((prev) => ({
            ...prev,
            previewid: id 
          }));
        } catch (error) {
          console.error('An error occurred while selecting the template:', error);
        }
      };


  return (
    <div>
         <HorizontalStack align="space-between" blockAlign="center">
                <Text variant="HeadingSm" as="h4"><strong>1. Review With Badge-I</strong></Text>
                {settings.previewid==1?
                <Button size="slim" disabled><small>Active</small></Button>:
                <Button size="slim" primarySuccess><small>Select</small></Button>
                }
            </HorizontalStack>
    </div>
  )
}

export default SelectTemplate