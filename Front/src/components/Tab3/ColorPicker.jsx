import { useState } from "react"
import { ChromePicker } from "react-color"
import { usePreviewSettings } from "./../../utils/PreviewSettingContext"

const ColorPicker = () => {
  const { settings, setSettings } = usePreviewSettings();
  const [open, setOpen] = useState({
    prev: false,
    card: false,
    text: false,
  })
  const handlePreviewChange = (color) => {
    setSettings(prev => ({ ...prev, previewbody: color.hex }))
  }
  const handleCardChange = (color) => {
    setSettings(prev => ({ ...prev, cardbody: color.hex }))
  }
  const handleTextChange = (color) => {
    setSettings(prev => ({ ...prev, text: color.hex }))
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
        <button className="colorpicker-btn" onClick={() => handleopen('prev')} style={{ background: `${settings.previewbody}` }}></button>
        <p className="mx-1"><small>BackGround</small> </p>
      </div>


      <div className="d-flex align-items-center mx-2">
        <button className="colorpicker-btn" onClick={() => handleopen('text')} style={{ background: `${settings.text}` }}></button>
        <p className="mx-1"><small>Text</small> </p>
      </div>
      <div className="d-flex align-items-center">
        <button className="colorpicker-btn" onClick={() => handleopen('card')} style={{ background: `${settings.cardbody}` }}></button>
        <p className="mx-1"><small>Card Body</small> </p>
      </div>
    </div>
    <div className="colorpickerdiv">
        {open.prev ? <ChromePicker color={settings.previewbody} onChange={handlePreviewChange} /> : null}
        {open.text ? <ChromePicker color={settings.text} onChange={handleTextChange} /> : null}
        {open.card ? <ChromePicker color={settings.cardbody} onChange={handleCardChange} /> : null}
</div>
    </>
  )
}

export default ColorPicker