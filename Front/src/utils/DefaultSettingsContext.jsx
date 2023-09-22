import { createContext, useContext, useEffect, useState } from 'react';
import { getPreviewid, getSettings } from './api/reviews';

const DefaultSettingsContext = createContext();

export const DefaultSettingsProvider = ({ children }) => {

  // const [settings, setSettings] = useState([]);

  const [previewsettings, setPreviewSettings] = useState([]);

  useEffect(() => {
    const fetchSettings = async () => {
      const daata = await getSettings()
      setPreviewSettings(daata)
    }
    if(previewsettings.length<1){
      fetchSettings()
    }
   
},[])

  const initialSettings = {
    previewid: previewsettings.previewid,
    minratings: "1",
    dateformat: "my",
    align: "left",
    theme: "light",
    hidenoreviews: 0,
    hideratingtexts: 0,
    showphoto: 1,
    showname: 1,
    showviewallreviewlink: 0,
    writeareviewbtn: 0,
    autoplay: 0,
    previewbody: "#fff",
    cardbody: "#fff",
    text: "#000",
  };

const [settings, setSettings]=useState(initialSettings)


  return (
    <DefaultSettingsContext.Provider value={{ settings, setSettings, previewsettings, setPreviewSettings }}>
      {children}
    </DefaultSettingsContext.Provider>
  );
};

export const useDefaultSettings = () => {
  return useContext(DefaultSettingsContext);
};
