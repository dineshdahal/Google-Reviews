import {
  Box,
  Button,
  HorizontalStack,
  LegacyStack,
  Text,
} from "@shopify/polaris";
import Layout1 from "./Layout1";
import { useDefaultSettings } from "../../utils/DefaultSettingsContext";
import { editPreviewID } from "../../utils/api/reviews";
import { useState } from "react";

const TemplateBox1 = () => {
  const { settings, setSettings,  } = useDefaultSettings();
  const [loading, setLoading]= useState(false);

  const selectTemplate = async (id) => {
    try {
      setLoading(true)
      await editPreviewID(id);
      setSettings((prev) => ({
        ...prev,
        previewid: id,
      }));
      setLoading(false);
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
              <strong>1. Review With Badge-I</strong>
            </Text>
          </LegacyStack.Item>
          <Button
            size="slim"
            onClick={() => selectTemplate(1)}
            disabled={settings.previewid === 1 ? true : null}
            primarySuccess={settings.previewid === 1 ? null : true}
            loading={loading}
          >
            <small>{settings.previewid === 1 ? "Active" : "Select"}</small>
          </Button>
        </HorizontalStack>
      </div>
      <Box id="Tab1-preview">
        <Layout1 settings={settings} />
      </Box>
    </>
  );
};

export default TemplateBox1;
