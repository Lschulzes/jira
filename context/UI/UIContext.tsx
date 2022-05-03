import { createContext } from "react";

export interface ContextProps {
  sideMenuOpen: boolean;
  toggleSideMenu: () => void;
  isAddingEntry: boolean;
  toggleAdding: () => void;
}

export const UIContext = createContext({} as ContextProps);
