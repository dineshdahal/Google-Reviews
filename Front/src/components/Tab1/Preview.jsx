import { Text, Box } from "@shopify/polaris";
import Layout1 from "../Tab2/Layout1";
import Layout2 from "../Tab2/Layout2";
import Layout3 from "../Tab2/Layout3";
import Swiperscroll from "../Swiper/SwiperScroll";
import OffCanvasFloating from "../Swiper/OffCanvasFloating";
import { useDefaultSettings } from "../../utils/DefaultSettingsContext";


const Preview = () => {

const {previewsettings1}=useDefaultSettings()

const preview=[
  {
  previewid:1,
  data:<Layout1 settings={previewsettings1}/>
  },
  {
  previewid:2,
  data:<Layout2 settings={previewsettings1}/>
  },
  {
  previewid:3,
  data:<Layout3 settings={previewsettings1}/>
  },
  {
  previewid:4,
  data:<Swiperscroll settings={previewsettings1}/>
  },
  {
  previewid:5,
  data:<OffCanvasFloating settings={previewsettings1}/>
  },
 ]


const selectedpreview=()=>{
  const selectedPreview = preview.find((item) => item.previewid ==previewsettings1.previewid);
  if (!selectedPreview) {
    return <div>Preview not found</div>;
  }
  return selectedPreview.data;
}

  return (
    <Box id="Tab1-preview">
      <div className="px-2 py-2">

      <div className="mb-lg-3 mb-1 ">
        <Text variant="headingSm" as="h6">
          Preview
        </Text>
      </div>
      <div className="">
       {selectedpreview()}
     
      </div>
      
      </div>
    </Box>
  );
};

export default Preview;
