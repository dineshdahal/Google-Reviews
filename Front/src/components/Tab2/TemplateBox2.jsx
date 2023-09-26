import {
  Box,
  Button,
  HorizontalStack,
  LegacyStack,
  Text,
} from "@shopify/polaris";
import Layout2 from "./Layout2";
import { useDefaultSettings } from "../../utils/DefaultSettingsContext";
import { editPreviewID } from "../../utils/api/reviews";
import { useState } from "react";

const TemplateBox2 = () => {
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
      <div className="my-2">
        <HorizontalStack align="space-between" blockAlign="center">
          <LegacyStack.Item fill>
            <Text variant="HeadingSm" as="h4">
              <strong>2. Review With Badge-II</strong>
            </Text>
          </LegacyStack.Item>
          <Button
            size="slim"
            onClick={() => selectTemplate(2)}
            disabled={settings.previewid === 2 ? true : null}
            primarySuccess={settings.previewid === 2 ? null : true}
            loading={loading}
          >
            <small>{settings.previewid === 2 ? "Active" : "Select"}</small>
          </Button>
        </HorizontalStack>
      </div>
      <Box id="Tab1-preview">
        <Layout2 settings={settings} />
      </Box>
    </>
  );
};

export default TemplateBox2;
