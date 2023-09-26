import {
  Box,
  Button,
  HorizontalStack,
  LegacyStack,
  Text,
} from "@shopify/polaris";
import Layout3 from "./Layout3";
import { useDefaultSettings } from "../../utils/DefaultSettingsContext";
import { editPreviewID } from "../../utils/api/reviews";
import { useState } from "react";

const TemplateBox3 = () => {
  const { settings, setSettings } = useDefaultSettings();
  const [loading, setLoading] = useState(false);

  const selectTemplate = async (id) => {
    try {
      setLoading(true);
      await editPreviewID(id);
      setSettings((prev) => ({
        ...prev,
        previewid: id,
      }));
      setLoading(false);
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
                <strong>3. Review With Badge-III</strong>
              </Text>
            </LegacyStack.Item>
            <Button
              size="slim"
              onClick={() => selectTemplate(3)}
              disabled={settings.previewid === 3 ? true : null}
              primarySuccess={settings.previewid === 3 ? null : true}
              loading={loading}
            >
              <small>{settings.previewid === 3 ? "Active" : "Select"}</small>
            </Button>
          </HorizontalStack>
        </div>
        <Layout3 settings={settings} />
      </Box>
    </>
  );
};

export default TemplateBox3;
