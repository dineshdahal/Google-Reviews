import { Box } from "@shopify/polaris"
// import Preview from "../components/Tab3/Preview"
import WidgetSetting from "../components/Tab3/WidgetSetting"
import LayoutSetting from "../components/Tab3/LayoutSetting"


const Tab3 = () => {
  return (
    <Box>
      <div className=" mb-4">
      <LayoutSetting/>
      </div>
      <WidgetSetting/>
    </Box>
  )
}

export default Tab3