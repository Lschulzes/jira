import { ReactNode, useReducer } from "react";
import { UIContext, UIReducer } from "./";

export type UIState = {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDraggingEntry: boolean;
};

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDraggingEntry: false,
};

export const UIProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE, undefined);

  const toggleSideMenu = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  const toggleAdding = () => {
    dispatch({ type: "TOGGLE_IS_ADDING" });
  };

  const toggleDragging = () => {
    dispatch({ type: "TOGGLE_IS_DRAGGING" });
  };

  return (
    <UIContext.Provider
      value={{ ...state, toggleSideMenu, toggleAdding, toggleDragging }}
    >
      {children}
    </UIContext.Provider>
  );
};
