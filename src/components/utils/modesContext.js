import { createContext, useContext } from "react";

export const ModeContext = createContext({
  changeMode: () => { },
});

export const useMode = () => useContext(ModeContext);
