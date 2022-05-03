import { createContext } from "react";

export interface ContextProps {
  sideMenuOpen: boolean;
  toggleSideMenu: () => void;
  isAddingEntry: boolean;
  toggleAdding: () => void;
  isDraggingEntry: boolean;
  toggleDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);
