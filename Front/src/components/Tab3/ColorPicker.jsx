import { useState } from "react"
import { ChromePicker } from "react-color"
import { useDefaultSettings } from "../../utils/DefaultSettingsContext";

const ColorPicker = () => {
  const { previewsettings2, setPreviewSettings2 } = useDefaultSettings();
  const [open, setOpen] = useState({
    prev: false,
    card: false,
    text: false,
  })
  const handlePreviewChange = (color) => {
    setPreviewSettings2(prev => ({ ...prev, previewbody: color.hex }))
  }
  const handleCardChange = (color) => {
    setPreviewSettings2(prev => ({ ...prev, cardbody: color.hex }))
  }
  const handleTextChange = (color) => {
    setPreviewSettings2(prev => ({ ...prev, text: color.hex }))
  }
  const handleopen = (id) => {
    if (id == 'prev') { setOpen({ prev: !open.prev, card: false, text: false }) }
    if (id == 'card') { setOpen({ prev: false, card: !open.card, text: false }) }
    if (id == 'text') { setOpen({ prev: false, card: false, text: !open.text }) }
  }
  return (
    <>
    <div className="" style={{ display: 'flex', overflow:'off', justifyContent: 'space-between' }}>
      <div className="d-flex align-items-center">
        <button className="colorpicker-btn" onClick={() => handleopen('prev')} style={{ background: `${previewsettings2.previewbody}` }}></button>
        <p className="mx-1"><small>BackGround</small> </p>
      </div>


      <div className="d-flex align-items-center mx-2">
        <button className="colorpicker-btn" onClick={() => handleopen('text')} style={{ background: `${previewsettings2.text}` }}></button>
        <p className="mx-1"><small>Text</small> </p>
      </div>
      <div className="d-flex align-items-center">
        <button className="colorpicker-btn" onClick={() => handleopen('card')} style={{ background: `${previewsettings2.cardbody}` }}></button>
        <p className="mx-1"><small>Card Body</small> </p>
      </div>
    </div>
    <div className="colorpickerdiv">
        {open.prev ? <ChromePicker color={previewsettings2.previewbody} onChange={handlePreviewChange} /> : null}
        {open.text ? <ChromePicker color={previewsettings2.text} onChange={handleTextChange} /> : null}
        {open.card ? <ChromePicker color={previewsettings2.cardbody} onChange={handleCardChange} /> : null}
</div>
    </>
  )
}

export default ColorPicker