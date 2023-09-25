import { createContext, useContext, useEffect, useState } from 'react';
import { getPreviewid, getSettings } from './api/reviews';

const DefaultSettingsContext = createContext();

export const DefaultSettingsProvider = ({ children }) => {

  const initialSettings = {
    previewid:"",
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

  const [previewsettings1, setPreviewSettings1] = useState([]);
  const [settings, setSettings] = useState(initialSettings);
  const [previewsettings2, setPreviewSettings2] = useState([]);
const[reload, setReload]=useState({reload:false});

  useEffect(() => {
    const fetchSettings = async () => {
      const daata = await getSettings();
      setPreviewSettings1(daata);
      setPreviewSettings2(daata);

      if(previewsettings1.previewid!=settings.previewid){
        setSettings((prevSettings) => ({
          ...prevSettings,
          previewid: daata.previewid,
        }));
      }
    };

  fetchSettings();

  }, [settings]);

  



  return (
    <DefaultSettingsContext.Provider value={{reload, setReload, settings, setSettings, previewsettings1, setPreviewSettings1, previewsettings2, setPreviewSettings2 }}>
      {children}
    </DefaultSettingsContext.Provider>
  );
};

export const useDefaultSettings = () => {
  return useContext(DefaultSettingsContext);
};
