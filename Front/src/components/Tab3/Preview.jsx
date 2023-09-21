import {  Text } from "@shopify/polaris"
import Layout1 from "../Tab2/Layout1"
import Layout2 from "../Tab2/Layout2";
import Layout3 from "../Tab2/Layout3";
import Layout4 from "../Tab2/Layout4";
import OffCanvasFloating from "../Swiper/OffCanvasFloating";
import { usePreviewSettings } from "../../utils/PreviewSettingContext";

const Preview = () => {
    const {settings}=usePreviewSettings();

    return (
        <div>
        <div className="mb-lg-3 mb-1 ">
      
          
            <Text variant="headingSm" as="h6">
                Preview
            </Text>
          </div>
            <div className="">
                {settings.previewid==1?<Layout1 settings={settings}/>:
                settings.previewid==2?<Layout2 settings={settings}/>:
                settings.previewid==3?<Layout3 settings={settings}/>:
                settings.previewid==4?<Layout4 settings={settings}/>:
                settings.previewid==5?<OffCanvasFloating settings={settings}/>:''
                }
            </div>
        </div>
    )
}

export default Preview