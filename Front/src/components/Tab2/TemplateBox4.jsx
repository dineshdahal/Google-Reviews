import {
  Box,
  Button,
  HorizontalStack,
  LegacyStack,
  Text,
} from "@shopify/polaris";
import { useDefaultSettings } from "../../utils/DefaultSettingsContext";
import Layout4 from "./Layout4";
import { editPreviewID } from "../../utils/api/reviews";
import { useState } from "react";

const TemplateBox4 = () => {
  const { settings, setSettings } = useDefaultSettings();
  const [ loading, setLoading] = useState(false);
  const selectTemplate = async (id) => {
    try {
setLoading(true);
       await editPreviewID(id);
      setSettings((prev) => ({
        ...prev,
        previewid: id,
      }));
      setLoading(false)
      console.log("Template selected successfully");
    } catch (error) {
      console.error("An error occurred while selecting the template:", error);
    }
  };

  return (
    <>
      <Box>
        <div className="my-2">
          <HorizontalStack align="space-between">
            <LegacyStack.Item fill>
              <Text variant="HeadingSm" as="h4">
                <strong>4. Review With Grid</strong>
              </Text>
            </LegacyStack.Item>
            <Button
              size="slim"
              onClick={() => selectTemplate(4)}
              disabled={settings.previewid === 4 ? true : null}
              primarySuccess={settings.previewid === 4 ? null : true}
              loading={ loading}
            >
              <small>{settings.previewid === 4 ? "Active" : "Select"}</small>
            </Button>
          </HorizontalStack>
        </div>
        <Layout4 settings={settings} />
      </Box>
    </>
  );
};

export default TemplateBox4;
