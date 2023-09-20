import {  Text } from "@shopify/polaris"
import Layout1 from "../Tab2/Layout1"
import { useDefaultSettings } from "../../utils/DefaultSettingsContext"
import { usePreviewSettings } from "../../utils/PreviewSettingContext";

const Preview = () => {
    const {settings}=usePreviewSettings();
    return (
        <div className="mb-lg-3 mb-1 p-2" style={{ background: '#fff' }}>
            <Text variant="headingSm" as="h6">
                Preview
            </Text>
            <div className="">
                <Layout1 settings={settings}/>
            </div>
        </div>
    )
}

export default Preview