import { createContext, useContext, useEffect, useState } from 'react';
import { getSettings } from './api/reviews';

const PreviewSettingsContext = createContext();

export const PreviewSettingsProvider = ({ children }) => {

  const [settings, setSettings] = useState([]);

  useEffect(() => {
        const fetchSettings = async () => {
          const daata = await getSettings()
          setSettings(daata)
          console.log(daata)
        }
        if(settings.length<1){
          fetchSettings()
        }
  })




  const initialSettings = {
    previewid: 3,
    minratings: 3,
    dateformat: "my",
    align: "left",
    theme: "light",
    hidenoreviews: 1,
    hideratingtexts: 1,
    showphoto: 1,
    showname: 1,
    showviewallreviewlink: 0,
    writeareviewbtn: 0,
    autoplay: 0,
    previewbody: "#fff",
    cardbody: "#fff",
    text: "#000",
  };

  // const [settings, setSettings] = useState(initialSettings);

  return (
    <PreviewSettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </PreviewSettingsContext.Provider>
  );
};

export const usePreviewSettings = () => {
  return useContext(PreviewSettingsContext);
};
