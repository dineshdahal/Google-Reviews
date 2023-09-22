import { Box, Button, HorizontalStack } from "@shopify/polaris";
import SwiperFront1 from "../Swiper/SwiperFront1";
import SwiperCar1 from "../Swiper/SwiperCar1";

const Layout1 = ({ settings }) => {
   let previewbody
let cardbody
let text

if(settings.theme=='light'){
   previewbody={background:'#fff'}
   cardbody={background:'#efefef'}
   text={color:'#000'}
} 
else if(settings.theme=='dark'){
   previewbody={background:'#222222'}
   cardbody={background:'#303030'}
   text={color:'#fff'}
}
else if(settings.theme=='transparent'){
   previewbody={background:'transparent'}
   cardbody={background:'#efefef'}
   text={color:'#000'}
}
else if(settings.theme=='custom'){
   previewbody={background:settings.previewbody}
   cardbody={background:settings.cardbody}
   text={color:settings.text}
}

return (
    <div >
      <Box id="LayoutBox">
        <div className="pt-4" style={previewbody}>
        {settings.writeareviewbtn ? (
          <div className="d-flex justify-content-end mx-4 mb-2 ">
            <Button size="slim" primary>
              Write a review
            </Button>
          </div>
        ) :null}
        <HorizontalStack>
          <div className=" d-flex flex-column flex-lg-row justify-content-center align-items-center mb-lg-5 mb-2 col-lg-3 col-12">
            <SwiperFront1 settings={settings}/>
          </div>
          <div className="px-lg-2 col-12 col-lg-9 ">
            <SwiperCar1 settings={settings} />
          </div>
        </HorizontalStack>
        {settings.showviewallreviewlink ? (
          <div className="mx-4 d-flex justify-content-end">
            <Button plain><a href="" style={text}>Show all reviews</a></Button>
          </div>
        ) : (
         null
          )}
          </div>
      </Box>
    </div>
  );
};

export default Layout1;
