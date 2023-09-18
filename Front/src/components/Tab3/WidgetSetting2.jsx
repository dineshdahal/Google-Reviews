import { Checkbox, VerticalStack } from "@shopify/polaris";
import { useCallback, useState } from "react";

const WidgetSetting2 = () => {
  const [checked, setChecked] = useState({'1':false,'2':false, '3':true,'4':true,'5':false, '6':false, '7':false});

  const handleChange = (name) => {
    setChecked((prev) => ({
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
            checked={checked['1']}
          
            onChange={()=>handleChange('1')}
          />
        </div>

        <div className="mb-2">
          <Checkbox
            label="Hide Rating Texts"
            checked={checked['2']}
        

            onChange={()=>handleChange('2')}
          />
        </div>
        <div className="mb-2">
          <Checkbox
            label="Show Reviewers Photo"
            checked={checked['3']}
            
            onChange={()=>handleChange('3')}
          />
        </div>
        <div className="mb-2">
          <Checkbox
            label="Show Reviewers Name"
            checked={checked['4']}
            name="4"
            onChange={()=>handleChange('4')}
          />
        </div>
        <div className="mb-2">
          <Checkbox
            label="Show View All Reviews Link"
            checked={checked['5']}
            name="5"
            onChange={()=>handleChange('5')}
          />
        </div>
        <div className="mb-2">
          <Checkbox
            label="Show Write A Review Button"
            checked={checked['6']}
            name="6"
            onChange={()=>handleChange('6')}
          />
        </div>

        <Checkbox label="Auto Play" checked={checked['7']}   onChange={()=>handleChange('7')} />
      </VerticalStack>
    </div>
  );
};

export default WidgetSetting2;
