import { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {


  const initialSettings = {
    previewid: 1,
    minratings: "1",
    dateformat: "my",
    align: "right",
    theme: "dark",
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

  const [settings, setSettings] = useState(initialSettings);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  return useContext(SettingsContext);
};
