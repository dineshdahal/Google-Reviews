import { Checkbox, VerticalStack } from "@shopify/polaris";
import { useDefaultSettings } from "../../utils/DefaultSettingsContext";

const WidgetSetting2 = () => {
  const{previewsettings2, setPreviewSettings2}=useDefaultSettings();

  const handleChange = (name) => {
    setPreviewSettings2((prev) => ({
      ...prev,
      [name]: !prev[name] // Toggle the value of the checkbox
    }));
  };
  return (
    <div>
      <VerticalStack>
        <div className="mb-2">
          <Checkbox
            label="Hide Reviews Without Comments"
            checked={previewsettings2.hidenoreviews}
            onChange={()=>handleChange('hidenoreviews')}
          />
        </div>
        <div className="mb-2">
          <Checkbox
            label="Hide Rating Texts"
            checked={previewsettings2.hideratingtexts}
            onChange={()=>handleChange('hideratingtexts')}
          />
        </div>
        <div className="mb-2">
          <Checkbox
            label="Show Reviewers Photo"
            checked={previewsettings2.showphoto}
            onChange={()=>handleChange('showphoto')}
          />
        </div>
        <div className="mb-2">
          <Checkbox
            label="Show Reviewers Name"
            checked={previewsettings2.showname}
            name="4"
            onChange={()=>handleChange('showname')}
          />
        </div>
        <div className="mb-2">
          <Checkbox
            label="Show View All Reviews Link"
            checked={previewsettings2.showviewallreviewlink}
            name="5"
            onChange={()=>handleChange('showviewallreviewlink')}
          />
        </div>
        <div className="mb-2">
          <Checkbox
            label="Show Write A Review Button"
            checked={previewsettings2.writeareviewbtn}
            name="6"
            onChange={()=>handleChange('writeareviewbtn')}
          />
        </div>
        <Checkbox label="Auto Play" checked={previewsettings2.autoplay}   onChange={()=>handleChange('autoplay')} />
      </VerticalStack>
    </div>
  );
};

export default WidgetSetting2;
