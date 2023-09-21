import { createContext, useContext, useEffect, useState } from 'react';
import { getReviews, getSettings } from './api/reviews';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {

  
  // const [data, setData] = useState([])
  const [settings, setSettings] = useState([]);

  useEffect(() => {
        const fetchSettings = async () => {
          const daata = await getSettings()
          setSettings(daata)
        }
        if(settings.length<1){
          fetchSettings()
        }
  })

  const initialSettings = {
    previewid: 1,
    minratings: "1",
    dateformat: "my",
    align: "right",
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


  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  return useContext(SettingsContext);
};
