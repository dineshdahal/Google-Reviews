import OffCanvasNotStatic from "../components/Swiper/OffCanvasNotStatic";
import OffCanvasStatic from "../components/Swiper/OffCanvasStatic";
import TemplateBox1 from "../components/Tab2/TemplateBox1";
import TemplateBox2 from "../components/Tab2/TemplateBox2";
import TemplateBox3 from "../components/Tab2/TemplateBox3";
import TemplateBox4 from "../components/Tab2/TemplateBox4";

const Tab2 = () => {
  return (
    <>
      <div className="my-3 ">
        <TemplateBox1 />
      </div>
      <hr />
      <div className="my-4">
        <TemplateBox2 />
      </div>
      <hr />
      <div className="my-4">
        <TemplateBox3 />
      </div>
      <hr />
      <div className="my-4">
        <TemplateBox4 />
      </div>
      <hr />
      <div className="my-4">
        <OffCanvasStatic />
      </div>
      <hr />
      <div className="my-4">
<OffCanvasNotStatic/>
      </div>
    </>
  );
};

export default Tab2;
