import { createContext, useContext, useState } from 'react';

const DefaultSettingsContext = createContext();

export const DefaultSettingsProvider = ({ children }) => {


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

const settings=initialSettings

  return (
    <DefaultSettingsContext.Provider value={{ settings }}>
      {children}
    </DefaultSettingsContext.Provider>
  );
};

export const useDefaultSettings = () => {
  return useContext(DefaultSettingsContext);
};
