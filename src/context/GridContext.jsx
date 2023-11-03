import React, { createContext, useContext, useState } from "react";

//here we created context
const GridContext = createContext();

//Custom hook to get context in order to get values and methods
export const useGrid = () => {
  return useContext(GridContext);
};

//This is provider
export const GridProvider = ({ children }) => {
  const [onCount, setOnCount] = useState(0);

  const toggleCell = (isOn) => {
    setOnCount((prevCount) => (isOn ? prevCount - 1 : prevCount + 1));
  };

  return (
    <GridContext.Provider value={{ onCount, toggleCell }}>
      {children}
    </GridContext.Provider>
  );
};
