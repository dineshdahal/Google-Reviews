import TemplateBox1 from "../components/Tab2/TemplateBox1"
import TemplateBox2 from "../components/Tab2/TemplateBox2"
import TemplateBox3 from "../components/Tab2/TemplateBox3"

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
    </>
  )
}

export default Tab2