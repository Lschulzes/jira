import { ReactNode, useReducer } from "react";
import { UIContext, UIReducer } from "./";

export type UIState = {
  sideMenuOpen: boolean;
};

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
};

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE, undefined);

  const toggleSideMenu = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  return (
    <UIContext.Provider value={{ ...state, toggleSideMenu }}>
      {children}
    </UIContext.Provider>
  );
};
