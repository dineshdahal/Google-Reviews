import { createContext, useContext, useEffect, useState } from 'react';
import { getPreviewid } from './api/reviews';

const DefaultSettingsContext = createContext();

export const DefaultSettingsProvider = ({ children }) => {

  const [settings, setSettings] = useState([]);

  useEffect(() => {
        const fetchPreviewId = async () => {
          const daata = await getPreviewid()
          setSettings({
            previewid: daata,
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
        })
          console.log(daata)
        }
        if(settings.length<1){
          fetchPreviewId()
        }
  })



  const initialSettings = {
    previewid: 1,
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

// const [settings, setSettings]=useState(initialSettings)


  return (
    <DefaultSettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </DefaultSettingsContext.Provider>
  );
};

export const useDefaultSettings = () => {
  return useContext(DefaultSettingsContext);
};
