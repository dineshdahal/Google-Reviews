import { Button, HorizontalStack, LegacyStack, Text } from "@shopify/polaris";
import OffCanvasFloating from "../Swiper/OffCanvasFloating";
import { useDefaultSettings } from "../../utils/DefaultSettingsContext";
import { editPreviewID } from "../../utils/api/reviews";
import { useState } from "react";

const TemplateBox5 = () => {
  const { settings, setSettings } = useDefaultSettings();
  const [loading, setLoading] = useState(false);

  const selectTemplate = async (id) => {
    try {
      setLoading(true)
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
      <div className="my-2">
        <HorizontalStack align="space-between">
          <LegacyStack.Item fill>
            <Text variant="HeadingSm" as="h4">
              <strong>5. Review With Floating</strong>
            </Text>
          </LegacyStack.Item>
          <Button
            size="slim"
            onClick={() => selectTemplate(5)}
            disabled={settings.previewid === 5 ? true : null}
            primarySuccess={settings.previewid === 5 ? null : true}
            loading={loading}
          >
            <small>{settings.previewid === 5 ? "Active" : "Select"}</small>
          </Button>
        </HorizontalStack>
      </div>
      <OffCanvasFloating settings={settings} />
    </>
  );
};

export default TemplateBox5;
