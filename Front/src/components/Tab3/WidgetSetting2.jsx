import { Checkbox, VerticalStack } from "@shopify/polaris";

import { usePreviewSettings } from "../../utils/PreviewSettingContext";

const WidgetSetting2 = () => {
  const{settings, setSettings}=usePreviewSettings();

  const handleChange = (name) => {
    setSettings((prev) => ({
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
            checked={settings.hidenoreviews}
            onChange={()=>handleChange('hidenoreviews')}
          />
        </div>
        <div className="mb-2">
          <Checkbox
            label="Hide Rating Texts"
            checked={settings.hideratingtexts}
            onChange={()=>handleChange('hideratingtexts')}
          />
        </div>
        <div className="mb-2">
          <Checkbox
            label="Show Reviewers Photo"
            checked={settings.showphoto}
            onChange={()=>handleChange('showphoto')}
          />
        </div>
        <div className="mb-2">
          <Checkbox
            label="Show Reviewers Name"
            checked={settings.showname}
            name="4"
            onChange={()=>handleChange('showname')}
          />
        </div>
        <div className="mb-2">
          <Checkbox
            label="Show View All Reviews Link"
            checked={settings.showviewallreviewlink}
            name="5"
            onChange={()=>handleChange('showviewallreviewlink')}
          />
        </div>
        <div className="mb-2">
          <Checkbox
            label="Show Write A Review Button"
            checked={settings.writeareviewbtn}
            name="6"
            onChange={()=>handleChange('writeareviewbtn')}
          />
        </div>
        <Checkbox label="Auto Play" checked={settings.autoplay}   onChange={()=>handleChange('autoplay')} />
      </VerticalStack>
    </div>
  );
};

export default WidgetSetting2;
