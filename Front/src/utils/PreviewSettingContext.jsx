import { createContext, useContext, useState } from 'react';

const PreviewSettingsContext = createContext();

export const PreviewSettingsProvider = ({ children }) => {
  const initialSettings = {
    previewid: 1,
    minratings: 3,
    dateformat: "my",
    align: "left",
    theme: "dark",
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

  const [settings, setSettings] = useState(initialSettings);

  return (
    <PreviewSettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </PreviewSettingsContext.Provider>
  );
};

export const usePreviewSettings = () => {
  return useContext(PreviewSettingsContext);
};
