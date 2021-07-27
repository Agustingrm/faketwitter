import React, { useState } from "react";
import TwitterContext from "./TwitterContext";

function GlobalState({ children }) {
  const [displayRegisterWindow, setDisplayRegisterWindow] = useState(false);

  const handleOpenRegisterBox = () => {
    setDisplayRegisterWindow(displayRegisterWindow === true ? false : true);
  };

  const handleCloseRegisterBox = () => {
    setDisplayRegisterWindow(false);
  };

  return <TwitterContext.Provider value={{ displayRegisterWindow, handleOpenRegisterBox, handleCloseRegisterBox }}>{children}</TwitterContext.Provider>;
}

export default GlobalState;
