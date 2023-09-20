import { Text, Box } from "@shopify/polaris";
import Layout1 from "../Tab2/Layout1";
import { useSettings } from "../../utils/SettingsContext";
import Layout2 from "../Tab2/Layout2";
import Layout3 from "../Tab2/Layout3";
import Swiperscroll from "../Swiper/SwiperScroll";
import OffCanvasFloating from "../Swiper/OffCanvasFloating";


const Preview = () => {

const {settings}=useSettings()

const preview=[
  {
  previewid:1,
  data:<Layout1 settings={settings}/>
  },
  {
  previewid:2,
  data:<Layout2 settings={settings}/>
  },
  {
  previewid:3,
  data:<Layout3 settings={settings}/>
  },
  {
  previewid:4,
  data:<Swiperscroll settings={settings}/>
  },
  {
  previewid:5,
  data:<OffCanvasFloating settings={settings}/>
  },
 ]


const selectedpreview=()=>{
  const selectedPreview = preview.find((item) => item.previewid ==settings.previewid);
  if (!selectedPreview) {
    return <div>Preview not found</div>;
  }
  return selectedPreview.data;
}

  return (
    <Box id="Tab1-preview">
      <div className="mb-lg-3 mb-1 ">
        <Text variant="headingSm" as="h6">
          Preview
        </Text>
      </div>
      <div className="">
       {selectedpreview()}
     
      </div>
      
    </Box>
  );
};

export default Preview;
