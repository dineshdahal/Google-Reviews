import {  Text } from "@shopify/polaris"
import Layout1 from "../Tab2/Layout1"
import Layout2 from "../Tab2/Layout2";
import Layout3 from "../Tab2/Layout3";
import Layout4 from "../Tab2/Layout4";
import OffCanvasFloating from "../Swiper/OffCanvasFloating";
import { useDefaultSettings } from "../../utils/DefaultSettingsContext";

const Preview = () => {
    const {previewsettings2, usePreviewSettings2}=useDefaultSettings();

    return (
        <div>
        <div className="mb-lg-3 mb-1 ">        
            <Text variant="headingSm" as="h6">
                Preview
            </Text>
          </div>
            <div className="">
                {previewsettings2.previewid==1?<Layout1 settings={previewsettings2}/>:
                previewsettings2.previewid==2?<Layout2 settings={previewsettings2}/>:
                previewsettings2.previewid==3?<Layout3 settings={previewsettings2}/>:
                previewsettings2.previewid==4?<Layout4 settings={previewsettings2}/>:
                previewsettings2.previewid==5?<OffCanvasFloating settings={previewsettings2}/>:''
                }
            </div>
        </div>
    )
}

export default Preview