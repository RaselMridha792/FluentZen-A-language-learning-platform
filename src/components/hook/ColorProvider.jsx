import React, { createContext, useState } from "react";

export const ColorContext = createContext();
const ColorProvider = ({children}) => {
  const [changes, setChanges] = useState(false);
  const handleChangeText = () => {
    setChanges(!changes);
  };

  const colorChangeInfo = {
    changes,
    setChanges,
    handleChangeText,
  };
  return (
    <ColorContext.Provider value={colorChangeInfo}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
