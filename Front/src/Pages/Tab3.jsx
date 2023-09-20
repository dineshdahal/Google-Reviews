import { Box } from "@shopify/polaris"
// import Preview from "../components/Tab3/Preview"
import WidgetSetting from "../components/Tab3/WidgetSetting"
import LayoutSetting from "../components/Tab3/LayoutSetting"
import Preview from "../components/Tab3/Preview"
import { PreviewSettingsProvider } from "../utils/PreviewSettingContext"

const Tab3 = () => {


  return (
    <PreviewSettingsProvider>

    <Box>
      <div className=" mb-4">
      <Preview/>
      </div>
      <WidgetSetting/>
    </Box>
    </PreviewSettingsProvider>
  )
}

export default Tab3