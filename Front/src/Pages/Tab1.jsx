
import Disconnect from "../components/Tab1/Disconnect";
import Update from "../components/Tab1/Update";
import Preview from "../components/Tab1/Preview";
import SetupInstruction from "../components/Tab1/SetupInstruction";

const Tab1 = () => {
  return (
    <>
      <div style={{ marginBottom: '25px' }}>
        <Disconnect />
      </div>
      <div style={{marginBottom:'25px'}}>
        <Update />
      </div>
     <div style={{marginBottom:'25px'}}>
      <Preview/>
     </div>
     <div>
      <SetupInstruction/>
     </div>
    </>
  );
};

export default Tab1;
