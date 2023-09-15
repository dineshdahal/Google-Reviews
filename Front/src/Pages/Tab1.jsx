
import Disconnect from "../components/Tab1/Disconnect";
import Update from "../components/Tab1/Update";
import Preview from "../components/Tab1/Preview";
import SetupInstruction from "../components/Tab1/SetupInstruction";

const Tab1 = () => {
  return (
    <>
      <div className="mb-4">
        <Disconnect />
      </div>
      <div className="mb-4">
        <Update />
      </div>
     <div className="mb-4 ">
      <Preview/>
     </div>
     <div>
      <SetupInstruction/>
     </div>
    </>
  );
};

export default Tab1;
